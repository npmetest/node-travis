var http = require('http');
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n'); // missing semi-colon will fail the build
  res.end("Helloo Mr. Programmer Glad to see you here");
  res.end("This is for testing and missed the semiconoal")
}).listen(1337, '127.0.0.1');
 
console.log('Server running at http://127.0.0.1:1337/');
