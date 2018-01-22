const router = require('koa-router')();
router.get('/',function*(){
  console.log("the request path is '/' ");
  //do something else!
});
router.get('/ha',function*(){
  console.log('path is /ha');
});
module.exports = router;
