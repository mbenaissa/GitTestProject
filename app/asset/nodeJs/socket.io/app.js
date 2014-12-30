var express = require('express');
var app = express();
var server=require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(client) {
   console.log("Client connected...");

   redisClient.lrange('questions', 0, -1, function(err, questions){
    questions.forEach(function(question){
    client.emit('question', question);
    });
   });

   client.on('question', function(question) {
      client.on('question', function(question) {
      if(!client.question_asked) {
        client.broadcast.emit('question', question);
        client.question_asked=true;
         redisClient.lpush("questions", question, function(){
         redisClient.ltrim("questions", 0, 19);
         });
      }
    });

    client.on('answer', function(question, answer){
        client.broadcast.emit('answer', question, answer);
    });
});
app.get('/', function (req, res) {
 res.sendFile(__dirname + '/index.html');
});


var redis = require("redis");
var client = redis.createClient();
client.set('name', 'moez');

client.get('question', function(error, data) {
console.log(data);
});

client.lpush("questions", question1, function(err, reply){
    console.log(reply);
  });

  client.lpush("questions", question2, function(err, reply){
    console.log(reply);
  });

client.lrange('questions', 0, -1, function(err, questions){
console.log(questions);
  });

server.listen(8080);
