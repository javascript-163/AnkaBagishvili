// შექმენით ერთგვარი ტექსტური ფაილის ანალიზატორი.
// 1. მომხმარებელს მოთხოვეთ აირჩიოს სასურველი ტექსტური ფაილი, read file-ზე დაჭერისას კი წაიკითხეთ ამ ფაილის კონტენტი.
// 2. დაადგინეთ ფაილში არსებული საერთო სიმბოლოოების რაოდენობა
// Total symbols: 150,
// 3. დაადგინეთ ფაილში არსებული საერთო სიტყვების ოდენობა
// Total Words: 78
// 4. დაადგინეთ ფაილში არსებული ყველაზე გრძელი და ყველაზე მოკლე სიტყვა
// Longest Word: beautiful
// Shortest Word: sad
// 5. დაადგინეთ ფაილში არსებული სიტყვების საშუალო არითმეტიკული ზომა (საშუალო ზომა გამოითვლება თითოეული სიტყვის ზომა გაყოფილი მათ საერთო რაოდენობაზე)

function getFileContent() {
  return new Promise(() => {
    let textFileUpload = document.getElementById("textFileUpload");
    console.log(textFileUpload.files[0]);
    let file = textFileUpload.files[0];
    if (file) {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function (event) {
        // let fileContent = document.getElementById("fileContent");
        let fileContent = event.target.result;
        let totalSymbols = fileContent.length;
        console.log("Total Symbols: " + totalSymbols);
        let totalWords = fileContent.split(" ");
        console.log("Total Words: " + totalWords.length);

        let longestWord = totalWords[0];
        let shortestWord = totalWords[0];
        for (let i = 0; i < totalWords.length; i++) {
          if (totalWords[i].length > longestWord.length) {
            longestWord = totalWords[i];
          } else if (totalWords[i].length < shortestWord.length) {
            shortestWord = totalWords[i];
          }
        }
        console.log("Shortest word is " + shortestWord);
        console.log("Longest word is " + longestWord);
        // shortest word is not displayed in console

        let wordsLength = fileContent.split("").length;
        let arithmeticMean = (wordsLength / totalSymbols);
        console.log("Arithmetic mean is " + arithmeticMean);
      };
    }
  });
}
