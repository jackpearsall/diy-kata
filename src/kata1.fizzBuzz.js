const fizzBuzz = (number) => {
const isDivisibleByThree = (number % 3) === 0;
const isDivisibleByFive = (number % 5) === 0;

    if (isDivisibleByThree && isDivisibleByFive) {
        return 'FizzBuzz';
    }
    if (isDivisibleByFive){
        return 'Buzz';
    }
    if (isDivisibleByThree){
        return 'Fizz';
    }
    return number;
}

module.exports = fizzBuzz;
