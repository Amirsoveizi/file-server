const validateFile = require('../utils/validateFile')
const sendFile = require('./sendFile')

async function createFile(request,response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("this is create");
}

async function getFile(request,response) {
  const fileInfo = await validateFile(request.url)
  await sendFile(fileInfo,response)
  // response.writeHead(200, {"Content-Type": "text/plain"});
  // response.end("this is get")
}

async function updateFile(request,response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("this is update")
}

async function deleteFile(request,response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("this is delete")
}

module.exports.createFile = createFile
module.exports.getFile = getFile
module.exports.updateFile = updateFile
module.exports.deleteFile = deleteFile
