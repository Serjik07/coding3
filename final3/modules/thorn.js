
class Thorn extends LivingCreature{
    random(){
        let found = this.chooseCell(0);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
        }
    mul() {
        this.multiply++;
        let newCell = this.random();

        if (newCell && this.multiply >= 30) {
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 4;

            let newThorn = new Thorn(newX, newY);
            thornArr.push(newThorn);
            this.multiply = 0;
        }
    }

}