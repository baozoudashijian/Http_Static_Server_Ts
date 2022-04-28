import * as fs from 'fs';
import * as http from 'http';
import * as url from 'url'
import * as path from 'path'

const server = http.createServer()

server.on('request', (req: http.IncomingMessage, res: http.ServerResponse) => {

    const p = url.parse(req.url).path
    const publicDir = path.join(__dirname, '/public')

    switch (p) {
        case '/index.html':
            fs.readFile(path.join(publicDir, '/index.html'), (err, data) => {
                if (err) {
                    console.log(err)
                    return false
                }
                res.end(data.toString())
            })
            break;
        case '/index.css':
            fs.readFile(path.join(publicDir, '/index.css'), (err, data) => {
                if (err) {
                    console.log(err)
                    return false
                }
                res.end(data.toString())
            })
            break;
        case '/index.js':
            fs.readFile(path.join(publicDir, '/index.js'), (err, data) => {
                if (err) {
                    console.log(err)
                    return false
                }
                res.end(data.toString())
            })
            break;
    }

    let body = ""
    req.on('data', (chunk) => {
        // 会将buffer对象 隐式的转换成string
        body += chunk
    })

    req.on('end', () => {

    })
})


server.listen(8000)
