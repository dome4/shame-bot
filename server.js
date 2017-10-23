var token = process.env.SLACK_API_TOKEN || '';
var port = process.env.PORT || '3000';

var http = require("http");
var server = http.createServer(onRequest);
server.listen(port);

function onRequest(request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World\n');
    response.end();

}

// Console will print the message
console.log('Server running at http://127.0.0.1:' + port);