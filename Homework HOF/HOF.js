// 1. Verificati daca toate elementele unui array sunt numere pare folosind metoda every

const array1 = [1, 3, 5, 6, 8, 10, 11, 13, 20, 25, 50, 55, 100];
const array2 = [2, 6, 8, 10, 20, 50, 100];

const par = (x) => x % 2 === 0;
console.log("Contine 'array1' doar numere pare?", 'Raspuns: ', array1.every(par));
console.log("Contine 'array2' doar numere pare?", 'Raspuns: ', array2.every(par));


// ------------------------------------------------------------------------------------------------
// 2. Folosind forEach, afisati toate elementele unui array

// const array1 = [1, 3, 5, 6, 8, 10, 11, 13, 20, 25, 50, 55, 100];

// array1.forEach((Number) => {
//     console.log(`Value: ${Number}`);
// });



// ------------------------------------------------------------------------------------------------
// 3. Folosind reduce, adunati toate numerele dintr-un array

// const numbers = [1, 3, 5, 6, 8, 10, 11, 13, 20, 25, 50, 55, 100];

// const sum = numbers.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// }, 0);

// console.log(`Suma numerelor este: ${sum}`);
