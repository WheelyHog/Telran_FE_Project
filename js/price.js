// ============== MOBILE MENU =====================
const menuBtn = document.querySelector('.menu-btn');
const menuMobileList = document.getElementById('mobile-list');
menuBtn.onclick = () => {
  menuMobileList.classList.toggle('menu-mobile-list-active');
}