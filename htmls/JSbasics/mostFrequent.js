var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostFrequent = 1;
var most = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {


        if (arr1[i] == arr1[j])
            most++;
        if (mostFrequent < most) {
            mostFrequent = most;
            item = arr1[i];
        }
    }
    most = 0;
}
console.log(item + " ( " + mostFrequent + " times ) ");
