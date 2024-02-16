// შექმენით საიტი, სადაც მომხმარებელს შეეძლება ატვირთოს როგორც ტექსტური, ისე ფოტო, ისე ვიდეო ფაილები.
// მინიშნება: ფოტოს გამოსატანად ჩვენს განხილულ მაგალითში გამოვიყენეთ <img> ტეგი, ვიდეოსთვის მოგიწევთ გამოიყენოთ <video> ტეგი.
// TxtFiles
function getFileContent() {
  return new Promise(() => {
    let textFileUpload = document.getElementById("textFileUpload");
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
        let arithmeticMean = wordsLength / totalSymbols;
        console.log("Arithmetic mean is " + arithmeticMean);
      };
    }
  });
}

//   Images
function getImage() {
  return new Promise(() => {
    let imageUpload = document.getElementById("imageUpload");
    let imageContent = document.getElementById("imageContent");
    let file = imageUpload.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        imageContent.src = event.target.result;
        imageContent.style.display = "block";
      };
      reader.readAsDataURL(imageUpload.files[0]);
    }
  });
}

//   Videos
function getVideo() {
  return new Promise(() => {
    let videoUpload = document.getElementById("videoUpload");
    let videoContent = document.getElementById("videoContent");
    let file = videoUpload.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function (event) {
        videoContent.src = event.target.result;
        videoContent.style.display = "block";
      };
      reader.readAsDataURL(videoUpload.files[0]);
    }
  });
}
function playVideo() {
  let videoContent = document.getElementById("videoContent");
  if (videoContent.paused) {
    videoContent.play();
  } else {
    videoContent.pause();
  }
}
