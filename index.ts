import * as http from 'http';

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(req.constructor)
    console.log(res.constructor)
    res.end('hello world 123')
})

server.listen(8000)
