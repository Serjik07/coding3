

class Snake extends LivingCreature{
    random(a){
        let found = this.chooseCell(a);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
    }
    constructor(x, y) {
        super(x, y);
        this.energy = 8;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],   
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mul() {
        var newCell = this.random(0);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;

            var newSnake = new Snake(newX, newY);
            snakeArr.push(newSnake);
            this.energy = 10
        }
    }
    move() {
        this.energy--
        var newCell = this.random(0);
        if(newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }
    eat() {
        var newCell = this.random(2);
        var newCell1 = this.random(3);
        if(newCell) {
            this.energy += 5
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            
            if(this.energy >= 13) {
                this.mul();
            }
        } else if(newCell1){
            this.energy += 5  
            let newX = newCell1[0];
            let newY = newCell1[1];
            matrix[newY][newX] = matrix[this.y][this.x] //kam 2 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (let i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
        } else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (let i in snakeArr) {
            if (this.x == snakeArr[i].x && this.y == snakeArr[i].y) {
                snakeArr.splice(i, 1);
                break;
            }
        }
    }
}