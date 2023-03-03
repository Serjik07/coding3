

var side = 30;

var socket = io();
// body.style.bacgraundColor = green ? body.style.bacgraundColor = ornage ? body.style.bacgraundColor = blue : body.style.bacgraundColor = green
const title = document.querySelector(".title");
const divs = document.querySelectorAll(".divs");
const canvas = document.querySelector("#defaultCanvas0")
console.log();

// canvas.addEventListener("click", (evt) => {
//     console.log("aa");
// })


let matrix = [];
function generate(matLen,gr,grEat,pr,th,sn) {

    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random()*matLen);
        let y = Math.floor(Math.random()*matLen);
        if(matrix[y][x] == 0) {
            matrix[y][x] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random()*matLen);
        let y = Math.floor(Math.random()*matLen);
       // console.log(x,y);
        if(matrix[y][x] == 0) {
            matrix[y][x] = 2;
        } 
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random()*matLen);
        let y = Math.floor(Math.random()*matLen);
        //console.log(x,y);
        if(matrix[y][x] == 0) {
            matrix[y][x] = 3;
        }
    }
    for (let i = 0; i < th; i++) {
        let x = Math.floor(Math.random()*matLen);
        let y = Math.floor(Math.random()*matLen);
        //console.log(x,y);
        if(matrix[y][x] == 0) {
            matrix[y][x] = 4;
        }
    }
    for (let i = 0; i < sn; i++) {
        let x = Math.floor(Math.random()*matLen);
        let y = Math.floor(Math.random()*matLen);
        //console.log(x,y);
        if(matrix[y][x] == 0) {
            matrix[y][x] = 5;
        }
    }
    return matrix;
}


matrix = generate(15,70,20,6,9,3)

function changeWeather() {
    if(document.body.style.backgroundColor === "yellow") {
        title.innerText = "Autom";
        document.body.style.backgroundColor = "orange" ;
    } else if(document.body.style.backgroundColor === "orange") {
        title.innerText = "Winter";
        document.body.style.backgroundColor = "white" ;
    } else if(document.body.style.backgroundColor === "white") {
        title.innerText = "Spring";
        document.body.style.backgroundColor = "green";
    } else{
        title.innerText = 'Summer';
        document.body.style.backgroundColor = "yellow";
    }
    changeInfo();
}
function changeInfo() {
    if(title.innerText === "Winter") {
        divs[0].style.backgroundColor = "#acc1e3";
        divs[1].style.backgroundColor = "brown";
        divs[2].style.backgroundColor = "black";
        divs[2].style.color = "white";
    } else {
        divs[0].style.backgroundColor = "green"; 
        divs[1].style.backgroundColor = "yellow";
        divs[2].style.backgroundColor = "red";
        divs[2].style.color = "black";

    }
}



function createObject(matrix) {
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


side = 30;
grassArr = [];
grassEaterArr = [];
predatorArr = [];
thornArr = [];
snakeArr = [];


function game(){
    for(let i in grassArr){
        grassArr[i].mul();
     }
     for(let i in grassEaterArr) {
         grassEaterArr[i].eat();
     }
     for(let i in predatorArr) {
        predatorArr[i].eat();
    }
    for(let i in thornArr) {
        thornArr[i].mul();
    }
    for(let i in snakeArr) {
        snakeArr[i].eat();
    }
}
function setup(staticObj) {
    frameRate(5);
    var myCanvas = createCanvas(450, 450);
    myCanvas.parent("#canvas");
}
function mouseClicked() {
    if(mouseX > 0 && mouseX <= 450 && mouseY > 0 && mouseY <= 450) {
        let addX = Math.floor(mouseX / 30);
        let addY = Math.floor(mouseY / 30);
        // console.log(addX);
        // console.log(addY);
        matrix[addX][addY] = 2;
        console.log(matrix[addX][addY])
        // grassEaterArr.push(new GrassEater(addX,addY))
        createObject(matrix);
    }
}
function draw() {
    if(frameCount % 7 === 0) {
        changeWeather()
    }
    if(!snakeArr.length && !grassEaterArr.length && !predatorArr.length && frameCount >1) {
        clear();
        background(128);
        fill("black")
        textSize(50)
        text("Finish",165,225)
        describe();
        noLoop();
    }
    if(frameCount % 7 == 0){
        let stat = {
            'grass':grassArr,
            "grassEater":grassEaterArr,
            "predator":predatorArr,
            "thorn":thornArr,
            "snake":snakeArr
        }
        socket.emit('send data', stat)
    }
    createObject(matrix);
    game();
    if(document.body.style.backgroundColor === "yellow" || document.body.style.backgroundColor === "orange" || document.body.style.backgroundColor === "green") {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if (matrix[y][x] == 1) {
                    fill("green");
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 2) {
                    fill("yellow");
                }
                else if (matrix[y][x] == 3) {
                    fill("red");
                }
                else if (matrix[y][x] == 4) {
                    fill("orange");
                }
                else if (matrix[y][x] == 5) {
                    fill("magenta");
                }
                
                rect(x * side, y * side, side, side);

            }
        }   
    } else if(document.body.style.backgroundColor === "white") {
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {

                if (matrix[y][x] == 1) {
                    fill("#acc1e3");
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                }
                else if (matrix[y][x] == 2) {
                    fill("brown");
                }
                else if (matrix[y][x] == 3) {
                    fill("black");
                }
                else if (matrix[y][x] == 4) {
                    fill("orange");
                }
                else if (matrix[y][x] == 5) {
                    fill("magenta");
                }
                
                rect(x * side, y * side, side, side);

            }
        }   
    }

}


// socket.on("send static", setup);

