import * as http from 'http';

const server = http.createServer()

server.on('request', (req: http.IncomingMessage, res: http.ServerResponse) => {
    
    res.end('hello world 123')

    let body = ""
    req.on('data', (chunk) => {
        // 会将buffer对象 隐式的转换成string
        body += chunk
        console.log(chunk, 'chunk')
        console.log(typeof body, 'body')
    })

    req.on('end', () => {
        console.log(body)
        console.log(typeof body)
    })
})


server.listen(8000)
