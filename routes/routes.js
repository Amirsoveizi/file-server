const Exception = require("../exception/exception");
const {createFile,getFile,updateFile,deleteFile} = require('../handlers/routesHandler')

const routes = () => ({
    'POST\\::\\upload': createFile,
    'GET': getFile,
    'PUT': updateFile,
    'DELETE': deleteFile,
    default: async (request,response) => {
        throw new Exception(405, "method not allowed");
    },
})

module.exports = routes;