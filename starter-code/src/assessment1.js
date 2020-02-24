// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a>b){return a;} else{return b;}
 return;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //mayor de tres numeros
  if(a>b && a>c){
    return a;
  }else if(b>a && b>c){
    return b;
  } else if(c>b && c>a){
    return c;
  }
  return;
}

// Calculate the sum of an array of numbers
let reducir = [1, 2, 3, 4, 5];
function sumArray(numbers) {
  //SUma de elementos array.
  let reducirte = (a,b) => a+b;
  let total = numbers.reduce(reducirte);
  if(total === []){
    return 0;
  }
  return total;
}

sumArray(reducir)

// Return the largest number of a non-empty array
let numerosArr = [1,2,3,4,5,6]
function maxOfArray(numbers) {
  //Buscar el mayor
  let maximo = Math.max(numbers.length);
  //devolver el mayor
  return maximo;
}
maxOfArray(numerosArr);


// Return the longest string in an array
function longestString(strings) {
  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
