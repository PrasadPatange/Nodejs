const http = require('http');
const data = require('./data');
const PORT = 4500;

http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data))
    res.end();
}).listen(PORT,()=>{
    console.log(`Server Running at http://localhost:${PORT}/`);
});