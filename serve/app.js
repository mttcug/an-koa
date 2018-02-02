/**
 * Created by dongfangyiheng on 2018/1/25.
 */
var koa = require('Koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var views=require('koa-views');
var nunjucks = require('nunjucks');
var static = require('koa-static');
var open = require('open');
nunjucks.configure('views', { autoescape: true });


var app = new koa();
var router = new Router();


//webapck热加载
/*const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const devMiddleware = require('koa-webpack-dev-middleware')(compiler);
const hotMiddleware = require('koa-webpack-hot-middleware')(compiler);
app.use(devMiddleware);
app.use(hotMiddleware);*/



app
  .use(bodyParser())
  .use(static('dist'))
  .use(views('dist', {map: {html: 'nunjucks'}}))
  .use(router.allowedMethods())
  .use(router.routes());


//渲染index页面
router.get('**', async function (ctx, next) {
  await ctx.render('index.html',{
    data:1232344356
  });
});

router.get('./quote', async function (ctx, next) {
  ctx.response.body='lalal';
});


//服务器
app.listen(3002,function(){
  console.log('the server is listening on port 3000');
  open('http://localhost:3002');
});



