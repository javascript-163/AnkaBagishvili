// 1.      შექმენით პროგრამა, რომელიც შეამოწმებს, არის თუ არა კონკრეტული ცვლადის მნიშვნელობა მასივი
let animals = ["cat", "dog", "horse", "wolf", "tiger"];
// 2.      შექმენით პროგრამა, რომელიც გამოიტანს მასივის პირველ ელემენტს
let result = Array.isArray(animals);
console.log(result);
// 3.      შექმენით პროგრამა, რომელიც გამოიტანს მასივის ბოლო ელემენტს.
let indexedOne = animals[0];
console.log(indexedOne);

let indexedLast = animals.slice(-1);
console.log(indexedLast);

// 4.      მოცემული გვაქვს შემდეგი მასივები:
//  color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//  o = ["th","st","nd","rd"]
//  შექმენით პროგრამ ა რომელიც გამოიტანს ფერებს შემდეგი თანმიმდევრობით:
//  "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."



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


// 5.      შექმენით პროგრამა, რომელიც შექმნის ობიექტს სტუდენტზე, რომელშიც იქნება ისეთი გასაღებები, როგორიცაა: სახელი, გვარი, ა.შ მაგ: {sakheli: ‘mate’, ‘gvari’: ‘gotua’}, მოახდინეთ ამ ობიექტზე მანიპულირება, მაგ. დაამატეთ ახალი მონაცემი გარდა ამისა წაშალეთ რაიმე მონაცემი და ასევე არსებულ ობიექტში ჩაანაცვლეთ რაიმე ერთი მონაცემი მეორეთი, ეს მოქმედებები განახორციელეთ თანმიმდევრულად.

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


