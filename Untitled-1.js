// String Manipulation Functions

function reverseString(str) {
    return str.split('').reverse().join('');
}


function countCharacters(str) {
    return str.length;
}


function capitalizeWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}




function findMax(arr) {
    return Math.max(...arr);
}


function findMin(arr) {
    return Math.min(...arr);
}


function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}


function filterArray(arr, condition) {
    return arr.filter(condition);
}




function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    return n === 0 ? 1 : n * factorial(n - 1);
}


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}


function fibonacci(n) {
    const sequence = [0, 1];
    while (sequence.length < n) {
        const nextValue = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextValue);
    }
    return sequence;
}



console.log(reverseString("hello")); // "olleh"
console.log(countCharacters("hello world")); // 11
console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"

console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMin([1, 2, 3, 4, 5])); // 1
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(filterArray([1, 2, 3, 4, 5], x => x > 3)); // [4, 5]

console.log(factorial(5)); // 120
console.log(isPrime(7)); // true
console.log(fibonacci(5)); // [0, 1, 1, 2, 3]
