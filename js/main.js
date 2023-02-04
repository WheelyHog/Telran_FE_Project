

// ===================== BANNER SLIDER =====================
const banner = [
  {
    id: 1,
    title: 'Аренда спецтехники Liebherr для любых задач',
    description: 'Мобильные, гусеничные и башенные краны LIEBHERR в аренду для любых задач и грузов. работаем по всей России',
    url: 'url("images/banner-slider/banner-slider-1.png")',
  },
  {
    id: 2,
    title: 'Аренда гусеничного крана Liebherr LR 1750',
    description: 'Гусеничный кран LR 1750 находит свое применение в строительстве электростанций, нефтеперерабатывающих заводов',
    url: 'url("images/banner-slider/banner-slider-2.png")',
  },
  {
    id: 3,
    title: 'Работа спецтехники от Компании Еврокран',
    description: 'Разгрузка и монтаж трансформатора автокраном LIEBHERR LTM1500 г.Туапсе',
    url: 'url("images/banner-slider/banner-slider-3.png")',
  },
  {
    id: 4,
    title: 'Разгрузка и монтаж трансформатора',
    description: 'Разгрузка и монтаж трансформатора ТРДН 80000-110 весом 90т на объекте: НПЗ, г.Туапсе',
    url: 'url("images/banner-slider/banner-slider-4.png")',
  },
]

const bannerBtnLeft = document.querySelector('.banner-left-arrow');
const bannerBtnRight = document.querySelector('.banner-right-arrow');
const bannerSlider = document.querySelector('.banner-slider');
const bannerTitle = document.querySelector('.banner-title');
const bannerText = document.querySelector('.banner-text');
const counter = document.querySelector('.current');

let sliderCount = 0;

bannerBtnLeft.addEventListener('click', sliderPrev);
bannerBtnRight.addEventListener('click', sliderNext);

function sliderPrev() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = 3;
  }
  counter.innerText = `0${sliderCount + 1}`;
  bannerSlider.style.backgroundImage = banner[sliderCount].url;
  bannerTitle.innerHTML = banner[sliderCount].title;
  bannerText.innerHTML = banner[sliderCount].description;
}

function sliderNext() {
  sliderCount++;
  if (sliderCount > 3) {
    sliderCount = 0;
  }
  counter.innerText = `0${sliderCount + 1}`;
  bannerSlider.style.backgroundImage = banner[sliderCount].url;
  bannerTitle.innerHTML = banner[sliderCount].title;
  bannerText.innerHTML = banner[sliderCount].description;
}

// =============== MIDDLE SLIDER =====================
const middle = [
  {
    id: 1,
    title: 'Гусеничные краны',
    description: 'Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.',
    url: 'images/middle-slider/middle-1.png',
  },
  {
    id: 2,
    title: 'Мобильные краны',
    description: 'Аренда мобильного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.',
    url: 'images/middle-slider/middle-2.png',
  },
  {
    id: 3,
    title: 'Низкорамные краны',
    description: 'Аренда низкорамного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.',
    url: 'images/middle-slider/middle-3.png',
  },
  {
    id: 4,
    title: 'Модульные платформы',
    description: 'Аренда мобильной платформы – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.',
    url: 'images/middle-slider/middle-4.png',
  },
]


const middleBtnLeft = document.querySelector('.middle-left-link');
const middleImgLeft = document.querySelector('.middle-left-arrow')
const middleBtnRight = document.querySelector('.middle-right-link');
const middleImgRight = document.querySelector('.middle-right-arrow')
const middleSlider = document.querySelector('.middle-slider-img');
const pagIndicator = document.querySelector('.pagination-indicator');

const middleTitle = document.querySelector('.middle-descr-title');
const middleText = document.querySelector('.middle-descr-text');

sliderCount1 = 0;

middleBtnLeft.onclick = () =>{
  sliderCount1--;
  if (sliderCount1 <= 0) {
    sliderCount1 = 0;
    middleImgLeft.setAttribute('src', 'images/middle-slider/middle-arrow-left-end.png');
    middleImgRight.setAttribute('src', 'images/middle-slider/middle-arrow-right.png');
    pagIndicator.style.transform = `translateX(${100*sliderCount1}%)`;
  } else {
    middleImgRight.setAttribute('src', 'images/middle-slider/middle-arrow-right.png')
    pagIndicator.style.transform = `translateX(${100*sliderCount1}%)`;
  }
  middleSlider.setAttribute('src', middle[sliderCount1].url);
  middleTitle.innerHTML = middle[sliderCount1].title;
  middleText.innerHTML = middle[sliderCount1].description;
}

middleBtnRight.onclick = () =>{
  sliderCount1++;
  if (sliderCount1 >= 3) {
    sliderCount1 = 3;
    middleImgLeft.setAttribute('src', 'images/middle-slider/middle-arrow-left.png');
    middleImgRight.setAttribute('src', 'images/middle-slider/middle-arrow-right-end.png');
    pagIndicator.style.transform = `translateX(${100*sliderCount1}%)`;
  } else {
    middleImgLeft.setAttribute('src', 'images/middle-slider/middle-arrow-left.png');
    pagIndicator.style.transform = `translateX(${100*sliderCount1}%)`;

  }
  middleSlider.setAttribute('src', middle[sliderCount1].url);
  middleTitle.innerHTML = middle[sliderCount1].title;
  middleText.innerHTML = middle[sliderCount1].description;
}

// ========================== PROJECTS SLIDER =======================

const projects = [
  {
    id: 1,
    title: 'Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750',
    location: "Калужская обл., Дзержинский район, пос. Полотняный завод",
    description: 'Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.',
    url: 'images/projects/project-1.png',
    icon: 'images/projects/project-1b.png',
    active: 'images/projects/project-1a.png',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    location: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum illum reiciendis, eligendi dignissimos amet quaerat inventore autem dolor laboriosam',
    url: 'images/projects/project-2.png',
    icon: 'images/projects/project-2b.png',
    active: 'images/projects/project-2a.png',
  },
  {
    id: 3,
    title: 'Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750',
    location: "Voluptatum illum reiciendis, eligendi dignissimos amet quaerat inventore autem dolor",
    description: 'Аренда низкорамного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.',
    url: 'images/projects/project-3.png',
    icon: 'images/projects/project-3b.png',
    active: 'images/projects/project-3a.png',
  },
  {
    id: 4,
    title: 'Libero dolores magnam quos impedit est unde et mollitia sapiente odit.',
    location: "Inventore autem dolor laboriosam libero dolores magnam quos impedit est unde et mollitia sapiente odit.",
    description: 'Аренда мобильной платформы – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.',
    url: 'images/projects/project-4.png',
    icon: 'images/projects/project-4b.png',
    active: 'images/projects/project-4a.png',
  },
  {
    id: 5,
    title: 'Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750',
    location: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum illum reiciendis.",
    description: 'Аренда гусеничного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.',
    url: 'images/projects/project-5.png',
    icon: 'images/projects/project-5b.png',
    active: 'images/projects/project-5a.png',
  },
  {
    id: 6,
    title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    location: "Калужская обл., Дзержинский район, пос. Полотняный завод",
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum illum reiciendis, eligendi dignissimos amet quaerat inventore autem dolor laboriosam',
    url: 'images/projects/project-6.png',
    icon: 'images/projects/project-6b.png',
    active: 'images/projects/project-6a.png',
  },
  {
    id: 7,
    title: 'Монтаж вакуумных колонн LIEBHERR LR1300 и LIEBHERR LR1750',
    location: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    description: 'Аренда низкорамного крана – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.',
    url: 'images/projects/project-7.png',
    icon: 'images/projects/project-7b.png',
    active: 'images/projects/project-7a.png',
  },
  {
    id: 8,
    title: 'Libero dolores magnam quos impedit est unde et mollitia sapiente odit.',
    location: "eligendi dignissimos amet quaerat inventore autem dolor laboriosam libero dolores magnam quos impedit",
    description: 'Аренда мобильной платформы – актуальная услуга для многих строительных площадок. Использование спецтехники существенно упрощает погрузку - выгрузку материалов, оптимизирует рабочий процесс.',
    url: 'images/projects/project-8.png',
    icon: 'images/projects/project-8b.png',
    active: 'images/projects/project-8a.png',
  },
]

const projectSlider = document.querySelector('.projects-slider-img');
const projectTitle = document.querySelector('.projects-title');
const projectLocation = document.querySelector('.projects-location');
const projectText = document.querySelector('.projects-text');
const projectIconList = document.querySelectorAll('.project-img');

const projectBtnRight = document.querySelector('.projects-next');
const projectBtnLeft = document.querySelector('.projects-prev');

let projectSliderCount = 0;

projectBtnRight.onclick = () => {
projectSliderCount++;
changeState(projects.length, projectSliderCount, projectBtnLeft, projectBtnRight);
if (projectSliderCount >= projects.length-1){
  projectSliderCount = projects.length - 1;
} 

projectSlider.setAttribute('src', projects[projectSliderCount].url);
projectTitle.innerHTML = projects[projectSliderCount].title;
projectText.innerHTML = projects[projectSliderCount].description;
projectLocation.innerHTML = projects[projectSliderCount].location;

for (let i =0; i < projectIconList.length; i++){
  if (projectIconList[i].classList.contains('project-active')) {
    projectIconList[i].classList.remove('project-active');
    projectIconList[i].setAttribute('src', projects[i].icon);
  }
}
projectIconList[projectSliderCount].classList.add('project-active');
projectIconList[projectSliderCount].setAttribute('src', projects[projectSliderCount].active);
}


projectBtnLeft.onclick = () => {
projectSliderCount--;
changeState(projects.length, projectSliderCount, projectBtnLeft, projectBtnRight);
if (projectSliderCount <= 0){
  projectSliderCount = 0;
} 

projectSlider.setAttribute('src', projects[projectSliderCount].url);
projectTitle.innerHTML = projects[projectSliderCount].title;
projectText.innerHTML = projects[projectSliderCount].description;
projectLocation.innerHTML = projects[projectSliderCount].location;

for (let i =0; i < projectIconList.length; i++){
  if (projectIconList[i].classList.contains('project-active')) {
    projectIconList[i].classList.remove('project-active');
    projectIconList[i].setAttribute('src', projects[i].icon);
  }
}
projectIconList[projectSliderCount].classList.add('project-active');
projectIconList[projectSliderCount].setAttribute('src', projects[projectSliderCount].active);
}

function changeState(arrLength, count, btnLeft, btnRight){
  if (count <= 0){
    btnLeft.setAttribute('src', 'images/middle-slider/middle-arrow-left-end.png');
  } else if (count >= arrLength-1) {
    btnRight.setAttribute('src', 'images/middle-slider/middle-arrow-right-end.png');
  } else {
    btnLeft.setAttribute('src', 'images/middle-slider/middle-arrow-left.png');
    btnRight.setAttribute('src', 'images/middle-slider/middle-arrow-right.png');
  }

}

// ======================== CATALOG SLIDER ==========================

const catalogBtnRight = document.querySelector('.catalog-next');
const catalogBtnLeft = document.querySelector('.catalog-prev');
const sliderVisible = document.querySelector('.catalog-slider');
const indicator = document.querySelector('.catalog-indicator');

let frameCount = 0;
let position = 0;
let dx = 400;

catalogBtnRight.onclick = () => {
  frameCount++;
  position = frameCount * (-dx);
  changeState(12, frameCount, catalogBtnLeft, catalogBtnRight);
  
  if (frameCount >= 11){
    frameCount = 11;
    position = frameCount * (-dx);
    catalogBtnRight.setAttribute('src', 'images/middle-slider/middle-arrow-right-end.png');
  }
  sliderVisible.style.transform = `translateX(${position}px)`;
  indicator.style.transform = `translateX(${100+100*frameCount}%)`;
}

catalogBtnLeft.onclick = () => {
  frameCount--;
  position +=dx;
  changeState(12, frameCount, catalogBtnLeft, catalogBtnRight);
  
  if (frameCount <= 0){
    frameCount = 0;
    position = 0;
    catalogBtnLeft.setAttribute('src', 'images/middle-slider/middle-arrow-left-end.png');
  }
  sliderVisible.style.transform = `translateX(${position}px)`;
  indicator.style.transform = `translateX(${100+100*frameCount}%)`;
}