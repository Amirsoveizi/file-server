const fs = require('fs')
const {join,parse} = require('node:path')
const Exception = require('../exception/exception')
const path = require("node:path");

async function validateFile(pathName) {

    const fullPath = join(__dirname,'..','files',pathName)

    if (fs.existsSync(fullPath)) {
        const stat = fs.statSync(fullPath);
        if(!stat.isFile()){
            throw new Exception(403,'forbidden')
        }
        return {
            fullPath: fullPath,
            stat: stat,
            ext: path.extname(fullPath),
        }
    } else {
        throw new Exception(404,"file not found");
    }
}

module.exports = validateFile