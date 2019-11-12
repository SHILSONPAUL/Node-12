var ht = require('http');
// ht.createServer((req, res)=>{
// res.write('<h1>Hello World</h><br>');
// res.end('The end');
// })
var server = ht.createServer((req,res)=>{
    res.write('<h1>Hello World</h><br>');
    res.end('The end'); 

})
console.log(server);