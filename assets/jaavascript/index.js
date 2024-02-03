const navbarToggle = document.querySelector(".prev");
const navbarToggle1 = document.querySelector(".next");
const navbarToggle3 = document.querySelector(".prev1");
const navbarToggle4 = document.querySelector(".next1");
const navbarToggle5 = document.querySelector(".prev2");
const navbarToggle6 = document.querySelector(".next2");
const navbarLinks = document.querySelector(".s1");
const navbarLinks2 = document.querySelector(".s2");
const navbarLinks3 = document.querySelector(".s3");
const navbarLinks4 = document.querySelector(".s4");
const navbarLinks5 = document.querySelector(".s5");
const navbarLinks6 = document.querySelector(".s6");
const navbarLinks7 = document.querySelector(".s7");
const navbarLinks8 = document.querySelector(".s8");
const navbarLinks9 = document.querySelector(".s9");
const navbarLinks10 = document.querySelector(".s10");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.add("active23");
  navbarLinks2.classList.add("active23");
  navbarLinks3.classList.add("active23");
  navbarLinks.classList.remove("active24");
  navbarLinks2.classList.remove("active24");
  navbarLinks3.classList.remove("active24");
});

navbarToggle1.addEventListener("click", () => {
  navbarLinks.classList.remove("active23");
  navbarLinks2.classList.remove("active23");
  navbarLinks3.classList.remove("active23");
  navbarLinks.classList.add("active24");
  navbarLinks2.classList.add("active24");
  navbarLinks3.classList.add("active24");
});

navbarToggle3.addEventListener("click", () => {
  navbarLinks4.classList.add("active23");
  navbarLinks5.classList.add("active23");
  navbarLinks6.classList.add("active23");
  navbarLinks7.classList.add("active23");
  navbarLinks4.classList.remove("active24");
  navbarLinks5.classList.remove("active24");
  navbarLinks6.classList.remove("active24");
  navbarLinks7.classList.remove("active24");
});

navbarToggle4.addEventListener("click", () => {
  navbarLinks4.classList.remove("active23");
  navbarLinks5.classList.remove("active23");
  navbarLinks6.classList.remove("active23");
  navbarLinks7.classList.remove("active23");
  navbarLinks4.classList.add("active24");
  navbarLinks5.classList.add("active24");
  navbarLinks6.classList.add("active24");
  navbarLinks7.classList.add("active24");
});


navbarToggle5.addEventListener("click", () => {
  navbarLinks8.classList.add("active23");
  navbarLinks9.classList.add("active23");
  navbarLinks10.classList.add("active23");
  navbarLinks8.classList.remove("active24");
  navbarLinks9.classList.remove("active24");
  navbarLinks10.classList.remove("active24");
});

navbarToggle6.addEventListener("click", () => {
  navbarLinks8.classList.remove("active23");
  navbarLinks9.classList.remove("active23");
  navbarLinks10.classList.remove("active23");
  navbarLinks8.classList.add("active24");
  navbarLinks9.classList.add("active24");
  navbarLinks10.classList.add("active24");
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



