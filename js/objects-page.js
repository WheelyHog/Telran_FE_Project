const objectSlides = [
  {
    url: 'images/objects-page/t-slider-1a.jpg',
    icon: 'images/objects-page/t-slider-1sb.jpg',
    active: 'images/objects-page/t-slider-1sa.jpg'
  },
  {
    url: 'images/objects-page/t-slider-2a.jpg',
    icon: 'images/objects-page/t-slider-2sb.jpg',
    active: 'images/objects-page/t-slider-2sa.jpg'
  },
  {
    url: 'images/objects-page/t-slider-3a.jpg',
    icon: 'images/objects-page/t-slider-3sb.jpg',
    active: 'images/objects-page/t-slider-3sa.jpg'
  },
  {
    url: 'images/objects-page/t-slider-4a.jpg',
    icon: 'images/objects-page/t-slider-4sb.jpg',
    active: 'images/objects-page/t-slider-4sa.jpg'
  },
  {
    url: 'images/objects-page/t-slider-5a.jpg',
    icon: 'images/objects-page/t-slider-5sb.jpg',
    active: 'images/objects-page/t-slider-5sa.jpg'
  },
  {
    url: 'images/objects-page/t-slider-6a.jpg',
    icon: 'images/objects-page/t-slider-6sb.jpg',
    active: 'images/objects-page/t-slider-6sa.jpg'
  }
]

const objectSlider = document.querySelector('.top-slider-image');
const objectIconList = document.querySelectorAll('.img-line-item');

const objectBtnRight = document.querySelector('.objects-next');
const objectBtnLeft = document.querySelector('.objects-prev');


let objectSliderCount = 0;

objectBtnRight.onclick = () => {
  objectSliderCount++;
  changeState(objectSlides.length, objectSliderCount, objectBtnLeft, objectBtnRight);
  if (objectSliderCount >= objectSlides.length - 1) {
    objectSliderCount = objectSlides.length - 1;
  }

  objectSlider.setAttribute('src', objectSlides[objectSliderCount].url);

  for (let i = 0; i < objectIconList.length; i++) {
    if (objectIconList[i].classList.contains('line-item-active')) {
      objectIconList[i].classList.remove('line-item-active');
      objectIconList[i].setAttribute('src', objectSlides[i].icon);
    }
  }
  objectIconList[objectSliderCount].classList.add('line-item-active');
  objectIconList[objectSliderCount].setAttribute('src', objectSlides[objectSliderCount].active);
}


objectBtnLeft.onclick = () => {
  objectSliderCount--;
  changeState(objectSlides.length, objectSliderCount, objectBtnLeft, objectBtnRight);
  if (objectSliderCount <= 0) {
    objectSliderCount = 0;
  }

  objectSlider.setAttribute('src', objectSlides[objectSliderCount].url);

  for (let i = 0; i < objectIconList.length; i++) {
    if (objectIconList[i].classList.contains('line-item-active')) {
      objectIconList[i].classList.remove('line-item-active');
      objectIconList[i].setAttribute('src', objectSlides[i].icon);
    }
  }
  objectIconList[objectSliderCount].classList.add('line-item-active');
  objectIconList[objectSliderCount].setAttribute('src', objectSlides[objectSliderCount].active);
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

// ============================ OTHER-SLIDER ======================

const otherBtnRight = document.querySelector('.other-next');
const otherBtnLeft = document.querySelector('.other-prev');
const otherVisible = document.querySelector('.objects-gallery');

let frameCount = 0;
let position = 0;
let dx = 400;

otherBtnRight.onclick = () => {
  frameCount++;
  position = frameCount * (-dx);
  changeState(6, frameCount, otherBtnLeft, otherBtnRight);
  
  if (frameCount >= 5){
    frameCount = 5;
    position = frameCount * (-dx);
    otherBtnRight.setAttribute('src', 'images/middle-slider/middle-arrow-right-end.png');
  }
  otherVisible.style.transform = `translateX(${position}px)`;
  
}

otherBtnLeft.onclick = () => {
  frameCount--;
  position +=dx;
  changeState(6, frameCount, otherBtnLeft, otherBtnRight);
  
  if (frameCount <= 0){
    frameCount = 0;
    position = 0;
    otherBtnLeft.setAttribute('src', 'images/middle-slider/middle-arrow-left-end.png');
  }
  otherVisible.style.transform = `translateX(${position}px)`;
  
}