const {parse,join} = require('node:path')
const fs = require('fs')
const mimeType = require('../utils/mimeType')

async function sendFile(stat,response){
  
  response.writeHead(200, {
      'Content-Type': mimeType[stat.ext],
      'Content-Length': stat.size
  })

  const readStream = fs.createReadStream(join(stat.dir,stat.base));
  readStream.pipe(res)
}

module.exports = sendFile