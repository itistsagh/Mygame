
let LivingCreature=require('./LivingCreature')
module.exports = class Blue extends LivingCreature{

    constructor(x, y, index){
        super(x, y, index);
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
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
            [this.x + 2, this.y + 2]
        ];
    }
   fill(){
    for (var y = 0; y < this.directions.length; y++) {
        for (var x = 0; x < this.directions[y].length; x++) {
          matrix[y][x] = 4;
       }
}}

    chooseCell(tiv1) {
        this.getNewCoordinates();
        return super.chooseCell(tiv1);
    } 

    chooseCell2(tiv1, tiv2) {
        this.getNewCoordinates();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == tiv1) {
                    found.push(this.directions[i]);
                }
                else if (matrix[y][x] == tiv1 || matrix[y][x] == tiv2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

    chooseCell3(tiv1, tiv2, tiv3) {
        this.getNewCoordinates();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == tiv1) {
                    found.push(this.directions[i]);
                }
                else if (matrix[y][x] == tiv1 || matrix[y][x] == tiv2) {
                    found.push(this.directions[i]);
                }

                else if (matrix[y][x] == tiv1 || matrix[y][x] == tiv2 || matrix[y][x] == tiv3) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

    mul() {
        this.multiply++;
        if (this.multiply >= 50) {
            let emptyCells = super.chooseCell(0)
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

//     move() {
//         var newCell = random(this.chooseCell2(0, 1));
//         if (newCell) {
//             var newX = newCell[0];
//             var newY = newCell[1];
//             if (matrix[newY][newX] == 0) {
//                 matrix[this.y][this.x] = 0;
//                 matrix[newY][newX] = this.index;
//                 this.energy --;
//             }
//             else if (matrix[newY][newX] == 1) {
//                 matrix[this.y][this.x] = 1;
//                 matrix[newY][newX] = this.index;
//                 this.energy-= 2;
//             }
//             this.y = newY;
//             this.x = newX;

//         }

//     }

//     eat() {
//         var eater = random(this.chooseCell(2));
//         if (eater) {
//             var newX = eater[0];
//             var newY = eater[1];
//             matrix[newY][newX] = this.index;
//             matrix[this.y][this.x] = 0;
//             for (var i in EaterArr) {
//                 if (newX == EaterArr[i].x && newY == EaterArr[i].y) {
//                     EaterArr.splice(i, 1);
//                     break;
//                 }
//             }
//             for (var i in GrassEaterArr) {
//                 if (newX == GrassEaterArr[i].x && newY == GrassEaterArr[i].y) {
//                     GrassEaterArr.splice(i, 1);
//                     break;
//                 }
//             }
//             this.x = newX;
//             this.y = newY;
//             this.energy += 5;
//         }
//     }

//     mul() {
//         var newCell = random(this.chooseCell(0))
//         if (newCell && this.energy >= 15) {
//             var blue = new Blue(newCell[0], newCell[1], this.index);
//             BlueArr.push(blue);
//             matrix[newCell[1]][newCell[0]] = this.index;
//             this.energy = 10;

//         }
//     }

//     die() {
//         if (this.energy <= -5) {
//             matrix[this.y][this.x] = 0;
//             for (var i in BlueArr) {
//                 if (this.x == BlueArr[i].x && this.y == BlueArr[i].y) {
//                     BlueArr.splice(i, 1)
//                 }
//             }
//         }
//     }

// }