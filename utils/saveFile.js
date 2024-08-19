const random = require('../utils/random')
const sendResponse = require("../utils/sendResponse");
const busboy = require('busboy');
const {join} = require('node:path')
const fs = require('fs')

async function saveFile(request,response,filename) {
  
  const bb = busboy({ headers: request.headers })
  let pathToFile = []

  bb.on('file', (name, file, info) => {
    const _file = filename || random() + info.filename
    pathToFile.push(_file)
    const saveTo = join(__dirname,'..','files',_file);
    file.pipe(fs.createWriteStream(saveTo));
  });

  bb.on('close', () => {
    sendResponse(201,response,{
      "path" : pathToFile
    })
  });

  request.pipe(bb);
}

module.exports = saveFile