'use strict';

//-------menu-burger--------------------//
const burgerIconTheme = document.querySelectorAll('[data-theme]');
const burgerIcon = document.querySelector('.header__icon');
const menuNav = document.querySelector('.header__nav');
const logoHeader = document.querySelector('.header__logo');
if (burgerIcon) {
   burgerIcon.addEventListener('click', function (e) {
      if (elementLangWhite.classList.contains('white-icon')) {
         burgerIconTheme.forEach(burgerIconThemeFor => {
            burgerIconThemeFor.classList.toggle('elem-icon');
         })
      }
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

// Todo --------------- Cash images ------------------ //
const seasons = ['winter', 'spring', 'summer', 'autumn'];


function preloadSummerImages() {
   for (let i = 1; i <= 6; i++) {
      seasons.forEach(seasonsFor => {
         const filterSeason = seasonsFor;
         const img = new Image();
         img.src = `./assets/img/${filterSeason}/${filterSeason + '_' + i}.jpg`;
      })
   }
}
preloadSummerImages();
// Todo --------------- Caсhe images ------------------ //

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

const headerLinksTheme = document.querySelectorAll('.header__nav-link')
const headerNav = document.querySelector('.header__nav');
const headerIcon = document.querySelector('.header__icon-change');
const button = document.querySelectorAll('.portfolio__btn-link');
const elementLangWhite = document.querySelector('.header__svg-icon-white');
const elementLangDark = document.querySelector('.header__svg-icon-dark');

function changeTheme(event) {

   elementLangWhite.classList.toggle('white-icon');
   elementLangDark.classList.toggle('dark-icon');

   headerNav.classList.toggle('change');
   headerLinksTheme.forEach(linksTheme => {
      linksTheme.classList.toggle('theme-list')
   });

   sectionTheme.forEach(eachElementTheme => {
      eachElementTheme.classList.toggle('light-theme');
   });

   titleTheme.forEach(titleThemeFor => {
      titleThemeFor.classList.toggle('title-theme');
   });


   button.forEach(buttons => {
      buttons.classList.toggle('light-theme-btn')
   });
}

headerIcon.addEventListener('click', changeTheme);



// ----------------------------------- translate page ---------------------------------- //

import i18Obj from './translate.js';

const buttonsLangs = document.querySelector('.header__buttons-lang');

function showButtons(event) {
   if (event.target.closest('[data-lang = ru]')) {

      const titleStyleSkills = document.querySelector('[data-style = skills]');
      titleStyleSkills.classList.add ('title-lang');
      const titleStylePort = document.querySelector('[data-style = portfolio]');
      titleStylePort.classList.add ('title-lang');



      function getTranslate(en) {
         const translateData = document.querySelectorAll('[data-i18]');
         translateData.forEach(translateDataFor => {
            en = translateDataFor.dataset.i18;
            for (let key in i18Obj.ru) {
               const keyObj = key;
               if (en === keyObj) {
                  translateDataFor.textContent = i18Obj.ru[en];
               }
            }
         })
      }
      getTranslate();
   }
   if (event.target.closest('[data-lang = en]')) {

      const titleStyleSkills = document.querySelector('[data-style = skills]');
      titleStyleSkills.classList.remove ('title-lang');
      const titleStylePort = document.querySelector('[data-style = portfolio]');
      titleStylePort.classList.remove ('title-lang');

      function getTranslate(ru) {
         const translateData = document.querySelectorAll('[data-i18]');
         translateData.forEach(translateDataFor => {
            ru = translateDataFor.dataset.i18;
            for (let key in i18Obj.en) {
               const keyObj = key;
               if (ru === keyObj) {
                  translateDataFor.textContent = i18Obj.en[ru];
               }
            }
         })
      }
      getTranslate();
   }
}

buttonsLangs.addEventListener('click', showButtons);

// ----------------------------------- translate page ---------------------------------- //