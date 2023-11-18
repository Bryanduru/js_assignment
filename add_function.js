function addNumbers(numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
}

let numbersArray = [3, 4, 9, 12, 5, 10]
function addition(numbers) {
    let total = addNumbers(numbersArray);
    return console.log(total);
}

addition(numbersArray);
