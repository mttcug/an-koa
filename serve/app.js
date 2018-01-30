/**
 * Created by dongfangyiheng on 2018/1/25.
 */
var koa = require('Koa');
var Router = require('koa-router');
var bodyParser = require('koa-bodyparser');
var views=require('koa-views');
var render=require('koa-render');
var nunjucks = require('nunjucks');
var static = require('koa-static');
var open = require('open');
nunjucks.configure('views', { autoescape: true });


var app = new koa();
var router = new Router();


//webpack热加载
var webpack = require('webpack');
var webpackDevMiddleware = require('koa-webpack-dev-middleware');
var webpackHotMiddleware = require('koa-webpack-hot-middleware');
var config = require('../webpack.config');
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));





app
  .use(bodyParser())
  .use(static('dist'))
  .use(views('dist', {map: {html: 'nunjucks'}}))
  .use(router.allowedMethods())
  .use(router.routes());


router.get('**', async function (ctx, next) {
  await ctx.render('index.html',{
    data:123
  });
});

/*router.get('/', async (ctx, next) => {
 ctx.response.body =
 '<h1>Index</h1> <form action="/login" method="post"> '
 +
 '<p>Name: <input name="name"></p>'
 +
 ' <p>Password: <input name="password" type="password"></p> '
 +
 '<p><input type="submit" value="Submit"></p>'
 +
 ' </form>';
 });


 router.post('/login', async (ctx, next) => {
 let
 name = ctx.request.body.name || '',
 password = ctx.request.body.password || '';

 console.log(ctx.request);
 if (name === 'koa' && password === '12345') {
 ctx.body = "Success"
 } else {
 ctx.body = "Login error"

 }
 });*/



/*app.use(async ctx => {
 ctx.body='mtt start666';
 });*/

//app.use(indexRouter.routes(),indexRouter.allowedMethods());

app.listen(3002,function(){
  console.log('the server is listening on port 3000');
  open('http://localhost:3002');
});



