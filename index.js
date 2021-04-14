const http = require('http');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const fs = require('fs');
const path = require('path');
const cities = require('./cities.json');
const citizens = require('./citizens.json');



const app = new Koa();

app.use(cors());
app.use(koaBody({json: true}));


const router = new Router();

router.get('/cities', async (ctx, next) => {
    ctx.response.body = cities;
});

router.get('/citizens', async (ctx, next) => {
    ctx.response.body = citizens;
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 7777;
const server = http.createServer(app.callback());
server.listen(port, () => console.log(`server started at ${port}`));