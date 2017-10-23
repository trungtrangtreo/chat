var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8000;

server.listen(port,function(){
    console.log('Server listen port '+port)
})


app.get('/app',function*(req,res){
    res.send('Hello World');
})


io.on('connection', function(socket) {
    console.log('a socket connected');
    var addedUser = false;
    // socket nhận tin nhắn từ 1 client
    socket.on('send_message', function(text) {
        console.log(text);
        // gửi tin nhắn tới các client đang kết nối socket
        // ngoại trừ client đang kết nối (gửi tin nhắn)
        io.emit('receive_message', {
            text: text
        });
    });

    socket.on('send_heart', function(text) {
        console.log(text);
        // gửi tin nhắn tới các client đang kết nối socket
        // ngoại trừ client đang kết nối (gửi tin nhắn)
        io.emit('receive_heart', {
            text: text
        });
    });

    socket.on('send_like', function(text) {
        console.log(text);
        // gửi tin nhắn tới các client đang kết nối socket
        // ngoại trừ client đang kết nối (gửi tin nhắn)
        io.emit('receive_like', {
            text: text
        });
    });

});



