@echo off
title Engineering Student Portal
echo ======================================================
echo       Launching Engineering Student Portal
echo ======================================================
echo.

:: Check for Python
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Starting local web server using Python on port 8000...
    echo Close this window to stop the server.
    echo.
    start "" "http://localhost:8000/index.html"
    python -m http.server 8000
    goto :eof
)

:: Check for Node.js
where node >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Starting local web server using Node.js on port 8000...
    echo Close this window to stop the server.
    echo.
    start "" "http://localhost:8000/index.html"
    node -e "const http=require('http'),fs=require('fs'),path=require('path');const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.jpg':'image/jpeg'};http.createServer((req,res)=>{let f=path.join('.',decodeURIComponent(req.url.split('?')[0]));if(f==='.')f='./index.html';if(fs.existsSync(f)&&fs.statSync(f).isDirectory())f=path.join(f,'index.html');fs.readFile(f,(err,d)=>{if(err){res.writeHead(404);res.end('Not found');}else{res.writeHead(200,{'Content-Type':mime[path.extname(f)]||'text/plain'});res.end(d);}});}).listen(8000,()=>console.log('Server running at http://localhost:8000/index.html'));"
    goto :eof
)

:: Fallback directly opening file
echo Starting directly in default browser...
start "" "index.html"
