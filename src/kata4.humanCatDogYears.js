const humanCatDogYears = (number) => {
    const humanAge = number;
    const catAndDogYears1And2 = 15 + 9;

    let dogAge = (humanAge - 2) * 5;
    let catAge = (humanAge - 2) * 4;

    dogAge += catAndDogYears1And2;
    catAge += catAndDogYears1And2;

    return [number, catAge, dogAge];

}

module.exports = humanCatDogYears;
