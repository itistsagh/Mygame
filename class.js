class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
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
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        // console.log(emptyCells);
        if (newCell && this.multiply >= 8) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, 1);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }


}

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.directions = [];
    }

    NewCoordinates() {
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
        this.NewCoordinates();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

    move() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            // console.log(this.x, this.y);
            matrix[this.y][this.x] = 0;
            matrix[newY][newX] = this.index;
            this.x = newX;
            this.y = newY;
            this.energy--;
        }
    }

    eat() {
        var emptyCells = this.chooseCell(1);
        var grass = random(emptyCells);
        if (grass) {
            var newX = grass[0];
            var newY = grass[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy += 2;
        }
    }

    mul() {
        var newCell = random(this.chooseCell(0))
        if (newCell && this.energy >= 8) {
            var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
            GrassEaterArr.push(newGrassEater);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 1;

        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in GrassEaterArr) {
                if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1)
                }
            }
        }
    }
}

class Eater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.index = index;
        this.directions = [];
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
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == tiv1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

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
    move() {
        var newCell = random(this.chooseCell2(0, 1));
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
        var eater = random(this.chooseCell(2));
        if (eater) {
            var newX = eater[0];
            var newY = eater[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            for (var i in GrassEaterArr) {
                if (newX == GrassEaterArr[i].x && newY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy += 4;
        }
    }
    mul() {
        var newCell = random(this.chooseCell(0))
        if (newCell && this.energy >= 12) {
            var eater = new Eater(newCell[0], newCell[1], this.index);
            EaterArr.push(eater);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 10;

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

class Blue {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.index = index;
        this.directions = [];
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
    chooseCell(tiv1) {
        this.getNewCoordinates();
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == tiv1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

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

    move() {
        var newCell = random(this.chooseCell2(0, 1));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (matrix[newY][newX] == 0) {
                matrix[this.y][this.x] = 0;
                matrix[newY][newX] = this.index;
                this.energy --;
            }
            else if (matrix[newY][newX] == 1) {
                matrix[this.y][this.x] = 1;
                matrix[newY][newX] = this.index;
                this.energy-= 2;
            }
            this.y = newY;
            this.x = newX;

        }

    }

    eat() {
        var eater = random(this.chooseCell(2));
        if (eater) {
            var newX = eater[0];
            var newY = eater[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
            for (var i in EaterArr) {
                if (newX == EaterArr[i].x && newY == EaterArr[i].y) {
                    EaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in GrassEaterArr) {
                if (newX == GrassEaterArr[i].x && newY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }
            }
            this.x = newX;
            this.y = newY;
            this.energy += 5;
        }
    }

    mul() {
        var newCell = random(this.chooseCell(0))
        if (newCell && this.energy >= 15) {
            var blue = new Blue(newCell[0], newCell[1], this.index);
            BlueArr.push(blue);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 10;

        }
    }

    die() {
        if (this.energy <= -5) {
            matrix[this.y][this.x] = 0;
            for (var i in BlueArr) {
                if (this.x == BlueArr[i].x && this.y == BlueArr[i].y) {
                    BlueArr.splice(i, 1)
                }
            }
        }
    }

}

class Square {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.index = index;
        this.directions = [];
    }

    getNewCoordinates() {
        var i = Math.floor(random(1, 20))
        this.directions = [

            [this.x - i, this.y - i],
            [this.x + i, this.y + i],
            [this.x + i, this.y - i],
            [this.x - i, this.y + i],


        ];

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

    move() {
        var newCell = random(this.chooseCell2(0, 1));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (matrix[newY][newX] == 0) {
                matrix[this.y][this.x] = 0;
                matrix[newY][newX] = this.index;
                this.energy --;
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
        var eater = random(this.chooseCell3(5,2,3));
        if (eater) {
            var newX = eater[0];
            var newY = eater[1];
            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;
     
            for (var i in EaterArr) {
                if (newX == EaterArr[i].x && newY == EaterArr[i].y) {
                    EaterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in GrassEaterArr) {
                if (newX == GrassEaterArr[i].x && newY == GrassEaterArr[i].y) {
                    GrassEaterArr.splice(i, 1);
                    break;
                }}
            for (var i in BlueArr) {
                    if (newX == BlueArr[i].x && newY == BlueArr[i].y) {
                        BlueArr.splice(i, 1);
                        break;
                    }
                }
            this.x = newX;
            this.y = newY;
            this.energy += 10;
            
        }}

    die() {

            if (this.energy >=60) {
                matrix[this.y][this.x] = 0;
                for (var i in SquareArr) {
                    if (this.x == SquareArr[i].x && this.y == SquareArr[i].y) {
                        SquareArr.splice(i, 1)
                    }
                
           
        }}
    
        else if (this.energy <=-10) {
            matrix[this.y][this.x] = 0;
            for (var i in SquareArr) {
                if (this.x == SquareArr[i].x && this.y == SquareArr[i].y) {
                    SquareArr.splice(i, 1)
                }
            }
    }}
    
    
    }