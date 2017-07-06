"use strict"
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// A function to print all prime factors of a given number n
function primeFactors(n) {
  let result = []
  // Print the number of 2s that divide n
  while (n % 2 == 0) {
    result.push(2)
    n = n / 2;
  }

  // n must be odd at this point.  So we can skip
  // one element (Note i = i +2)
  for (let i = 3; i <= Math.sqrt(n); i = i + 2) {
    // While i divides n, print i and divide n
    while (n % i == 0) {
      result.push(i)
      n = n / i;
    }
  }
  // This condition is to handle the case when n
  // is a prime number greater than 2
  if (n > 2)
    result.push(n)

  return result;
}

rl.question('Enter n value: ', (n) => {
  let res = primeFactors(n)
  console.log(`Prime Factors: ${res}`)
  rl.close()
});
