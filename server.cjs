const http = require('http')
const fs = require('fs')
const path = require('path')

const port = Number(process.env.PORT || 5173)
const root = __dirname
const mimeTypes = { '.css': 'text/css', '.html': 'text/html', '.js': 'text/javascript', '.svg': 'image/svg+xml' }

http.createServer((request, response) => {
  const requestedPath = request.url === '/' ? '/index.html' : request.url.split('?')[0]
  const filePath = path.join(root, path.normalize(requestedPath))
  if (!filePath.startsWith(root)) { response.writeHead(403); response.end('Forbidden'); return }
  fs.readFile(filePath, (error, data) => {
    if (error) { response.writeHead(404); response.end('Not found'); return }
    response.writeHead(200, { 'Content-Type': mimeTypes[path.extname(filePath)] || 'text/plain' })
    response.end(data)
  })
}).listen(port, () => console.log(`Portfolio running at http://localhost:${port}`))