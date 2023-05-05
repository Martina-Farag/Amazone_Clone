// **************************************  Slider Section  ***********************

let slideBtnLeft = document.getElementById("prev");
let slideBtnRight = document.getElementById("next");
let imgItem = document.querySelectorAll(".image-item");

let startSlider = 0;

// Right Arrow

slideBtnRight.addEventListener("click", slideRight);
function slideRight() {
  // console.log(startSlider);
  if (startSlider > -700) {
    startSlider -= 100;
  } else {
    startSlider = 0;
  }
  // console.log(startSlider);
  for (element of imgItem) {
    element.style.transform = `translateX(${startSlider}%)`;
  }
}

// Left Arrow

slideBtnLeft.addEventListener("click", slideLeft);
function slideLeft() {
  if (startSlider < 0) {
    startSlider += 100;
  } else {
    startSlider = -700;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}

// ************************************** Automatic Slider  ***********************

function autoSlide() {
  slideLeft();
}

setInterval(autoSlide, 5000);

// ************************************** Products of the day  ***********************

document.querySelector(".r-btn").addEventListener("click", function (event) {
  document.querySelector(".product-slide").scrollLeft += 1100;
  event.preventDefault();
});

document.querySelector(".l-btn").addEventListener("click", function (event) {
  document.querySelector(".product-slide").scrollLeft -= 1100;
  event.preventDefault();
});

document
  .querySelector("#today_deal_btn_next")
  .addEventListener("click", function (event) {
    document.querySelector(".today_deals_product_list").scrollLeft += 1100;
    event.preventDefault();
  });

document
  .querySelector("#today_deal_btn_prev")
  .addEventListener("click", function (event) {
    document.querySelector(".today_deals_product_list").scrollLeft -= 1100;
    event.preventDefault();
  });

// ************************************** Back To Top  ***********************

const backtop = document.querySelector(".backtop");

backtop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

// ************************************** A-Side  ***********************

const sideBtn = document.querySelector(".second-1");
const sideBar = document.querySelector("aside");
const closeSideBar = document.querySelector(".fa-xmark");
const overLay = document.querySelector(".over-lay");
const bodyOverFlow = document.querySelector("body");

sideBtn.addEventListener("click", () => {
  sideBar.classList.add("active");
  closeSideBar.classList.add("active");
  overLay.classList.add("active");
  bodyOverFlow.classList.add("active");
});

closeSideBar.addEventListener("click", () => {
  sideBar.classList.remove("active");
  closeSideBar.classList.remove("active");
  overLay.classList.remove("active");
  bodyOverFlow.classList.remove("active");
});

// ************************************** Sign Table  ***********************

const signBtn = document.querySelector(".sign");
const signTable = document.querySelector(".sign-box");

signBtn.addEventListener("click", () => {
  signTable.classList.toggle("active");
  signBtn.classList.toggle("active");
  overLay.classList.toggle("active");
  bodyOverFlow.classList.toggle("active");
});
