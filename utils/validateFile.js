const fs = require('fs')
const {join} = require('node:path')
const Exception = require('../exception/exception')

async function validateFile(filePath) {
    const fullPath = join(__dirname,'..','files',filePath)
    if (fs.existsSync(fullPath)) {
        const stat = fs.statSync(fullPath);
        if(!stat.isFile()){
            throw new Exception(403,'forbidden')
        }
        return stat
    } else {
        throw new Exception(404,"file not found");
    }
}

module.exports = validateFile