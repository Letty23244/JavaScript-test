

// no1
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

// no2
function evenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
console.log(evenNumbers([7, 2, 3, 4, 9, ]));

// n03
function Numbers(x, y) {
    return x=== y ? x * y : x + y;
}

console.log(Numbers(8, 3)); 
console.log(Numbers(7, 5)); 