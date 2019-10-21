// Chessboard (Chapter2)
var size = prompt("What is the size of your chess board?");
var position = "";
for( let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
        if ((i + j) % 2 == 0) {
            position += " ";
        } else {
            position += "#";
        }
    }
    position += "\n";
}
console.log(position);
