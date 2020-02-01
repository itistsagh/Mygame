
// var io = require('socket.io');
var socket= io();

function setup() {

    //     var matrix = [[2, 2, 1, 2, 1, 0, 1],
    // [1, 2, 1, 0, 1, 1, 1],
    // [1, 0, 2, 0, 1, 0, 1],
    // [0, 1, 0, 1, 0, 0, 1],
    // [1, 2, 1, 0, 1, 1, 1],
    // [1, 0, 2, 0, 1, 0, 1],
    // [0, 1, 0, 1, 0, 1, 1],
    // [1, 2, 1, 0, 1, 1, 1],
    // [1, 0, 2, 0, 1, 0, 1],
    // [0, 1, 0, 1, 0, 0, 1],
    // [1, 2, 1, 0, 1, 1, 1],
    // [1, 0, 2, 0, 1, 0, 1],
    // [0, 1, 0, 1, 0, 0, 1]];
    side = 30;
    m = 5;
    n = 5;
    var matrix = [];

    background("#acacac");
    for (let i = 0; i < m; i++) {
        matrix[i] = [];
        for (let j = 0; j < n; j++) {
            matrix[i][j] = Math.floor(Math.random*4);
        }
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    frameRate(5);

};

socket.on('send matrix', nkarel);

function nkarel() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            if (obj == 1) {
                fill("green");
                rect(x * side, y * side, side, side)
            }
            else if (obj == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
        }
    }
}


setInterval(
    function () {
        socket.on('send matrix', nkarel)
    }, 1000
);


// function draw() {

//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {

//             if (matrix[y][x] == 1) {
//                 fill("green");
//             }
//             else if (matrix[y][x] == 0) {
//                 fill("#acacac");
//             }
//             else if (matrix[y][x] == 2) {

//                fill("yellow");
//             }
//             else if (matrix[y][x] == 3) {
//                 fill("red");
//             }
//             else if(matrix[y][x]==5){
//                 fill('blue');
//             }
//             // if (matrix[y][x] == 4) {
//             //     fill('black');
//             // }
//             rect(x * side, y * side, side, side);
//         }
//     } 
//     socket.on('send matrix',matrix);
//     for (var i in grassArr) {
//         grassArr[i].mul(); 
//     }
//     for (var i in GrassEaterArr) {
//         GrassEaterArr[i].move();
//         GrassEaterArr[i].eat();
//         GrassEaterArr[i].mul();
//         GrassEaterArr[i].die();
//     }
//     for (var i in EaterArr) {
//         EaterArr[i].move();
//         EaterArr[i].eat(); 
//         EaterArr[i].mul();
//         EaterArr[i].die()
//     }
//     for (var i in BlueArr) {
//             BlueArr[i].move();
//             BlueArr[i].eat();
//             BlueArr[i].mul();
//             BlueArr[i].die()
//     }
// //     for (var i in SquareArr ) {
// //     SquareArr[i].move();
// //     SquareArr[i].eat();  
// //     SquareArr[i].die();  
// //    } 
//    socket.on('send matrix',matrix);
// }


