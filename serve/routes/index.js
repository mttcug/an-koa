
var api = require('./api');
var render = require('./render');

const route = app => {
  console.log("index.js");
  app.use(api.routes());
  app.use(render.routes());
}

module.exports = route;
