// 1. შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.
{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let i = 0;
    while (i < numbers.length) {
        if (i === 2 || i === 5 || i === 8) {
            console.log(numbers[i]);
        }
        i++;
    }


    for (let i = 0; i < numbers.length; i++) {
        if (i === 2 || i === 5 || i === 8) {
            console.log(numbers[i]);
        }
    };
}


// 2. შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
{
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let i = numbers.length - 1;
    while (i >= 0) {
        console.log(numbers[i]);
        i--;
    }

    for (let i = numbers.length - 1; i >= 0; i--) {
        console.log(numbers[i]);
    }
}


// 3. მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.
{
    let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
    let i = 0;
    while (i < names.length) {
        if (names[i] === 'Bob') {
            delete names[i];
        }
        i++;
        console.log(names);
    }

    for (let i = 0; i < names.length; i++) {
        if (names[i] === 'Bob') {
            delete names[i];
        }
        console.log(names);
    }
}

// 4.ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.
{
    let number = prompt("Enter first number");
    let power = prompt("Enter second number");
    function fun(number, power) {
        return number ** power;
    }
    alert(fun(number, power));
}

// 5.შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
{
    let i = 0;
    while (i < 100) {
        if (i % 3 == 0 && i % 5 == 0 && i != 0) {
            console.log(i + " FizzBuzz");
        }
        else if (i % 3 == 0 && i != 0) {
            console.log(i + " Fizz");
        }
        else if (i % 5 == 0 && i != 0) {
            console.log(i + " Buzz");
        }
        else {
            console.log(i);
        }
        i++
    }
}


// 6.შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120
{
    let number = prompt("Enter number to calculate factorial");
    function factorialCalculator(number) {
        if (number === 0 || number === 1) {
            return 1;
        }
        else {
            let result = number;
            let i = number - 1;
            while (i > 1) {
                result = result * i;
                i--;
            }
            return result;
        }
    }
    alert(factorialCalculator(number));
}


// 7.შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.
let word = prompt("Enter word")
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
alert(capitalizeFirstLetter(word));

// 8. შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.
{
    let testString = prompt("Test string");
    function blankStringChecker(testString) {
        if ((testString.trim().length) === 0) {
            return "This string is blank"
        }
        else {
            return "This string is not blank";
        }
    }
    alert(blankStringChecker(testString));
}


// 9.შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]





// 10.შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com.
// წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.
