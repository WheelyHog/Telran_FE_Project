
const gratitudes_container = document.querySelector('.gratitudes-container');
const slid_track = document.querySelector('.slid_track');
const gratitude_card = document.querySelectorAll('.gratitude_card');

const big_line = document.querySelector('.big_line').offsetWidth;
const short_line = document.querySelector('.short_line');

const btn_Prev = document.querySelector('.btn_Left');
const btn_next = document.querySelector('.btn_Rigth');
// const activeleft = document.querySelector('.activeleft');
// const activeRigth = document.querySelector('.activeRigth');

btn_next.disabled = true; // т.к все срабатывает от натия кнопок, эту ккнопку сделал не активной по умолчанию.


let sliderCounts = 0; // счетчик
const itemscount = gratitude_card.length; // кол-во слайдов // cсейчас 9
const scrollWidth = gratitudes_container.clientWidth - (slid_track.clientWidth / itemscount);
const itemWidth = (slid_track.clientWidth / itemscount);

const lineWidth = (big_line / itemscount);


function sPrev() {
  sliderCounts--;
  slid_track.style.transform += `translateX(${-itemWidth}px)`;
  short_line.style.transform += `translateX(${lineWidth}px)`;
  if (sliderCounts === -(Math.ceil(itemscount / 2) + 1)) {
    btn_Prev.disabled = true;
    btn_Prev.style.backgroundImage = "url('media_about/gratitudes/arrow-left-end.png')";
  } else {
    btn_next.disabled = false;
    btn_Prev.disabled = false;
    btn_next.style.backgroundImage = "url('media_about/gratitudes/arrow-right.png')";
  }
}

function sNext() {
  sliderCounts++;
  btn_next == 0;
  console.log(sliderCounts);
  slid_track.style.transform += `translateX(${itemWidth}px)`;
  short_line.style.transform += `translateX(${-lineWidth}px)`;
  if (sliderCounts == 0) {
    btn_next.disabled = true;
    btn_Prev.disabled = false;
    btn_next.style.backgroundImage = "url('media_about/gratitudes/arrow-right-end.png')";

  } else {
    btn_next.disabled = false;
    btn_Prev.disabled = false;
    btn_Prev.style.backgroundImage = "url('media_about/gratitudes/arrow-left.png')";
  }
}


btn_Prev.addEventListener('click', sPrev);
btn_next.addEventListener('click', sNext);
