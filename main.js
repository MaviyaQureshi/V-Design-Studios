search = document.getElementById("search");
header = document.getElementById("header");
body = document.getElementById("body");
user = document.getElementById("user");
info = document.getElementById("info");
info2 = document.getElementById("info2");
info3 = document.getElementById("info3");
shadow = document.getElementById("shadow");
checkbox = document.getElementById("toggle_checkbox");

function myFunction() {
  search.style.visibility = "visible";
}
function myFunction2() {
  search.style.visibility = "hidden";
}

function dark_mode() {
  if (checkbox.checked == 1) {
    header.style.backgroundColor = "#222529";
    header.style.color = "white";
    body.style.backgroundColor = "#000000";
    body.style.color = "white";
    info.style.color = "white";
    info2.style.color = "white";
    info3.style.color = "white";
    user.style.backgroundColor = "#222529";
    shadow.style.backgroundColor = "white";
    shadow.style.boxShadow = "0px 0px 0px #000000";
    shadow2.style.backgroundColor = "white";
    shadow2.style.boxShadow = "0px 0px 0px #000000";
  }
  if (checkbox.checked == 0) {
    header.style.backgroundColor = "#ebebeb";
    header.style.color = "black";
    body.style.backgroundColor = "#fff";
    body.style.color = "black";
    info.style.color = "black";
    info2.style.color = "black";
    info3.style.color = "black";
    user.style.backgroundColor = "white";
    shadow.style.backgroundColor = "white";
    shadow.style.boxShadow = "5px 5px 2px #c0c0c0";
    shadow2.style.backgroundColor = "white";
    shadow2.style.boxShadow = "5px 5px 2px #c0c0c0";
  }
}

function display() {
  user.style.visibility = "visible";
}

function disappear() {
  user.style.visibility = "hidden";
}

//Swiper
var swiper = new Swiper(".about-us", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
