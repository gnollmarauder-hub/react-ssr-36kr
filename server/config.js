const path = require("path");module.exports = {    development: {        port: 8001,        templatePath: path.join(__dirname, '../template/server.html'),        static() {},    },    production: {        port: 80,        templatePath: path.join(__dirname, '../dist/server.tpl.html'),        static(app) {            app.use(require('koa-static')(path.join(__dirname, '../dist')));        },    },}[process.env.NODE_ENV];