let app  = require("express")();
let classRouter = require('./router/class.router.js');
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use('/class', classRouter);

app.listen(3001, function(){
  console.log("3001")
})