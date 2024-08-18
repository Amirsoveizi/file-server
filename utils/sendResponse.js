async function sendResponse(statusCode,response,message) {
    response.writeHead(statusCode, {
        'Content-Type': 'application/json'
    })
    response.end(JSON.stringify({
        message: message
    }))
}

module.exports = sendResponse;