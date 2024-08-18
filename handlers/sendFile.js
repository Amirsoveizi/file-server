const {parse,join} = require('node:path')
const fs = require('fs')
const mimeType = require('../utils/mimeType')
const path = require("node:path");

async function sendFile(fileInfo,response){

  response.writeHead(200, {
      'Content-Type': mimeType[fileInfo.ext],
      'Content-Length': fileInfo.stat.size
  })

  const readStream = fs.createReadStream(fileInfo.fullPath);
  readStream.pipe(response)
}

module.exports = sendFile