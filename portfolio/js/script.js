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

// const portfolioButtons = document.querySelectorAll('.portfolio__btn-link');

// if (portfolioButtons.length > 0) {
//    portfolioButtons.forEach(btnFile => {
//       btnFile.addEventListener('click', function (e) {
//          const dataValue = btnFile.getAttribute('data-filter');

//          //-----------------active button-----------------//
//          for (const i of portfolioButtons) {
//             i.classList.remove('active');
//          }
//          btnFile.classList.add('active');

//          //-----------------filter portfolio-----------------//

//          const itemValueTwoAndOne = document.querySelectorAll('.portfolio__column')
//          for (const a of itemValueTwoAndOne) {
//             a.style.display = "none";
//          }
//          const valueItem = document.querySelectorAll(".portfolio__column.season_" + dataValue);

//          for (const b of valueItem) {
//             b.style.display = "flex";
//          }
//       });
//    })
// }








