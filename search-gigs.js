// Multi-source Live Gig & Startup Contract Searcher (Keyword + Location)
async function searchGigs({ query = 'design', location = 'San Francisco' } = {}) {
  const results = [];
  const qLower = (query || 'design').toLowerCase().trim();
  const locLower = (location || 'San Francisco').toLowerCase().trim();

  function cleanHtml(html) {
    return (html || '')
      .replace(/<p>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
      .replace(/&#x27;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&#x2F;/g, '/')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // 1. Hacker News "Who is hiring?" & "Seeking Freelancer" (Current Month YC / SF Founders)
  try {
    const threadsRes = await fetch('https://hn.algolia.com/api/v1/search_by_date?tags=story,author_whoishiring&hitsPerPage=6');
    const threads = await threadsRes.json();
    const hiringThread = (threads.hits || []).find(t => /who is hiring/i.test(t.title));
    const freelanceThread = (threads.hits || []).find(t => /freelancer/i.test(t.title));

    if (hiringThread) {
      const searchQ = encodeURIComponent(`${location} ${query}`.trim());
      const hnRes = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=comment,story_${hiringThread.objectID}&query=${searchQ}&hitsPerPage=25`);
      const hnData = await hnRes.json();

      for (const h of (hnData.hits || [])) {
        const text = cleanHtml(h.comment_text);
        if (!text) continue;
        const firstLine = text.split(/[|\n]/).slice(0, 4).join(' | ').slice(0, 120);
        const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
        const urlMatch = text.match(/https?:\/\/[^\s)]+/);

        results.push({
          id: `hn_${h.objectID}`,
          source: `YC / SF Startup (${hiringThread.title.replace('Ask HN: ', '')})`,
          title: firstLine,
          description: text.slice(0, 520),
          author: h.author,
          contactEmail: emailMatch ? emailMatch[0] : null,
          url: urlMatch ? urlMatch[0] : `https://news.ycombinator.com/item?id=${h.objectID}`,
          hnUrl: `https://news.ycombinator.com/item?id=${h.objectID}`,
          ageMinutes: Math.max(1, Math.round((Date.now() / 1000 - h.created_at_i) / 60)),
          category: `🎨 ${location || 'SF'} Startup / Design & Product`,
          canAutoBuild: emailMatch
            ? `⚡ Direct Founder Email (${emailMatch[0]}) — Send Live Redesign Prototype!`
            : '⚡ High-Ticket SF Startup — Pitch with Live Prototype'
        });
      }
    }

    if (freelanceThread) {
      const flRes = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=comment,story_${freelanceThread.objectID}&hitsPerPage=50`);
      const flData = await flRes.json();
      for (const h of (flData.hits || [])) {
        const text = cleanHtml(h.comment_text);
        if (!text || /^SEEKING WORK/i.test(text)) continue;
        if (!/SEEKING FREELANCER/i.test(text) && !/hiring|looking for|contract/i.test(text)) continue;
        const emailMatch = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
        results.push({
          id: `hnfl_${h.objectID}`,
          source: `HN Freelance Board (${freelanceThread.title.replace('Ask HN: ', '')})`,
          title: text.slice(0, 120),
          description: text.slice(0, 520),
          author: h.author,
          contactEmail: emailMatch ? emailMatch[0] : null,
          url: `https://news.ycombinator.com/item?id=${h.objectID}`,
          ageMinutes: Math.max(1, Math.round((Date.now() / 1000 - h.created_at_i) / 60)),
          category: '💼 Direct Freelance Contract',
          canAutoBuild: emailMatch
            ? `⚡ Direct Client Email (${emailMatch[0]})`
            : '⚡ Fast Proof-of-Work Pitch'
        });
      }
    }
  } catch (e) {}

  // 2. RemoteOK Design API
  try {
    const tag = qLower.includes('design') ? 'design' : encodeURIComponent(qLower);
    const rokRes = await fetch(`https://remoteok.com/api?tag=${tag}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    if (rokRes.ok) {
      const rokData = await rokRes.json();
      for (const job of (rokData || []).slice(1, 50)) {
        const posLower = (job.position || '').toLowerCase();
        if (qLower.includes('design') && !/design|ui|ux|creative|brand|figma|graphic|visual|web|video/.test(posLower)) {
          continue;
        }
        const descClean = cleanHtml(job.description || '');
        const isBayAreaOrFreelance = /san francisco|bay area|california|freelance|contract/i.test(`${job.position} ${job.location} ${descClean}`);
        results.push({
          id: `rok_${job.id}`,
          source: `RemoteOK (${job.location || 'US / Remote'})`,
          title: `${job.position} @ ${job.company}`,
          description: descClean.slice(0, 420),
          author: job.company,
          url: job.url || job.apply_url,
          ageMinutes: isBayAreaOrFreelance ? 30 : Math.max(60, Math.round((Date.now() / 1000 - (job.epoch || Date.now() / 1000)) / 60)),
          category: isBayAreaOrFreelance ? '🔥 Bay Area / Freelance Design Gig' : '🎨 Design & UI/UX Contract',
          canAutoBuild: '⚡ Build Interactive Redesign Sample in 10m'
        });
      }
    }
  } catch (e) {}

  // 3. WeWorkRemotely Design RSS
  try {
    const wwrRes = await fetch('https://weworkremotely.com/categories/remote-design-jobs.rss');
    if (wwrRes.ok) {
      const xml = await wwrRes.text();
      const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => m[1]);
      for (const itemXml of items) {
        const title = cleanHtml((itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || itemXml.match(/<title>(.*?)<\/title>/) || [])[1] || '');
        if (!/design|ui|ux|creative|brand|graphic|art|product|web/i.test(title)) continue;
        const link = (itemXml.match(/<link>(.*?)<\/link>/) || [])[1] || '';
        const region = cleanHtml((itemXml.match(/<region><!\[CDATA\[(.*?)\]\]><\/region>/) || [])[1] || 'US / Remote');
        const desc = cleanHtml((itemXml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || [])[1] || '');
        results.push({
          id: `wwr_${Buffer.from(link || title).toString('base64').slice(0, 12)}`,
          source: `WeWorkRemotely (${region})`,
          title,
          description: desc.slice(0, 420),
          author: title.split(':')[0] || 'Hiring Team',
          url: link,
          ageMinutes: 180,
          category: '🎨 Remote UI/UX & Web Design',
          canAutoBuild: '⚡ Send Interactive Redesign Concept'
        });
      }
    }
  } catch (e) {}

  // Prioritize items with direct email or Freelance/Bay Area match first
  results.sort((a, b) => {
    const aScore = (a.contactEmail ? 50 : 0) + (/Bay Area|Freelance|SF Startup/i.test(a.category) ? 30 : 0);
    const bScore = (b.contactEmail ? 50 : 0) + (/Bay Area|Freelance|SF Startup/i.test(b.category) ? 30 : 0);
    return bScore - aScore;
  });

  return results;
}

module.exports = { searchGigs };
