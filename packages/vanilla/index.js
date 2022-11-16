const http = require('http')
const fs = require('fs')
const path = require('path');

const rootPath = 'src/';
const port = 4444;

const server = http.createServer((req, res) => {
  let filePath;
  let cancel = false;

  if (req.url.includes('..') || req.url.includes('~')) {
    console.error('URL invalid: ' + req.url);
    res.writeHead(500);
    res.write('500');
    cancel = true;
  } else if (req.url.endsWith("favicon.ico")) {
    console.log('ignoring favicon');
    cancel = true;
  } else if (req.url === '/') {
    filePath = 'index.html';
  } else if (req.url === '/mp-sdk.js') { // special case for lib
    filePath = path.join("../../../node_modules/@matterport/sdk/dist", req.url);
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
  } else {
    filePath = path.join('.', req.url);
  }
  
  if ( !cancel ) {
    try {
      file = fs.readFileSync(rootPath + filePath,'utf-8')
      res.write(file)
    } catch (e) {
      console.log(e.message);
      res.writeHead(404);
      res.write('404');
    }
  }
  res.end();
});

server.listen(port);
console.log("Listening on: http://localhost:" + port);
