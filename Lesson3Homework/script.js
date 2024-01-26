let expo = prompt("Enter a number");
alert(expo ** 2);


let temp = prompt("Enter Degree Celsius");
alert((temp * 9 / 5) + 32 + "°F");


let minRange = Number(prompt("Enter minimum value of the range"));
let maxRange = Number(prompt("Enter maximum value of the range"));
let chooseNumber = Number(prompt("Enter a number"));
function checkRange(minRange, maxRange, chooseNumber) {
    if (chooseNumber >= minRange && chooseNumber <= maxRange) {
        return `This ${chooseNumber} is in range`;
    }
    else {
        return `This ${chooseNumber} is out of range`;
    }
}
alert(checkRange(minRange, maxRange, chooseNumber));


let chooseYear = prompt("Enter year");
if (chooseYear % 4 === 0) {
    alert("მოცემული წელი ნაკიანია");
}
else {
    alert("მოცემული წელი არ არის ნაკიანი");
}


let num1 = parseFloat(prompt("Enetr number 1"));
let num2 = parseFloat(prompt("Enetr number 2"));
let oper = prompt("Enter math operation (+ ; - ; * ; / ; ** ;)");
function calculate(num1, num2) {
    switch (oper) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        case "**":
            return num1 ** num2;
    }
}
alert(calculate(num1, num2));



