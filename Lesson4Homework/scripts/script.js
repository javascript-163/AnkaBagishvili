// 1.ქვემოთ მოცემულ კოდში დაშვებულია ლოგიკური შეცდომა, უნდა გამოიტანოს მხოლოდ "You're moving!" და გაჩერდეს კოდი. იპოვეთ შეცდომა და გაასწორეთ იგი.

{
    let action = "move";
    switch (action) {
        case "move":
            alert("You're moving!");
            break
        case "jump":
            alert("You're jumping!");
            break
        case "run":
            alert("You're running!")
            break
        default:
            alert("Invalid action.")
    }
}


// 2.
// 1.switch-ის გამოყენებით შეავსეთ გამოტოვებული ადგილები ისე, რომ თუ ბოსტნეული (vegetables) სტაფილოზე (carrot) დგას გამოიტანოს “Hello” და თუ “Broccoli” ზე დგას გამოიტანოს “Welcome”.
// 2.თუ ბოსტნეული(vegetables) არც ბროკოლია(broccoli) და არც სტაფილო (carrot) მაშინ გამოიტანეთ არცერთი (“Neither”)

{
    let vegetables = prompt("Enter 'Carrot' or 'Broccoli'");
    {
        switch (vegetables) {
            case "Carrot":
                alert("Hello")
                break;
            case "Broccoli":
                alert("Welcome")
                break;
        }
    }

    {
        switch (vegetables) {
            case "Broccoli":
                alert("Hello")
                break;
            case "Carrot":
                alert("Welcome")
                break;
            default:
                alert("Neither");
        }
    }
}


// 3.შექმენით ხმის მიცემის უფლების შემმოწმებელი ფუნქცია. თუ მომხმარებლის ასაკი ნაკლებია 18-ზე უნდა გამოჩნდეს, რომ მას არ შეუძლია ხმის მიცემა, თუ მისი ასაკი მეტია 18-ზე უნდა გამოჩნდეს, რომ მომხმარებელს შეუძლია ხმის მიცემა.
{
    let age = prompt("Enter your age")
    if (age < 18) {
        alert("არ შეგიძლია ხმის მიცემა!");
    }
    else {
        alert("შეგიძლია მისცე ხმა!");
    }
}


// 4.შექმენით პაროლის სიძლიერის შემმოწმებელი ფუნქცია, ფუნქციამ უნდა მიიღოს პარამეტრის სახით შესამოწმებელი პაროლი, პირობა ასეთია:
// 1. თუ პაროლი შედგება 3-ზე ნაკლები სიმბოლოსგან იგი უარგისია.
// 2. თუ პაროლი შედგება მინ. 3 მაქ. 6 სიმბოლოსგან იგი სუსტია
// 3. თუ პაროლი შედგება მინ. 6 მაქ. 8 სიმბოლოსგან იგი მისაღებია
// 4. თუ პაროლი შედგება მინ. 8 მაქ. 16 სიმბოლოსგან იგი ძლიერია.
// 5. თუ პაროლი მხოლოდ რიცხვებისგან შედგება იგი უვარგისია.

{
    let password = prompt("Create password:");
    if (!isNaN(Number(password))) {
        alert("პაროლი უვარგისია.");
    }
    else if (password.length < 3) {
        alert("პაროლი უვარგისია.");
    }
    else if (password.length >= 3 && password.length <= 6) {
        alert("პაროლი სუსტია.");
    }
    else if (password.length >= 6 && password.length <= 8) {
        alert("პაროლი მისაღებია.");
    }
    else if (password.length >= 8 && password.length <= 16) {
        alert("პაროლი ძლიერია.");
    }
}

// 5. შექმენით Quiz-ის პროგრამა შემდეგი პირობების გათვალისწინებით:
// საჭიროა გქონდეთ მინიმუმ 5 სხვადასხვა შეკითხვა.
// ჩაშენებული პირობითი ოპერატორების მეშვეობით გააკეთეთ ისე, რომ მომხმარებელს შეეძლოს თითოეული ამ შეკითხვიდან მომდევნო შეკითხვაზე გადასვლა, მხოლოდ იმ შემთხვევაში თუ წინა შეკითხვას სწორად უპასუხებს.
// მაგ. თუ მომხმარებელი გასცემს სწორად პასუხს პირველ შეკითხვას, მხოლოდ ამ შემთხვევაში უნდა მოხდეს მისი მეორე შეკითხვაზე გადაყვანა იგივე დანარჩენ შეკითხვებზეც.

let correctCount = 0;
let answeredQuestions = [];
let userAnswers = [];
let questions = [
    "2 + 2 = ?",
    "How many fingers does a human have?",
    "When was the battle of Didgori?",
    "How many hours are there in a day?",
    "How many colors does a rainbow have?"
];
let correctAnswers = ["4", "20", "1121", "24", "7"];
for (let i = 0; i < questions.length; i++) {
    let answer = prompt(questions[i]);
    userAnswers.push(answer);
    if (answer === correctAnswers[i]) {
        correctCount++;
    } else {
        alert("Incorrect answer. Game over!");
        break;
    }
}
if (correctCount === questions.length) {
    alert(`Congratulations! You've answered all questions correctly.`);
} else {
    alert(`You answered ${correctCount} questions correctly.`);
}
console.log("User answers:", userAnswers);


// დამატებითი
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

// 2.შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120,
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

// 3.შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.
{
    let word = prompt("Enter word")
    function capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    alert(capitalizeFirstLetter(word));
}



// 4.შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.
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
