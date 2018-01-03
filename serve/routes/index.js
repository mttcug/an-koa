
var api = require('./api');
var render = require('./render');

const route = app => {
  app.use(api.routes());
  app.use(render.routes());
}

module.exports = router;
