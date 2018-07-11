var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

function handlerequest(request, response){
    response.end("It works. URL:" + request.url);
};

var server = http.createServer(handlerequest);
var server2 = http.createServer(handlerequest);

server.listen(PORT, function(){
    console.log("I am a nerd. http://localhost:" + PORT);
});

server2.listen(PORT2, function(){
    console.log("I pick my nose. http://localhost:" + PORT2);
});

