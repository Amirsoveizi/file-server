async function errorHandler(error,response) {
    console.log(error.stack)
    response.writeHead(error.statusCode || 500, {'Content-Type': 'application/json'});
    response.write(JSON.stringify({
        error: error.message || 'internal server error'
    }))

    response.end()
}

module.exports = errorHandler;