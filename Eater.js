
let LivingCreature = require('./LivingCreature')
 function rand(min, max) {
            return Math.random() * (max - min) + min;
        }
module.exports = class Eater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
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

    chooseCell(tiv1) {
        this.getNewCoordinates();
        return super.chooseCell(tiv1);
    }

    move() {
        var emptyCells = super.chooseCell(0,1);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {

            var newX = newCell[0];
            var newY = newCell[1];

            if (matrix[newY][newX] == 0) {
                matrix[this.y][this.x] = 0;
                matrix[newY][newX] = this.index;
                this.energy -= 2;
            }
            else if (matrix[newY][newX] == 1) {
                matrix[this.y][this.x] = 1;
                matrix[newY][newX] = this.index;
                this.energy--;
            }
            this.y = newY;
            this.x = newX;
        }

    }


    eat() {
     
        var grassCells = super.chooseCell(1);
		var eater = grassCells[Math.floor(Math.random() * grassCells.length)];
        if (eater) {

            var newX = eater[0];
            var newY = eater[1];
            matrix[newY][newX] = matrix[this.y][this.x];
            matrix[this.y][this.x] = 0;
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY ) {
                    grassEaterArr.splice(i, 1);
                    // break;
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy += 2;
        }
    }



    mul() {
        var emptyCells = super.chooseCell(0,1);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        if (newCell && this.energy >= 10) {
            var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 3;
			EaterArr.push(new Eater(newX, newY, 3))
            this.energy = 2;

        }
    }
    die() {
        if (this.energy <= -5) {
            matrix[this.y][this.x] = 0;
            for (var i in EaterArr) {
                if (this.x == EaterArr[i].x && this.y == EaterArr[i].y) {
                    EaterArr.splice(i, 1)
                }
            }
        }
    }
}