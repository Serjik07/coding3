class Grass extends LivingCreature {
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
            matrix[newCell[1]][newCell[0]] = this.index;
            this.multiply = 0;
        }
    }
}
