var express = require('express');
var fs = require('fs');
var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

app.use(express.static("./modules"));

app.get('/', function (req, res) {

res.redirect('index.html');

});

server.listen(3000);


let grassNum = 0;
let grassEaterNum = 0;
let predatorNum = 0;
let snakeNum = 0;
let thornNum = 0;
let file = "static.json";
function static(mat) {
    for (let y = 0; y < mat.length; y++) {
        for (let x = 0; x < mat[y].length; x++) {
            if (mat[y][x] == 1) {
                grassNum++;
            } else if (mat[y][x] == 2) {
                grassEaterNum++;
            } else if (mat[y][x] == 3) {
                predatorNum++;
            }  else if (mat[y][x] == 4) {
                thornNum++;
            }  else if (mat[y][x] == 3) {
                snakeNum++;
            }
        }
    }
    staticObj = {
        grass: grassNum,
        grassEater : grassEaterNum,
        predator : predatorNum,
        snake : snakeNum,
        thorn : thornNum,
    }
    
    

    //  fs.appendFileSync(file,"[" +  JSON.stringify(staticObj) + "]" + "\n");
     fs.writeFileSync(file, "[" +  JSON.stringify(staticObj) + "]" + "\n", {
        encoding: 'utf8',
        flag: 'w'
      })
    
    // let arr = [JSON.stringify(staticObj)];
    // fs.appendFileSync(file, arr.toString());

    grassNum = 0;
    grassEaterNum = 0;
    predatorNum = 0;
    snakeNum = 0;
    thornNum = 0;

        return staticObj;
    // static(mat)
}

// io.sockets.emit('send static', staticObj)












 io.on('connection', function (socket) {
    socket.on("send matrix", static);
    socket.on("send matrix", createObject);
    });