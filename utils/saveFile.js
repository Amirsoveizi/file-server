const random = require('../utils/random')
const sendResponse = require("../utils/sendResponse");
const busboy = require('busboy');
const {join} = require('node:path')
const fs = require('fs')

async function saveFile(request,response,filename) {
  
  const bb = busboy({ headers: request.headers })
  let pathToFile = null

  bb.on('file', (name, file, info) => {
    pathToFile = filename || random() + info.filename
    const saveTo = join(__dirname,'..','files',pathToFile);
    file.pipe(fs.createWriteStream(saveTo));
  });

  bb.on('close', () => {
    sendResponse(201,response,{
      "path" : pathToFile.slice(1)
    })
});

  request.pipe(bb);
}

module.exports = saveFile