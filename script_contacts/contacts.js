let callBtn = document.querySelectorAll('.call-btn');
let modalCall = document.querySelector('.order');
let closeModalBtn = document.querySelector('.order-close');
let submitModalBtn = document.querySelector('.order-btn');
let modalReport = document.querySelector('.order-report');
let returnReportBtn = document.querySelector('.report-return');
let reportCloseBtn = document.querySelector('.report-close');


// callBtn.addEventListener('click', showModal);

for(let i = 0; i < callBtn.length; i++){
    callBtn[i].addEventListener('click', showModal);
}


closeModalBtn.addEventListener('click', closeModal);
submitModalBtn.addEventListener('click', showReport);
returnReportBtn.addEventListener('click', closeReport);
reportCloseBtn.addEventListener('click', closeReport);

function showModal(){
    modalCall.style.display = 'block';
    modalCall.style.top = `${pageYOffset + 100}px`; 
    modalCall.style.left = `${(window.outerWidth - 480) / 2 - 120 }px`;
    console.log(window.pageYOffset);
    console.log(window.pageXOffset);

}

function closeModal(){
    modalCall.style.display = 'none';
}

function showReport(){
    closeModal();
 modalReport.style.display = 'block';
 modalReport.style.top = `${pageYOffset + 100}px`; 
 modalReport.style.left = `${(window.outerWidth - 480) / 2 - 120 }px`;
}

function closeReport(){
    modalReport.style.display = 'none';
}