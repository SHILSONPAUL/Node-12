// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);
// const fs = require('fs');
// const files = fs.readdir('./',(err,files)=>{
//     if(err)console.log('error',err);
//     else console.log('result',files);
// });

// var fs = require('fs');
// var data = fs.readFileSync('text.txt','utf8');
// console.log(data);
//read data from file synchronously
// var fs = require('fs');
// fs.readFile('text.txt','utf8',function(err,data){
//     if(err)throw err;
//     console.log(data);
// });
// //read data from file text.txt- async
// write data to file
var fs = require('fs');
fs.writeFile('new.txt','Hello node js. Welcome to new file',(err)=>{
    if (err) throw err;
    console.log('The file is saved');
})
fs.readFile('new.txt','utf8',function(err,data){
        if(err)throw err;
        console.log(data);
    });

