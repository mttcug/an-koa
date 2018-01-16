var Koa = require('koa')
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror')
  , bodyParser = require('koa-bodyparser');

const nunjucks = require('nunjucks');
const webpack = require('webpack');
const convert = require('koa-convert');
const koaWebpackMiddleware = require('koa-webpack-middleware');
const webpackDevMiddleware = koaWebpackMiddleware.devMiddleware;
const webpackHotMiddleware = koaWebpackMiddleware.hotMiddleware;
const config = require('../../webpack.config');

var router=require('./routes/index');



const app = new Koa();
const compiler = webpack(config);
const PORT = process.env.PORT || 3000;
const wdm = webpackDevMiddleware(compiler, {
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },
    reload: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
})
app.use(convert(wdm));
app.use(convert(webpackHotMiddleware(compiler)));


// view engine setup
nunjucks.configure('views', { autoescape: true });
//views with nunjucks
app.use(views(__dirname + '/views', {
    map: { html: 'nunjucks' }
}));

// middle wares
app.use(bodyParser);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

// logger

app.use(async function (ctx, next) {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});


// routes

//app.use(index.routes(), index.allowedMethods());
router(app);

// error handler

onerror(app);


const port = 3000;
app.listen(port);
console.info('启动服务器在 http://localhost:' + port);

/*const server = app.listen(PORT, 'localhost', (err) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(`HMR Listening at http://localhost:${PORT}`)
})
process.on('SIGTERM', () => {
    console.log('Stopping dev server')
    wdm.close()
    server.close(() => {
        process.exit(0)
    })
})*/


