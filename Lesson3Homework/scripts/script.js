// 1. შექმენით პროგრამა, რომელიც რიცხვის კვადრატს იანგარიშებს
let expo = prompt("Enter a number");
alert(expo ** 2);

// 2.შექმენით პროგრამა, რომელიც ცელსიუსში მიწოდებულ ტემპერატურას გადაიყვანს ფერენჰეიტში, 1°C ტოლია 33.8°F -ის. (1°C × 9/5) + 32 = 33.8°F
let temp = prompt("Enter Degree Celsius");
alert((temp * 9 / 5) + 32 + "°F");

// 3.შექმენით პროგრამა, რომელიც შეამოწმებს არის თუ არა კონკრეტული რიცხვი მოქცეული მომხმარებლის მიერ შეყვანილ დიაპაზონში, ფუნქციამ უნდა მიიღოს სამი პარამეტრი, 1. რიცხვი, 2. დიაპაზონის საწყისი რიცხვი, 3. დიაპაზონის ბოლო რიცხვი.

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

// 4.შექმენით პროგრამა, რომელიც დაადგენს მომხმარებლის მიერ შეყვანილი წელი ნაკიანია თუ არა, თუ ნაკიანია უნდა გამოუტანოთ ეკრანზე, რომ მოცემული წელი ნაკიანია და თუ არა მაგ შემთხვევაში უნდა გამოიტანოთ რომ წელი არ არის ნაკიანი.

let chooseYear = prompt("Enter year");
if (chooseYear % 4 === 0 || (chooseYear % 100 === 0 && chooseYear % 400 === 0)) {
    alert("მოცემული წელი ნაკიანია");
}

else {
    alert("მოცემული წელი არ არის ნაკიანი");
}

// 5.შექმენით კალკულატორი, რომელიც შედგება შემდეგი ნაწილებისაგან: მომხმარებელს უნდა შეეძლოს სისტემაში მონაცემების შეტანა prompt-ის მეშვეობით, ეს მონაცემები უნდა იყოს: 
// 1. რიცხვი 1,
// 2. რიცხვი 2,
// 3. მოქმედება
// პირობითი ოპერატორების მეშვეობით დაადგინეთ თუ რა მოქმედება შეიტანა მომხმარებელმა და მოახდინეთ შესაბამისი კალკულაცია.
// მაგ. თუ რიცხვი 1: 10, რიცხვი 2: 23 ხოლო მოქმედება არის მიმატება(+) მაშინ:
// 10+23=33-ის, ანუ გამოგაქვთ 33;


let num1 = parseFloat(prompt("Enetr number 1"));
let num2 = parseFloat(prompt("Enetr number 2"));
let oper = prompt("Enter math operation (+ ; - ; * ; / ; ** ;)");
function calculate(num1, num2) {
    switch (oper) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        case "**":
            return num1 ** num2;
            break;
    }
}
alert(calculate(num1, num2));