
let LivingCreature=require('./LivingCreature')
module.exports = class Blue extends LivingCreature{

    constructor(x, y, index){
        super(25, 25, index);
        this.directions = [];
    }

    getNewCoordinates() { 
         this.directions = [
        
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x + 1, this.y+1],
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
        return super.chooseCell3(tiv1, tiv2, tiv3);}

    mul() {this.multiply++;
       if(weath == "spring") {
            
        if (this.multiply >= 10) {
            let emptyCells = super.chooseCell2(0,1)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
            if (this.multiply >= 5 && newCell) {
                let x = newCell[0]
                let y = newCell[1]
                matrix[y][x] = 4
                BlueArr.push(new Blue(x, y, 4))
                this.multiply = 0;

            }
        }    
        }
    
    }
}

