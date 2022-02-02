'use strict';

//-------menu-burger--------------------//
const burgerIconTheme = document.querySelectorAll('[data-theme]');
const burgerIcon = document.querySelector('.header__icon');
const menuNav = document.querySelector('.header__nav');
const logoHeader = document.querySelector('.header__logo');
if (burgerIcon) {
   burgerIcon.addEventListener('click', function (e) {
      // if (elementLangWhite.classList.contains('white-icon')) {
      //    burgerIconTheme.forEach(burgerIconThemeFor => {
      //       burgerIconThemeFor.classList.toggle('elem-icon');
      //    })
      // }
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
            // burgerIconTheme.forEach(burgerIconThemeFor => {
            //    burgerIconThemeFor.classList.remove('elem-icon');
            // })
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

//-----------------------filter---------------------------------------------//


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

// -------------------------------active buttons ---------------------------- //


// ---------------------------- change theme -------------------------------- //

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


const headerNav = document.querySelector('.header__nav');
const headerIcon = document.querySelector('.header__icon-change');
const button = document.querySelectorAll('.portfolio__btn-link');
const elementLangWhite = document.querySelector('.header__svg-icon-white');
const elementLangDark = document.querySelector('.header__svg-icon-dark');
const elementWrapperThemeColor = document.querySelector('.wrapper')
const elementSvgThemeColor = document.querySelectorAll('svg');
const elementLinkThemeHover = document.querySelectorAll('[data-link = linkTheme]');
const contactsTitleThemeColor = document.querySelector('.contacts__title')
const formThemeBack = document.querySelectorAll('.area');
const buttonThemeBackColor = document.querySelectorAll('[data-btn = btn]');
const headerIconDarkAndWhite = document.querySelector('.header__icon-change')
const buttonsLangTheme = document.querySelectorAll('.header__lang');
const heroTitleThemeMin = document.querySelector('.hero__subtitle')
const videoPlayer = document.querySelector('.video__icon');


function changeTheme(event) {
   videoPlayer.classList.toggle('button-lang')
   heroTitleThemeMin.classList.toggle('sub-theme')

   buttonsLangTheme.forEach(buttonLangThemeEach => {
      buttonLangThemeEach.classList.toggle('button-lang');
   })

   headerIconDarkAndWhite.classList.toggle('light-theme-transofrm');
   buttonThemeBackColor.forEach(buttonThemeBackColorEach => {
      buttonThemeBackColorEach.classList.toggle('button-theme')
   })
   formThemeBack.forEach(formTheme => {
      formTheme.classList.toggle('area-theme');
   })
   contactsTitleThemeColor.classList.toggle('light-theme-color')
   elementLinkThemeHover.forEach(elementLinkTheme => {
      elementLinkTheme.classList.toggle('theme-list');
   })

   elementSvgThemeColor.forEach(elementSvgTheme => {
      elementSvgTheme.classList.toggle('light-theme-color');
      elementSvgTheme.classList.toggle('light-theme-transofrm-svg')
   })
   elementWrapperThemeColor.classList.toggle('light-theme-color');

   //?-------------------- images-screen-and-contacts ------------------------- //

   const mainScreenTheme = document.querySelector('.hero__screen');
   const contactsScreenTheme = document.querySelector('.contacts__screen')
   if (document.body.classList.contains('body-back')) {
      mainScreenTheme.src = 'assets/img/main-screen.jpg';
      contactsScreenTheme.src = "assets/img/second-screen-near-with-footer.jpg"
   } else {
      contactsScreenTheme.src = "assets/img/second-screen-near-with-footer2.jpg"
      mainScreenTheme.src = 'assets/img/main-screen2.jpg'
   }

   //?-------------------- images-screen-and-contacts ------------------------- //

   document.body.classList.toggle('body-back')
   elementLangWhite.classList.toggle('white-icon');
   elementLangDark.classList.toggle('dark-icon');

   headerNav.classList.toggle('change');


   sectionTheme.forEach(eachElementTheme => {
      eachElementTheme.classList.toggle('light-theme');
   });

   titleTheme.forEach(titleThemeFor => {
      titleThemeFor.classList.toggle('title-theme');
   });


   button.forEach(buttons => {
      buttons.classList.toggle('light-theme-btn')
   });

   burgerIconTheme.forEach(burgerIconThemeFor => {
      burgerIconThemeFor.classList.toggle('elem-icon');
   })
}

headerIcon.addEventListener('click', changeTheme);

// ---------------------------- change theme -------------------------------- //


// ----------------------------------- translate page ---------------------------------- //

import i18Obj from './translate.js';

const buttonLangEn = document.querySelector('[data-lang = ru]');

function getTranslateEn(en) {

   const activeButtonsLang = document.querySelectorAll('.header__lang');
   if (activeButtons.length > 0) {
      activeButtonsLang.forEach(whileButtonLang => {
         for (const i of activeButtonsLang) {
            i.classList.remove('active');
         }
         whileButtonLang.classList.add('active');
      })
   }

   const titleStyleSkills = document.querySelector('[data-style = skills]');
   titleStyleSkills.classList.add('title-lang');
   const titleStylePort = document.querySelector('[data-style = portfolio]');
   titleStylePort.classList.add('title-lang');

   const translateData = document.querySelectorAll('[data-i18]');
   translateData.forEach(translateDataFor => {
      en = translateDataFor.dataset.i18;
      for (let key in i18Obj.ru) {
         const keyObj = key;
         if (en === keyObj) {
            translateDataFor.textContent = i18Obj.ru[en];
         }
         if (translateDataFor.placeholder) {
            translateDataFor.value = '';
            translateDataFor.placeholder = i18Obj.ru[en];
         }
      }
   })
}

buttonLangEn.addEventListener('click', getTranslateEn);

const buttonLangRu = document.querySelector('[data-lang = en]');

function getTranslateRu(ru) {

   const titleStyleSkills = document.querySelector('[data-style = skills]');
   titleStyleSkills.classList.remove('title-lang');
   const titleStylePort = document.querySelector('[data-style = portfolio]');
   titleStylePort.classList.remove('title-lang');


   const translateData = document.querySelectorAll('[data-i18]');
   translateData.forEach(translateDataFor => {
      ru = translateDataFor.dataset.i18;
      for (let key in i18Obj.en) {
         const keyObj = key;
         if (ru === keyObj) {
            translateDataFor.textContent = i18Obj.en[ru];
         }
         if (translateDataFor.placeholder) {
            translateDataFor.value = '';
            translateDataFor.placeholder = i18Obj.en[ru];
         }
      }
   })
}


buttonLangRu.addEventListener('click', getTranslateRu);

// ----------------------------------- translate page ---------------------------------- //



// ?  ------------------------- lOCAL STORAGE -------------------------------------------- //

function setLocalStorage() {
   let theme = 'dark';
   if (document.body.classList.contains('body-back')) {
      theme = 'light';
   }
   localStorage.setItem('theme', theme);
   let lang = 'en';
   const langLocal = document.querySelector('[data-lang = ru]')
   if (langLocal.classList.contains('active')) {
      lang = 'ru';
   }
   localStorage.setItem('lang', lang);
}
window.addEventListener('pagehide', setLocalStorage);

function getLocalStorage() {
   if (localStorage.getItem('theme')) {
      const theme = localStorage.getItem('theme');
      if (theme === 'light') {
         changeTheme(theme);
      }
   }
   if (localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      if (lang === 'ru') {
         getTranslateEn(lang);
      } else {
         getTranslateRu(lang);
      }

   }
}
window.addEventListener('pageshow', getLocalStorage);


export { setLocalStorage, getLocalStorage };
// ?  ------------------------- lOCAL STORAGE -------------------------------------------- //

// ? -------------------------- Custom video --------------------------------------------- //
// ! -------------------------- Get our elements ----------------------------------------- //

const player = document.querySelector('.controls');
const videoMain = document.querySelector('.video__videoplayer');
const playIconMain = document.querySelector('.controls__play-icons');
const volumeIconMain = document.querySelector('.controls__volume-icons');
const playIcon = document.querySelector('.controls__play-icon');
const pauseIcon = document.querySelector('.controls__pause-icon');
const progressBar = document.querySelector('.controls__progress-bar');
const valueVolume = document.querySelector('.controls__volume');
const toggle = document.querySelector('.video__btn-player');
const volumeIcon = document.querySelector('.controls__volume-icon');
const muteIcon = document.querySelector('.controls__mute-icon');
const protgressTimer = document.querySelector('.controls__time');
const protgressTimerMain = document.querySelector('.controls__time-video');
// ! -------------------------- Build out function --------------------------------------- //
valueVolume.style.background = `linear-gradient(to right, rgb(10, 10, 10) 0%, rgb(0, 0, 0) 10%, rgb(246, 211, 101) 0%)`;
progressBar.style.background = `linear-gradient(to right, rgb(10, 10, 10) 0%, rgb(0, 0, 0) 0%, rgb(246, 211, 101) 0%)`;
videoMain.volume = 0.1;

function durationTimeVideo () {
   let durationTime = videoMain.duration;
   let minutesMain = Math.floor (durationTime / 60);
   let secondsMain = Math.floor (durationTime % 60);
   if (minutesMain < 10) {
      minutesMain = '0' + String(minutesMain);
   }
   if (secondsMain < 10) {
      secondsMain = '0' + String(secondsMain);
   }
   protgressTimerMain.innerHTML = `${minutesMain}:${secondsMain}`;
}



function togglePLay() {
   if (videoMain.paused) {
      videoMain.play();
      player.classList.add('view');
      toggle.classList.add('view-player');
      playIcon.classList.add('change-play');
      pauseIcon.classList.add('change-pause');

   } else {
      videoMain.pause();
      toggle.classList.remove('view-player');
      pauseIcon.classList.remove('change-pause');
      playIcon.classList.remove('change-play');
   }
}

function rangeUpdate() {
   videoMain[this.name] = this.value;
}

function rangeProgress() {
   let percent = (videoMain.currentTime / videoMain.duration) * 100;
   progressBar.style.background = `linear-gradient(to right, rgb(10, 10, 10) 0%, rgb(0, 0, 0) ${percent}%, rgb(246, 211, 101) 0%)`;
   

   progressBar.value = percent;
   if (progressBar.value === '100') {
      toggle.classList.remove('view-player');
      pauseIcon.classList.remove('change-pause');
      playIcon.classList.remove('change-play');
   }

   let minutes = Math.floor (videoMain.currentTime / 60);
   let seconds = Math.floor (videoMain.currentTime % 60);
   if (minutes < 10) {
      minutes = '0' + String(minutes);
   }
   if (seconds < 10) {
      seconds = '0' + String(seconds);
   }
   protgressTimer.innerHTML = `${minutes}:${seconds}`;
}


function scrub(e) {
   const scrubTime = (e.offsetX / progressBar.offsetWidth) * videoMain.duration;
   videoMain.currentTime = scrubTime;
}




function volumeIconClick() {
   if (videoMain.muted !== true) {
      videoMain.muted = true;
      valueVolume.value = '0';
      volumeIcon.classList.add('change-volume');
      muteIcon.classList.add('change-mute');
      valueVolume.style.background = `linear-gradient(to right, rgb(10, 10, 10) 0%, rgb(0, 0, 0) 0%, rgb(246, 211, 101) 0%)`;
   } else {
      videoMain.muted = false;
      volumeIcon.classList.remove('change-volume');
      muteIcon.classList.remove('change-mute');
      valueVolume.value = videoMain.volume;
      const volume = valueVolume.value;
      videoMain.volume = volume;
      let volumeScrub = volume * 100;
      valueVolume.style.background = `linear-gradient(to right, rgb(10, 10, 10) 0%, rgb(0, 0, 0) ${volumeScrub}%, rgb(246, 211, 101) 0%)`;
   }
}

function updateVol() {
   let volume = this.value;
   videoMain.volume = volume;
   let volumeScrub = videoMain.volume * 100;
   valueVolume.style.background = `linear-gradient(to right, rgb(10, 10, 10) 0%, rgb(0, 0, 0) ${volumeScrub}%, rgb(246, 211, 101) 0%)`;
   if (videoMain.volume > 0) {
      volumeIcon.classList.remove('change-volume');
      muteIcon.classList.remove('change-mute');
   } else {
      volumeIcon.classList.add('change-volume');
      muteIcon.classList.add('change-mute');
      videoMain.muted = false;
   }
}




// ! -------------------------- Hook up -------------------------------------------------- //

videoMain.addEventListener('click', togglePLay);
toggle.addEventListener('click', togglePLay);
playIconMain.addEventListener('click', togglePLay);

progressBar.addEventListener('change', rangeUpdate);
progressBar.addEventListener('mousemove', rangeUpdate);
videoMain.addEventListener('timeupdate', rangeProgress);
progressBar.addEventListener('mousemove', rangeProgress);

volumeIconMain.addEventListener('click', volumeIconClick);
valueVolume.addEventListener('change', updateVol);
valueVolume.addEventListener('mousemove', updateVol);
valueVolume.addEventListener('mousedown', updateVol);

let mousedown = false;

progressBar.addEventListener('mousedown', scrub);
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);
progressBar.addEventListener('mouseover', () => mousedown = false);

videoMain.addEventListener('loadeddata', durationTimeVideo);

// ? -------------------------- Custom video --------------------------------------------- //
