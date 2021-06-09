
'use strict'; // Строгий режим
const numbers = [3, 2,-10, 38, 0];
const calculateMax = (numbers) => {
    let maxNumber = numbers[0];
    for (let i=1; i<numbers.length; i ++) {
        if (maxNumber < numbers[i]) {
            maxNumber = numbers[i];
        } 
    }
    return maxNumber;
}
console.log(calculateMax(numbers));