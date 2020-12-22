const http = require('http');
const fs = require('fs').promises;

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  
  fs.readFile(__dirname+"/index.html")
  .then(contents =>{
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(contents);
  })
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});