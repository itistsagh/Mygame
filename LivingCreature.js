module.exports = class LivingCreature {
    constructor(x, y, index) {
		this.x = x;
		this.y = y;
		this.index = index;
		this.multiply = 0;
		
	}

	getNewDirections(){
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
		this.getNewDirections()
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
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

    chooseCell4(tiv1, tiv2, tiv3, tiv4) {
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
                else if (matrix[y][x] == tiv1 || matrix[y][x] == tiv2 || matrix[y][x] == tiv3 || matrix[y][x] == tiv4) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;

    }

}