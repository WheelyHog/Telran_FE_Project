// ============== MOBILE MENU =====================
const menuBtn = document.querySelector('.menu-btn');
const menuMobileList = document.getElementById('mobile-list');
menuBtn.onclick = () => {
  menuMobileList.classList.toggle('menu-mobile-list-active');
}

function changeState(arrLength, count, btnLeft, btnRight) {
  if (count <= 0) {
    btnLeft.setAttribute('src', 'images/middle-slider/middle-arrow-left-end.png');
  } else if (count >= arrLength - 1) {
    btnRight.setAttribute('src', 'images/middle-slider/middle-arrow-right-end.png');
  } else {
    btnLeft.setAttribute('src', 'images/middle-slider/middle-arrow-left.png');
    btnRight.setAttribute('src', 'images/middle-slider/middle-arrow-right.png');
  }

}

let btnRightBlog = document.querySelector(".right_btn_blog");
let btnLeftBlog = document.querySelector(".left_btn_blog");
let divImg = document.querySelector(".blog_rental_articles");
dx = 400;
position = 0;
frameCount = 0;

btnRightBlog.addEventListener('click', sliderNext);
btnLeftBlog.addEventListener('click', sliderPrev);

function sliderPrev() {
  frameCount--;
  position += dx;
  changeState(8, frameCount, btnLeftBlog, btnRightBlog);

  if (frameCount <= 0) {
    frameCount = 0;
    position = 0;
    btnLeftBlog.setAttribute('src', 'images/middle-slider/middle-arrow-left-end.png');
  }
  divImg.style.transform = `translateX(${position}px)`;
}

function sliderNext() {
  frameCount++;
  position = frameCount * (-dx);
  changeState(8, frameCount, btnLeftBlog, btnRightBlog);

  if (frameCount >= 8) {
    frameCount = 8;
    position = frameCount * (-dx);
    btnRightBlog.setAttribute('src', 'images/middle-slider/middle-arrow-right-end.png');
  }
  divImg.style.transform = `translateX(${position}px)`;
}

