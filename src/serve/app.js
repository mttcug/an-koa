var koa = require('koa')
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror');

var router = require('./routes/index');
var nunjucks = require('nunjucks');

var app = new koa();
// error handler
onerror(app);

nunjucks.configure( 'views', { // 设置模板文件的目录，为views
    autoescape: true,
    express: app,
    watch: true,
    noCache: true
});
// global middlewares
app.use(views('views', {
  root: __dirname + '/views',
    map: { html: 'nunjucks' }
}));


app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
router(app);

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(3000 ,'172.18.11.10', ()=>{
    console.log(`server start listening...`);
});

module.exports = app;
