var koa = require("koa");
var app = koa();
var router = require("koa-router")();
var serve = require('koa-static');

app.use(serve(__dirname + '/public'));

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(process.env.PORT || 3000);
console.log('listening http://localhost:', 3000)
module.exports = app;