var http = require('http');

var handleRequests = function(req, res){
    // console.log("url is" + req.url);
    // res.write("hello");
    // res.end();

    if(req.url === "/"){
        res.write("hello");
    }
    else if(req.url === "/Products"){
        res.write("list of products");
    }
    else if(req.url === "/cart"){
        res.write("list of cart");
    }

    res.end();
};
var server = http.createServer(handleRequests);

server.listen(8080, function(){
    console.log("2222");
});