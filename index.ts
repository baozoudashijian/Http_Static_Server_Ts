import * as fs from 'fs';
import * as http from 'http';
import * as url from 'url'
import * as path from 'path'

const server = http.createServer()

server.on('request', (req: http.IncomingMessage, res: http.ServerResponse) => {

    let p = url.parse(req.url).pathname
    const publicDir = path.join(__dirname, '/public')
    p = p === '/' ? '/index.html' : p

    fs.readFile(path.join(publicDir, p), (err, data) => {
        if (err) {
            if (err.errno == -2) {
                let png404 = path.join(publicDir, 'img/404.jpeg')
                fs.readFile(png404, (err, data) => {
                    if (err) {
                        return false
                    }
                    res.end(data)
                })
            }
            return false
        }
        res.end(data)
    })

    let body = ""
    req.on('data', (chunk) => {
        // 会将buffer对象 隐式的转换成string
        body += chunk
    })

    req.on('end', () => {

    })
})


server.listen(8000)
