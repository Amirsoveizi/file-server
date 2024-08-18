const Exception = require("../exception/exception");
const {createFile,getFile,updateFile,deleteFile} = require('../handlers/routeHandlers')

const routes = () => ({
    'POST\\::\\upload': createFile,
    'GET': getFile,
    'PUT': updateFile,
    'DELETE': deleteFile,
    default: async () => {
        throw new Exception(404, "route not found");
    },
})

module.exports = routes;