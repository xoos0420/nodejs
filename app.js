const http = require('http');
const routes = require('./routes');

console.log(routes.someText);

//create server 1
// function rqListener(req ,res) {

// }

// create server 2
const server = http.createServer(routes.handler);

server.listen(3000);