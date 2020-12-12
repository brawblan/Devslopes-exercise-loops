// Solution #1

let num = 1;
let numArr = [];
let finalArr = [];

while (num <= 100) {
  numArr.push(num);
  num++;
}

for (let i in numArr) {
  if ((numArr[i] % 3) === 0 && (numArr[i] % 5) === 0) {
    finalArr.push('FizzBuzz');
  } else if ((numArr[i] % 5) === 0) {
    finalArr.push('Buzz');
  } else if ((numArr[i] % 3) === 0) {
    finalArr.push('Fizz')
  } else {
    finalArr.push(numArr[i]);
  }
}

console.log(finalArr);

////////////////////////////////////////////////////////
//  Solution #2

let num = 1;
let numArr = [];

while (num <= 100) {
  if ((num % 3) === 0 && (num % 5) === 0) {
    numArr.push('FizzBuzz');
  } else if ((num % 5) === 0) {
    numArr.push('Buzz');
  } else if ((num % 3) === 0) {
    numArr.push('Fizz')
  } else {
    numArr.push(num);
  }
  num++;
}

console.log(numArr);