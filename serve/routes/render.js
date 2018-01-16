var router = require('koa-router')();

router.get('/', function *(next) {
    console.log("render.js");
    yield this.render('index', {
        title: 'Hello World Koa!'
    });
});

router.get('/foo', function *(next) {
    yield this.render('index', {
        title: 'Hello World foo!'
    });
});

module.exports = router;