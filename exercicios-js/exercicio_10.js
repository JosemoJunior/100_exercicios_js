/*
10 - Refaça o exercício anterior utilizando .map(). 
Para criar um array com números de 1 a 100:

const numeros = Array.from({ length: 100 }, (_, index) => index + 1);

*/

const numeros = Array.from({ length: 100 }, (_, index) => index + 1);

const novoArray = numeros.map((n) => {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
});

console.log(novoArray);

