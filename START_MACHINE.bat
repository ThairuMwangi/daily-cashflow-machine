@echo off
title Daily Cashflow Command Center - Local Money Machine
cd /d "%~dp0"
echo Starting Daily Cashflow Command Center on http://localhost:3050 ...
start "" "http://localhost:3050"
node server.js
pause
