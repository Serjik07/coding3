var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

app.use(express.static("./modules"));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);


function generate(matLen, gr, grEat, pr, th, sn) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        // console.log(x,y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        //console.log(x,y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3;
        }
    }
    for (let i = 0; i < th; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        //console.log(x,y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4;
        }
    }
    for (let i = 0; i < sn; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        //console.log(x,y);
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
        }
    }
    return matrix;
}


matrix = generate(15, 70, 20, 6, 9, 3)


side = 30;
grassArr = [];
grassEaterArr = [];
predatorArr = [];
thornArr = [];
snakeArr = [];

LivingCreature = require('./modules/livingCreture');
Grass = require('./modules/gras');
Thorn = require('./modules/thorn');
GrassEater = require('./modules/greater');
Predator = require('./modules/predator');
Snake = require('./modules/snake');



function createObject(matrix) {
    console.log("asd")
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y);
                grassEaterArr.push(gr);
            } else if (matrix[y][x] == 3) {
                let gr = new Predator(x, y);
                predatorArr.push(gr);
            } else if (matrix[y][x] == 4) {
                let gr = new Thorn(x, y);
                thornArr.push(gr);
            } else if (matrix[y][x] == 5) {
                let gr = new Snake(x, y);
                snakeArr.push(gr);
            }
        }
    }
}
function game() {
    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (let i in predatorArr) {
        predatorArr[i].eat();
    }
    for (let i in thornArr) {
        thornArr[i].mul();
    }
    for (let i in snakeArr) {
        snakeArr[i].eat();
    }
    io.sockets.emit('send matrix', matrix);
}






setInterval(game, 1000)
io.on('connection', function (socket) {

    createObject(matrix)
});