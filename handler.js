const {parse} = require('node:url')
const routes = require('./routes/routes')
const errorHandler = require('./exception/handler');
const {join} = require('node:path')

const allRoutes = routes()


async function handler(request, response) {

    const {
        url,
        method
    } = request

    const {
        pathname
    } = parse(url, true)

    const key = method === 'POST' ? join(method,'::',pathname) : method
    const route = allRoutes[key] || allRoutes.default

    try {
        await route(request, response);
    } catch (error) {
        await errorHandler(error,response);
    }
}

module.exports = handler;
