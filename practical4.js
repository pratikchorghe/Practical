//4. Create a Node.js file that will convert the output "Hello World!" into upper-case letters

var http = require('http');  // includes the http module
var uc = require('upper-case'); // include the upper-case module
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase("hello world!")); // assign the upper-case module
    res.end();
}).listen(8080);