// console.log(__filename);
// console.log(__dirname);
const path = require("path");
var PathObj = path.parse(__filename);
console.log(PathObj);
console.log(PathObj.name);
// var p1 = "/home/myfolder"
// var p1 = "/folder/myfolder"
// var fullpath = path.join(p1,p2);
console.log(path.parse(path));

