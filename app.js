const http = require('http');
 
const PORT = 3000;
 
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello I am Avanish from SRM and trying to complete my assignment on Docker');
});
 
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
 
 