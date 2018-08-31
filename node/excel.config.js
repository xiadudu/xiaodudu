var fs = require('fs');
var config = [{
  caption:'时间',
  type:'string',
  },{
  caption:'入职时间',
  type:'string',
  }];
var rowFun  = function (objArray) {
  var files = objArray;
  var fileDataAll = [];
  for(var i=0; i < files.length; i++) {
    var arr = [];
    arr[0] = files[i].year;
    arr[1] = files[i].join;
    fileDataAll.push(arr);
  }
  return fileDataAll;
}
module.exports = {config,rowFun};