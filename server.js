const fs = require('fs');
require('http').createServer((req, res) => {
  if (req.url === '/')
    res.end(require('fs').readFileSync('./index.html', 'utf8'));
  if (req.url === '/sample.jpg') {
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    res.end(fs.readFileSync('./sample.jpg'), 'binary');
  }
}).listen(3000, () => console.log('Listening port 3000'));
