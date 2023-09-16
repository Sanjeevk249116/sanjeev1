const http=require("http")

const data={age:21}

const server =http.createServer((req,res)=>{
    res.writeHead(200,{ 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data))
  console.log("server Start");
})


server.listen(2000);


// const http = require('node:http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000);