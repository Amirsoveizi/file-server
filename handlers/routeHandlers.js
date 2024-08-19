const fs = require("fs");
const validateFile = require('../utils/validateFile')
const mimeType = require("../utils/mimeType");
const saveFile = require('../utils/saveFile')

module.exports.createFile = async function createFile(request,response) {
  saveFile(request,response)
}

module.exports.getFile = async function getFile(request,response) {
  const fileInfo = await validateFile(request.url)
  response.writeHead(200, {
    'Content-Type': mimeType[fileInfo.ext],
    'Content-Length': fileInfo.size
  })
  const readStream = fs.createReadStream(fileInfo.fullPath);
  readStream.pipe(response)
}

module.exports.updateFile = async function updateFile(request,response) {
  const fileInfo = await validateFile(request.url)
  saveFile(request,response,fileInfo.name)
}

module.exports.deleteFile = async function deleteFile(request,response) {
  const fileInfo = await validateFile(request.url)
  fs.unlinkSync(fileInfo.fullPath);
  await sendResponse(200,response,`Successfully deleted :${fileInfo.name}`);
}
