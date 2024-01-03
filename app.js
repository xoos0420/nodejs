// core module
const http = require('http');

// 사용자 지정 파일
const routes = require('./routes')

console.log(routes.someText);


// 서버 생성
const server = http.createServer(routes.handler);

server.listen(3000);