const menuLinks =document.querySelector('.navbar__menu');
const menu =document.querySelector('#mobile-menu');
const navLogo = document.querySelector('#navbar__logo');

menu.addEventListener('click', ()=>{
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const highlightMenu =()=>{
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos =  window.scrollY;
  //console.log(window.scrollX);


if(window.innerWidth > 960 && scrollPos < 600){
  homeMenu.classList.add('highlight');
  aboutMenu.classList.remove('highlight');

  return;
  
}else if(window.innerWidth > 960 && scrollPos < 1675){
  aboutMenu.classList.add('highlight');
  homeMenu.classList.remove('highlight');
  servicesMenu.classList.remove('highlight');
  return;
} else if (window.innerWidth > 960 && scrollPos < 2900) {
 servicesMenu.classList.add('highlight');
 aboutMenu.classList.remove('highlight');
 return;
}

if((elem && window.innerWidth < 960 && scrollPos < 600 ) || elem ){
  elem.classList.remove('highlight');
}};

window.addEventListener('scroll',highlightMenu);
window.addEventListener('click',highlightMenu);

const hideMobileMenu = ()=>{
  const menuBars = document.querySelector('.is-active');
  if(window.innerWidth <= 960 && menuBars){
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);