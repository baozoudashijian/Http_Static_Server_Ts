import * as fs from 'fs';
import * as http from 'http';
import * as url from 'url'
import * as path from 'path'

const server = http.createServer()

server.on('request', (req: http.IncomingMessage, res: http.ServerResponse) => {

    const p = url.parse(req.url).pathname
    const publicDir = path.join(__dirname, '/public')
    console.log(p)

    fs.readFile(path.join(publicDir, p), (err, data) => {
        if(err) {
            console.log(err)
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
