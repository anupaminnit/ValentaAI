let slidePosition = [0, 0, 0, 0, 0, 0];

// const slides1 = document.getElementsByClassName("carousel_item");
// const slides2 = document.getElementsByClassName("carousel_item2");
// const totalSlides1 = slides1.length;
// const totalSlides2 = slides1.length;]

window.addEventListener("click", function (event) {
  moveToNextSlide(event.target.id);
});

// document.getElementsByClassName('button').onclick = function() {
//    for (var i = 0, n = divstopop.length; i < n; ++i) {
//     // get id property from element and set as innerHTML
//     divstopop[i].innerHTML = divstopop[i].id;
// }
// }

// document
//   .getElementById("carousel_button--next")
//   .addEventListener("click", function () {
//     moveToNextSlide();
//   });

// document
//   .getElementById("carousel_button--prev")
//   .addEventListener("click", function () {
//     moveToPrevSlide();
//   });

function updateSlidePosition(slides, id) {
  for (let slide of slides) {
    slide.classList.remove("carousel_item--visible");
    slide.classList.add("carousel_item--hidden");
  }
  slides[slidePosition[id - 1]].classList.add("carousel_item--visible");
}

function moveToNextSlide(id) {
  const class_name = "carousel_item" + id;
  const slides = document.getElementsByClassName(class_name);
  const totalSlides = slides.length;
  if (slidePosition[id - 1] === totalSlides - 1) {
    slidePosition[id - 1] = 0;
  } else {
    slidePosition[id - 1]++;
  }
  updateSlidePosition(slides, id);
  console.log("Hello next this is postion ", slidePosition);
}

function moveToNextSlide(id) {
  const class_name = "carousel_item" + id;
  const slides = document.getElementsByClassName(class_name);
  const totalSlides = slides.length;
  if (slidePosition[id - 1] === 0) {
    slidePosition[id - 1] = totalSlides - 1;
  } else {
    slidePosition[id - 1]--;
  }
  updateSlidePosition(slides, id);
  console.log("Hello next this is postion ", slidePosition);
}
