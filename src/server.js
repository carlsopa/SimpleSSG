const http = require('http');
const fs = require('fs').promises;
const open = require('open')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url)
  
  fs.readFile(`./public/${req.url}`)
  .then(contents =>{
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(contents);
  })
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});