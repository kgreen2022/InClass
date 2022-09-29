const http = require('express');
const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Big World');
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});