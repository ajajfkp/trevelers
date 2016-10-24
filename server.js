var express = require('express');
var app = express();
var path = require("path");
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);



app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});
app.set('port', process.env.PORT || 3000);
server.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});

//AIzaSyBm1SL8dgZ6XEKJaDW2W0iWzVuAbo_yjgA 