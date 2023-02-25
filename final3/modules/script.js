

var side = 30;

var socket = io();
// body.style.bacgraundColor = green ? body.style.bacgraundColor = ornage ? body.style.bacgraundColor = blue : body.style.bacgraundColor = green
let title = document.querySelector(".title");
let changeButton = document.querySelector("#change");
const divs = document.querySelectorAll(".divs");
console.log(divs)



changeButton.addEventListener("click", changeWeather)
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
        divs[2].style.backgroundColor = "black";
        divs[2].style.color = "black";

    }
}


function setup(staticObj) {
    frameRate(5);
    createCanvas(200* side, 200 * side);
}

function draww(mat) {
    if(document.body.style.backgroundColor === "yellow" || document.body.style.backgroundColor === "orange" || document.body.style.backgroundColor === "green") {
        for (let y = 0; y < mat.length; y++) {
            for (let x = 0; x < mat[y].length; x++) {

                if (mat[y][x] == 1) {
                    fill("green");
                }
                else if (mat[y][x] == 0) {
                    fill("#acacac");
                }
                else if (mat[y][x] == 2) {
                    fill("yellow");
                }
                else if (mat[y][x] == 3) {
                    fill("red");
                }
                else if (mat[y][x] == 4) {
                    fill("orange");
                }
                else if (mat[y][x] == 5) {
                    fill("magenta");
                }
                
                rect(x * side, y * side, side, side);

            }
        }   
    } else if(document.body.style.backgroundColor === "white") {
        for (let y = 0; y < mat.length; y++) {
            for (let x = 0; x < mat[y].length; x++) {

                if (mat[y][x] == 1) {
                    fill("#acc1e3");
                }
                else if (mat[y][x] == 0) {
                    fill("#acacac");
                }
                else if (mat[y][x] == 2) {
                    fill("brown");
                }
                else if (mat[y][x] == 3) {
                    fill("black");
                }
                else if (mat[y][x] == 4) {
                    fill("orange");
                }
                else if (mat[y][x] == 5) {
                    fill("magenta");
                }
                
                rect(x * side, y * side, side, side);

            }
        }   
    }

}

// socket.on("send static", setup);
socket.on('send matrix', draww);