const path = require("node:path")

function fileExists(pathname) {
    console.log('************************')
    console.log(path.join(__dirname,'..','..','files'))
}

fileExists('')