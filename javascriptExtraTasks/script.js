// problem 1
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს რიცხვი, თუ კენტ რიცხვს შეიყვანს კონსოლში დაბეჭდეთ
// რომ მომხმარებელმა შეიყვანა კენტი რიცხვი თუ ლუწს შეიყვანს მაშინ შესაბამისად კონსოლში დაბეჭდეთ
// რომ მომხარებელმა შეიყვანა ლუწი რიცხვი.
// (მომხმარებლისგან ინფორმაციის მისაღებად გამოიყენეთ prompt() ფუნქცია,)
// (კონსოლში დასაბეჭდათ გამოიყენეთ console.log() ფუნქცია )

// let number = prompt("Write a number");
// if (number % 2 === 0) {
//     console.log("მომხმარებელმა შეიყვანა ლუწი რიცხვი")
// }
// else {
//     console.log("მომხმარებელმა შეიყვანა კენტი რიცხვი")
// };

// problem 2
// მომხმარებელს მოთხოვეთ რომ შეიყვანოს მისთვის საყვარელი ხილი
// ვაშლის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'ვაშლი კარგი არჩევანია ! '
// მსხლის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'მსხალი სჯობს! '
// ყურძნის შემთხვევაში კონსოლში დაბეჭდეთ რომ 'ყურძენი საუკეთესოა! '
// სურვილის შემთხვევაში დაამატეთ რამდენი ვარიანტიც გინდათ
// სხვა შემთხვევებში (თუ ისეთ ხილს შეიყვანს მომხმარებელი რომელიც ჩვენ არ გვიწერია ან ზოგადად ხილს არ შეიყვანს)
// კონსოლში დაბეჭდეთ "მოცემული მნიშვნელობა არ არის ჩვენს სიაში."
// დავალება შეასრულეთ Switch გამოყენებით

// let fruit = prompt("Choose a fruit");
// switch (fruit) {
//     case "Apple":
//         console.log("Apple is a good choise")
//         break;
//     case " Pears":
//         console.log(" Pears are better")
//         break;
//     case "Grapes":
//         console.log("Grapes are the best");
//         break
//     case "Anything else":
//         console.log("This value is not in the list")
//         break
// };

//problem 3
// შექმენით მასივი სადაც შეინახავთ მანქანის მოდელების სახელებს. მინიმუმ 3 მოდელს მაინც
//კონსოლში დაბეჭდეთ მასივის მეორე ელემენტი
// მასივის ფუნქციების გამოყენებით ბოლოში დაამატეთ ერთი ელემენტი და წაშალეთ პირველი.

// let cars = ["Prius C", "CT 200h", "C250"];
// console.log(cars[1]);
// cars.push("Corvette C7");
// console.log(cars);
// cars.shift([0]);
// console.log(cars);

// problem 4
// შექმენით მომხმარებლის ობიექტი რომელსაც ექნება სახელი, გვარი, ასაკი, სქესი.
// კონსოლში გამოიტანეთ მომხმარებლის სახელი.
// let person = {
//     name: "Anka",
//     lastName: "Bagishvili",
//     age: 24,
//     gender: "Female"
// };
// console.log(person.name);

// problem 5
// კონსოლში დაბეჭდეთ 1-100 მდე ყველა ლუწი რიცხვი
// for (let i = 1; i <= 50; i++) {
//     let number = i * 2;
//     console.log(number);
// };

// problem6
// მომხმარებელს მოთხოვოთ რომ შეიყვანოს რიცხვები მანამ სანამ არ შეიყვანს უარყოფით რიცხვს
// let number = prompt("Enter number");
// while (parseFloat(number) >= 0) {
//     number = prompt("Enter new number");
// };

// problems 7
// let numbers = [10,12,42,55,100,90,32,55];
// let result=[];
// numbers მასივში იპოვეთ რიცხვები რომელიც იყოფა 5-ზე ლუპის საშუალებით,
// შეინახეთ result მასივში.
// let numbers = [10, 12, 42, 55, 100, 90, 32, 55];
// let result = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 5 === 0) {
//         result.push(numbers[i])
//     }
// }
// console.log(result);

// problem 8
// let names = ["Gio","Luka","Nika","Ani","Eka","Nini","Sopo"];
// კონსოლში დაბეჭდეთ names მასივში არსებული ყველა ელემენტი, გამოტოვეთ მხოლოდ ნიკა.
// ლუპის საშუალებით.
// let names = ["Gio", "Luka", "Nika", "Ani", "Eka", "Nini", "Sopo"];
// for (let i = 0; i < names.length; i++) {
//     if (names[i] === "Nika") {
//         names.splice(i, 1)
//     }
// }
// console.log(names);

//problem9
//შექმენით ფუნქცია რომელიც პარამეტრად მიიღებს მასივს რომელშიც იქნება მინიმუმ 5 user-ის ობიექტი
// user ობიექტი უნდა ქონდეს შემდეგი properties სახელი,გვარი,სქესი,ასაკი.
// თუ ფუნქციაში გადაცემულ პარამეტრში არ იქნებ მინიმუმ 5 მომხმარებელი დააბრუნეთ წინადადება: "მასივში აუცილებლად უნდა იყოს მინიმუმ 5 მომხმარებელი"
// თუ მინიმუმ 5 მომხმარებელი იქნება დააბრუნეთ თითოეული მათგანის სრული სახელი, გვარი და ასაკი
let users =
    [{
        name: "Molly",
        lastName: "Begbie",
        gender: "Non-binary",
        age: 12,
    },
    {
        name: "Mayer",
        lastName: "Kuhnke",
        gender: "Agender",
        age: 39,
    },
    {
        name: "Susy",
        lastName: "Kyneton",
        gender: "Male",
        age: 36,
    },
    {
        name: "Raquela",
        lastName: "Littlefield",
        gender: "Genderqueer",
        age: 69,
    },
    {
        name: "Robinetta",
        lastName: "Loughney",
        gender: "Female",
        age: 40,
    }];

    function getUserInfo(users){
        if(users.length < 5){
            return("მასივში აუცილებლად უნდა იყოს მინიმუმ 5 მომხმარებელი");
        }
        else{
            // return();... ???????
    }}
