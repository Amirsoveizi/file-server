const {parse} = require('node:url')

const allRoutes = routes()
const errorHandler = require('./exception/handler');
const routes = require('./routes/routes')

async function handler(request, response) {

    const {
        url,
        method
    } = request

    const {
        pathname
    } = parse(url, true)

    const route = allRoutes[request.method] || allRoutes.default

    try {
        await route(request, response);
    } catch (response) {
        errorHandler(response);
    }
}

module.exports = handler;
