//Declarati si initializati un array denumit initialValues. Acesta va contine toate tipurile de date cunoscute pana acum.

let initialValues = [3, 6, "Hello!", true, false, null];

// 1. Declarati si initializati un alt array denumit otherValues si populatil la fel ca initialValues dar cu mai multe tipuri de date dar. Trebuie sa contina macar un tip numeric si un string

let otherValues = [1, 5, 12.5, "Welcome!", 4, undefined];

// 2.Faceti push la otherValues array in initialValues array

// console.log('----Exercitiul 2----');


// initialValues.push(otherValues);
// console.log(initialValues);

// ------    ----------------     -----------------      --------------       -------------

// 3. Folositi valorile de tip numeric din initialValues pentru a calcula cateva operatii aritmetice(ex. Puteti adauga 2 la o anumita valoare);

console.log('----Exercitiul 3----');

let numericValues = initialValues.filter(value => typeof value === 'number');
let sumOfNumbers = numericValues.reduce((acc, val) => acc + val, 0);
let productNumbers = numericValues.reduce((acc, val) => acc * val, 1);
let evenNumbers = numericValues.reduce((acc, val) => acc / val);

console.log('Datele numerice sunt:', numericValues);
console.log('Suma este:', sumOfNumbers);
console.log('Produsul este:', productNumbers);
console.log('Câtul este:', evenNumbers);


// 4. Dupa ce a-ti facut operatiile, modificati valorile din initialValues array cu noile valori obtinute pe baza operatiilor. Valorile sa fie puse pe pozitiile corespunzatoare, sa nu fie adaugate ca valori noi in array.
Ex: Input: [1, 2, 3]
Output: [3, 4, 5] // Am adunat 2 la fiecare numar din array

console.log('----Exercitiul 4----');

initialValues.splice(0, 2, sumOfNumbers, productNumbers);
console.log(initialValues);

// 5.Concatenati toate valorile de tip string din initialValues array cu string-ul ”happy codding”;

console.log('----Exercitiul 5----');

let concatenatedStrings = initialValues.map(value => {
  if (typeof value === 'string') {
    return value + ' Happy Coding!';
  } else {
    return value;
  }
});

console.log(concatenatedStrings);

// 6. Folosing operatorul “!” inversati toate valorile boolene din initialValues array;
Ex: Input: [true, false]
Output: [false, true]

console.log('----Exercitiul 6----');

for (let i = 0; i < initialValues.length; i++) {
  if (typeof initialValues[i] === 'boolean') {
    initialValues[i] = !initialValues[i];
  }
}

console.log(initialValues);


