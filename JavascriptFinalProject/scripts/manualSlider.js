let slideIndex = 1;
function moveSlide(number) {
  slideShower((slideIndex += number));
}
function currentSlide(number) {
  slideShower((slideIndex = number));
}
function slideShower(number) {
  let i;
  let manualSliderPics = document.getElementsByClassName("manualSliderPics");

  if (number > manualSliderPics.length) {
    slideIndex = 1;
  }
  if (number < 1) {
    slideIndex = manualSliderPics.length;
  }
  for (i = 0; i < manualSliderPics.length; i++) {
    manualSliderPics[i].style.display = "none";
  }

  manualSliderPics[slideIndex - 1].style.display = "block";
}
slideShower(1);
