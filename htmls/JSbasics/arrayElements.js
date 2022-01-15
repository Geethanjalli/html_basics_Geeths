function arrayElements(n) {

    var name = ["Anjali", "Prabha", "Rohan"];

    if (n > 0 && n <= 3) {
        let pos = n - 1;
        return name[pos];

    } else {
        return "NO Value"

    }
}
console.log("The First element of an array is : " + arrayElements(1));

console.log("The second element of an array is : " + arrayElements(2));

console.log("The Third element of an array is : " + arrayElements(3));

console.log("The Fifth element of an array is : " + arrayElements(5));
