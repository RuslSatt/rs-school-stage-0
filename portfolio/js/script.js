'use strict';

//-------menu-burger--------------------//

const burgerIcon = document.querySelector('.header__icon');
const menuNav = document.querySelector('.header__nav');
const logoHeader = document.querySelector('.header__logo');
if (burgerIcon) {
   burgerIcon.addEventListener('click', function (e) {

      burgerIcon.classList.toggle('active');
      menuNav.classList.toggle('active');
      document.body.classList.toggle('lock');
      logoHeader.classList.toggle('back');
   })
}

//-----------------------navigation---------------------------------------------//

const headerLinks = document.querySelectorAll('.header__nav-link[data-goto]');
if (headerLinks.length > 0) {
   headerLinks.forEach(headerLink => {
      headerLink.addEventListener('click', headerLinkClick);
   });

   function headerLinkClick(e) {
      const headerLink = e.target;
      if (headerLink.dataset.goto && document.querySelector(headerLink.dataset.goto)) {
         const gotoBlock = document.querySelector(headerLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

         if (burgerIcon.classList.contains('active')) {
            burgerIcon.classList.remove('active');
            menuNav.classList.remove('active');
            document.body.classList.remove('lock');
            logoHeader.classList.remove('back');
         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

let resultTask = '1. +48 \n2. +15 \n3. +22';
console.log(resultTask);

//-----------------------filter---------------------------------------------//


const portfolioButtons = document.querySelector('.portfolio__buttons');

function changeImage(event) {
   if (event.target.closest('.portfolio__btn-link')) {
      const filter = event.target.dataset.filter;
      const allImages = document.querySelectorAll('.portfolio__image');
      allImages.forEach((imageFor, index) => imageFor.src = `./assets/img/${filter}/${filter + '_' + (index + 1)}.jpg`);
      const allLinks = document.querySelectorAll('.portfolio__item');
      allLinks.forEach((imageFor, index) => imageFor.href = `./assets/img/${filter}/${filter + '_' + (index + 1)}.jpg`);
   }
}

portfolioButtons.addEventListener('click', changeImage);

// -------------------------------active buttons ---------------------------- //
const activeButtons = document.querySelectorAll('.portfolio__btn-link');
if (activeButtons.length > 0) {
   activeButtons.forEach(whileButton => {
      whileButton.addEventListener('click', function (e) {
         for (const i of activeButtons) {
            i.classList.remove('active');
         }
         whileButton.classList.add('active');
      })
   })
}

const activeButtonsLang = document.querySelectorAll('.header__lang');
if (activeButtons.length > 0) {
   activeButtonsLang.forEach(whileButtonLang => {
      whileButtonLang.addEventListener('click', function (e) {
         for (const i of activeButtonsLang) {
            i.classList.remove('active');
         }
         whileButtonLang.classList.add('active');
      })
   })
}


// ---------- change theme ---------------- //
const skills = document.querySelector('.skills');
const port = document.querySelector('.portfolio');
const video = document.querySelector('.video');
const price = document.querySelector('.price');

const sectionTheme = [
   skills,
   port,
   video,
   price,
];

const skillsTitle = document.querySelector('.skills__title');
const portTitle = document.querySelector('.portfolio__title');
const videoTitle = document.querySelector('.video__title');
const priceTitle = document.querySelector('.price__title');

const titleTheme = [
   skillsTitle,
   portTitle,
   videoTitle,
   priceTitle,
]


const headerIcon = document.querySelector('.header__icon-change');
const elementLangWhite = document.querySelector('.header__svg-icon-white');
const elementLangDark = document.querySelector('.header__svg-icon-dark');

function changeTheme(event) {

   elementLangWhite.classList.toggle('white-icon');
   elementLangDark.classList.toggle('dark-icon');

   sectionTheme.forEach(eachElementTheme => {
      eachElementTheme.classList.toggle('light-theme');
   });

   titleTheme.forEach(titleThemeFor => {
      titleThemeFor.classList.toggle('title-theme');
   });

   const button = document.querySelectorAll('.portfolio__btn-link');
   button.forEach(buttons => {
      buttons.classList.toggle('light-theme-btn')
   });
}

headerIcon.addEventListener('click', changeTheme);



