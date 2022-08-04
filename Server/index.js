const http = require('http');
const PORT = 4500;
const server = http.createServer((req,res) => {
    res.write("<h1> Hello Nodejs Let's Started !!!!!! </h1>");
    res.end();
})
server.listen(PORT,() => {
    console.log(`Server running at localhost:${PORT}`);
});

