const numberToReversedDigits = (number) => {
let numbers = [];
//console.log(number.toString().length);
for (let i = 0; i < number.toString().length; i++) {
    numbers.push(parseInt(number.toString()[i]))
    }
return numbers.reverse();
};

module.exports = numberToReversedDigits;
