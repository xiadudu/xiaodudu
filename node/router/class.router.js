let express = require('express');
let router = express.Router();
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/allData', function(req, res) {
  res.send({
    status: true,
    data: [{"id": 1, "data": "数据1"}]
  })
})
module.exports = router;