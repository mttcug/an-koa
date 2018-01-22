var koa = require('Koa');
var router = require('koa-router')();
const  serve = require("koa-static");
var bodyParser = require('koa-bodyparser');
var fs = require('fs');


var app = new koa();
app.use(bodyParser());
app.use(router.routes());


router.get('/', async (ctx, next) => {
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
});
/*const LOAD_HTML = function() {
  return new Promise(function (resolve, reject) {
    fs.readFile('./dist/index.html', {'encoding': 'utf8'}, function (err, data) {
      if(err) return reject(err);
      resolve(data);
    });
  });
};

router.get('/', function *(next) {
  if (this.request.url.startsWith("/api")) {
    yield next;
  } else {
    this.body = yield LOAD_HTML();
  }
});

app.use(router.routes());*/

/*app.use(async ctx => {
  ctx.body='mtt start666';
});*/

//app.use(indexRouter.routes(),indexRouter.allowedMethods());

app.listen(3002,function(){
  console.log('the server is listening on port 3000');
});


