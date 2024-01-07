// core module
const http = require('http');
const express = require('express');
const app = express();

// 서버 생성
app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allow the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log('Another middleware!')
    res.send('<h1>Hello from Express</h1>')
})

const server = http.createServer(app);

server.listen(3000);