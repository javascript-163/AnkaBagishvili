let firstName = prompt("Enter your name");

let lastName = prompt("Enter your lastname");

let birthDate = prompt("Enter your birth date");

let address = prompt("Enter your address");

let age = 2024 - birthDate;

let isNumber  = Number(birthDate);

if (isNaN(isNumber)) {
    alert("დაბადების თარიღი არ არის რიცხვი.");
}
else{
    alert("გამარჯობა " + firstName + " " + lastName + ", მიხარია რომ უკვე " + age + " წლის ხარ და " + address + "ში ცხოვრობ.");
}
