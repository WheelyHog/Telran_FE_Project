const header_btn = document.querySelector('.header-btn');
const footer_btn = document.querySelector('.footer-btn');

const btnClose = document.querySelector('.btnCloseModal');
const btn_submit_modal = document.querySelector('.btn_submit_modal');
const modal_position = document.querySelector('.modal_position');
const input_agree = document.querySelector('.agree');

const actives = document.querySelector('.actives');
const active = document.querySelector('.active');

const btnCloseResult = document.querySelector('.btnCloseResult');
const btn_return = document.querySelector('.btn_return');

setTimeout("actives.classList.remove('actives')", 3000);


function closeWindow(){
    modal_position.classList.add('actives');
};

function closeWindow(){
    modal_position.classList.add('actives');
}
function openWindowFormResult(){
    modal_position.classList.add('actives');
    active.classList.remove('active');   
}

function closeResult_form(){
    active.classList.add('active');   
}

function openMadalWindow(){
    actives.classList.remove('actives');
}

btnClose.addEventListener('click', closeWindow);
btn_submit_modal.addEventListener('click', openWindowFormResult);
btnCloseResult.addEventListener('click', closeResult_form);
btn_return.addEventListener('click', closeResult_form);

header_btn.addEventListener('click', openMadalWindow);
footer_btn.addEventListener('click', openMadalWindow);

