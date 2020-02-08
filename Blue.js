
let LivingCreature = require('./LivingCreature')
module.exports = class Blue extends LivingCreature {

    constructor(x, y, index) {
        super(x, y, index);
        this.directions = [];
        this.multiply = 15;
    }

    getNewCoordinates() {
        this.directions = [
            [this.x, this.y],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 1],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 1],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 2],
            [this.x, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 3, this.y - 1],
            [this.x + 3, this.y],
            [this.x + 3, this.y + 1],
            [this.x + 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x - 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 3, this.y - 1] ,
        ];
    }


    chooseCell(tiv1) {
        this.getNewCoordinates();
        return super.chooseCell(tiv1);
    }

    chooseCell2(tiv1, tiv2) {
        this.getNewCoordinates();
        return super.chooseCell2(tiv1, tiv2);


    }

    chooseCell3(tiv1, tiv2, tiv3) {
        this.getNewCoordinates();
        return super.chooseCell3(tiv1, tiv2, tiv3);
    }

    chooseCell4(tiv1, tiv2, tiv3, tiv4) {
        this.getNewCoordinates();
        return super.chooseCell4(tiv1, tiv2, tiv3, tiv4);
    }
    mul() {
    
        if (weath == "spring") {
         this.multiply+=10;
            if (this.multiply >= 40) {
                let emptyCells = super.chooseCell4(0, 1, 2, 3)
                let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
                if (this.multiply >= 40 && newCell) {
                    let x = newCell[0]
                    let y = newCell[1]
                    matrix[y][x] = 4
                    BlueArr.push(new Blue(x, y, 4))
                    this.multiply = -300;
                }
            }
        }
        else {
            this.multiply-=5;
            
    }}

    }



