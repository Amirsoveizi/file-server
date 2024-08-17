const {join} = require("node:path");
const Exception = require("../exception/exception");

const routes = () => ({



    default: async (req,res) => {
        throw new Exception(404, "method not found");
    }
})

module.exports = routes;