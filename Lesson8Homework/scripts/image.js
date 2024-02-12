let currentWidth = 500;
function buttonZoomIn() {
  let bcImage = document.querySelector(".bcImage");
  currentWidth = currentWidth + 50;
  bcImage.style.width = currentWidth + "px";
}

function buttonZoomOut() {
  let bcImage = document.querySelector(".bcImage");
  currentWidth = currentWidth - 50;
  bcImage.style.width = currentWidth + "px";
}

