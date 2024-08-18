const validateFile = require('../utils/validateFile')
const sendFile = require('./sendFile')

module.exports.createFile = async function createFile(request,response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("this is create");
}

module.exports.getFile = async function getFile(request,response) {
  const fileInfo = await validateFile(request.url)
  await sendFile(fileInfo,response)
}

module.exports.updateFile = async function updateFile(request,response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("this is update")
}

module.exports.deleteFile = async function deleteFile(request,response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("this is delete")
}
