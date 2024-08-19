const fs = require("fs");
const { randomFillSync } = require('crypto');
const busboy = require('busboy');
const validateFile = require('../utils/validateFile')
const sendResponse = require("../utils/sendResponse");
const mimeType = require("../utils/mimeType");

module.exports.createFile = async function createFile(request,response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("this is create");
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

}

module.exports.deleteFile = async function deleteFile(request,response) {
  const fileInfo = await validateFile(request.url)
  fs.unlinkSync(fileInfo.fullPath);
  await sendResponse(200,response,`Successfully deleted :${fileInfo.name}`);
}
