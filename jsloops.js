// let numbers = [10, 20, 30, 40, 50];

// let sum = numbers.reduce((acc, val) => acc + val, 0);

// let average = sum / numbers.length;

// console.log(`Suma elementelor din array este: ${sum}`);
// console.log(`Media aritmetică a elementelor din array este: ${average}`);

let mixedArray = [10, true, "hello", 20, false, "world", 30, "30", 40, true, "50"];

let numericValues = mixedArray.filter(value => typeof value === 'number');

let sumOfNumbers = numericValues.reduce((acc, val) => acc + val, 0);

console.log(`Elementele de tip number sunt: ${numericValues}`);
console.log(`Suma elementelor de tip number este: ${sumOfNumbers}`);