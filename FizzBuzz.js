for (let number = 1; number <= 100; number = number + 1) {
    if ((number % 3 === 0) && (number % 5 === 0)) {
        console.log('FizzBuzz');
    } else if (number % 3 === 0) {
        console.log('Fizz');
    } else if (number % 5 === 0) {
        console.log('Buzz');
    } else if (number === 100) {
        console.log('Hi Ste')
    } else {
        console.log(number);
    }
};