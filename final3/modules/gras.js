class Grass extends LivingCreature {
    constructor(x,y,index) {
        super(x,y,index)
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
    random(a){
        let found = this.chooseCell(a);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
    }
    mul() {
        this.multiply++;
        var newCell = this.random(0);
        if (this.multiply >= 20 && newCell) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            console.log(this.index)
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
}
