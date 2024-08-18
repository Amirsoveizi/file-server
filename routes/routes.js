const {join} = require("node:path");
const Exception = require("../exception/exception");

const routes = () => ({

    'POST\\::\\upload': async  (request, response) =>{
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("this is post");
    },

    'GET': async  (request, response) =>{
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.end("this is get");
    },

    'PUT': async  (request, response) =>{},

    'DELETE': async (request, response) =>{},

    default: async (request,response) => {
        throw new Exception(404, "method not found");
    },
})

module.exports = routes;