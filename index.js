const http = require('node:http');
const handler = require('./handler');

const PORT = process.env.PORT || 3000

const server = http.createServer(handler)
    .listen(PORT, () => {
        console.log(`file server is running at  ${PORT}`)
    })