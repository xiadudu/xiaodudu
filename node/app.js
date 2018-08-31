let app  = require("express")();
var nodeExcel = require('excel-export');
var xlsx = require('node-xlsx');
var xlsxObj = xlsx.parse('./计算表.xlsx');
let classRouter = require('./router/class.router.js');
let applyExcel = require("./excel.config.js");
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use('/class', classRouter);
let xiaohuiObj = xlsxObj[0].data;
console.log(xiaohuiObj);
var allArray = [];
function calc(time, years){
  let final = "";
  let subyear;
  let subMonth;
  if(!years){
    final = "";
  } else {
    let allyear;
    let ALLmonth
    if(years.indexOf("年") == -1){
      ALLyear = 0;
      ALLmonth = parseInt(years);
    } else {
      let allyear = years.split("年");
      ALLyear = parseInt(allyear[0]);
      ALLmonth = parseInt(allyear[1]||0);
    }
    let nowyear = time.split("年");
    let NOWyear = parseInt(nowyear[0]);
    let NOWmonth = parseInt(nowyear[1]||0);
    if(NOWmonth>ALLmonth){
      subyear = NOWyear - ALLyear;
      subMonth = NOWmonth - ALLmonth;
    } else if (NOWyear === ALLyear) {
      subyear = NOWyear - ALLyear-1;
      subMonth = 12;
    } else {
      subyear = NOWyear - ALLyear-1;
      subMonth = NOWmonth + 12 - ALLmonth;
    }
    final = subyear + "年" + subMonth+"月";
  }
  allArray.push({"year": years,"join": final});
}
// var array = ["19年8个月","19年7个月","19年6个月","7年8个月","19年11个月"];
for (var i = 0; i < xiaohuiObj.length; i++) {
  calc("2018年8月", xiaohuiObj[i][0]);
}
app.get('/applyExcel', function(req, res){
  var conf ={};
  conf.stylesXmlFile = "styles.xml";
  conf.name = "mysheet";
  conf.cols = applyExcel.config;
  conf.rows = applyExcel.rowFun(allArray);
  var result = nodeExcel.execute(conf);
  res.setHeader('Content-Type', 'application/vnd.openxmlformats');
  res.setHeader("Content-Disposition", "attachment; filename=" + "applyReport.xlsx");
  res.end(result, 'binary');
})

app.listen(3002, function(){
  console.log("3002")
})