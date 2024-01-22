let animals = ["cat", "dog", "horse", "wolf", "tiger"];

let result = Array.isArray(animals);
console.log(result);

let indexedOne = animals[0];
console.log(indexedOne);

let indexedLast = animals.slice(-1);
console.log(indexedLast);




let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th", "st", "nd", "rd"]

let firstColor = color[0];
let fisttO = o[0];
console.log("1" + fisttO + " choice is " + firstColor);

let secondColor = color[1];
let secondO = o[2];
console.log("2" + secondO + " choice is " + secondColor);

let thirdColor = color[2];
let thirdO = o[3];
console.log("3" + thirdO + " choice is " + thirdColor);




let student = {
    sakheli: "mate",
    gvari: "gotua"
};

student.age = 24;
console.log(student);

delete student.age;
console.log(student);

[student.sakheli, student.gvari] = [student.gvari, student.sakheli];
console.log(student);


