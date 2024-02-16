// 2. შექმენით საიტი სადაც მომხმარებელს შეეძლება აირჩიოს მისთვის სასურველი სურათი, შემდეგში კი გამოიტანეთ ეს სურათი ეკრანზე.
function getImage() {
  return new Promise(() => {
    let imageUpload = document.getElementById("imageUpload");
    let imageContent = document.getElementById("imageContent");
    console.log(imageUpload.files[0]);
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
};
