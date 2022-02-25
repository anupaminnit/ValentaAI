let slidePosition = [0, 0, 0, 0, 0, 0];

function fun(e) {
  let id = e.getAttribute("id");
  moveToNextSlide(id);
}

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

// For Refernece

// window.addEventListener("click", function (event) {
//   moveToNextSlide(event.target.id);
// });

// var elements = document.getElementsByClassName("button");

// var myFunction = function () {
//   var attribute = this.getAttribute("id");
//   console.log(attribute);
// };

// for (var i = 0; i < elements.length; i++) {
//   elements[i].addEventListener("click", myFunction(this), false);
// }
