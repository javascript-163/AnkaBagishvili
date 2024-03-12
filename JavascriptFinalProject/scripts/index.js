// Slider
let sliderIndex = 0;
autoslider();
function autoslider() {
  let i;
  let sliders = document.getElementsByClassName("sliderPicture");

  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }
  sliderIndex = sliderIndex + 1;
  if (sliderIndex > sliders.length) {
    sliderIndex = 1;
  }
  sliders[sliderIndex - 1].style.display = "block";
  setTimeout(autoslider, 2000);
}

// Cursor
