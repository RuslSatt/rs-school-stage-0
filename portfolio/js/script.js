'use strict';

//-------menu-burger--------------------//

const burgerIcon = document.querySelector('.header__icon');
const menuNav = document.querySelector('.header__nav');
if (burgerIcon) {
   burgerIcon.addEventListener('click', function (e) {

      burgerIcon.classList.toggle('active');
      menuNav.classList.toggle('active');
      document.body.classList.toggle('lock');

      const logoHeader = document.querySelector('.header__logo');
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

         }

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}

let resultTask = '1. +10 \n2. +20 \n3. +48 \n4. +12 \n5. +20';
console.log(resultTask);

//-----------------------filter---------------------------------------------//

const portfolioButtons = document.querySelectorAll('.portfolio__btn-link');

if (portfolioButtons.length > 0) {
   portfolioButtons.forEach(btnFile => {
      btnFile.addEventListener('click', function (e) {
         const dataValue = btnFile.getAttribute('data-filter');

         //-----------------active button-----------------//
         for (const i of portfolioButtons) {
            i.classList.remove('active');
         }
         btnFile.classList.add('active');

         //-----------------filter portfolio-----------------//

         const itemValueTwoAndOne = document.querySelectorAll('.portfolio__column')
         for (const a of itemValueTwoAndOne) {
            a.style.display = "none";
         }
         const valueItem = document.querySelectorAll(".portfolio__column.season_" + dataValue);
         
         for (const b of valueItem) {
            b.style.display = "flex";
         }

         // if (dataValue == '1') {
         //    const itemValueTwoAndOne = document.querySelectorAll('.season_2, .season_3')
         //    for (const value of itemValueTwoAndOne) {
         //       value.style.display = 'none';
         //    }
         //    const itemValue = document.querySelectorAll('.season_4')
         //    for (const value of itemValue) {
         //       value.style.display = 'none';
         //    }
         //    const valueColumn = document.querySelectorAll('.season_1')
         //    for (const value of valueColumn) {
         //       value.style.display = 'flex';
         //    }
         // } else if (dataValue == '2') {
         //    const itemValueTwoAndOne = document.querySelectorAll('.season_1, .season_3')
         //    for (const value of itemValueTwoAndOne) {
         //       value.style.display = 'none';
         //    }
         //    const itemValue = document.querySelectorAll('.season_4')
         //    for (const value of itemValue) {
         //       value.style.display = 'none';
         //    }
         //    const valueColumn = document.querySelectorAll('.season_2')
         //    for (const value of valueColumn) {
         //       value.style.display = 'flex';
         //    }
         // } else if (dataValue == '3') {
         //    const itemValueTwoAndOne = document.querySelectorAll('.season_1, .season_2')
         //    for (const value of itemValueTwoAndOne) {
         //       value.style.display = 'none';
         //    }
         //    const itemValue = document.querySelectorAll('.season_4')
         //    for (const value of itemValue) {
         //       value.style.display = 'none';
         //    }
         //    const valueColumn = document.querySelectorAll('.season_3')
         //    for (const value of valueColumn) {
         //       value.style.display = 'flex';
         //    }
         // } else if (dataValue == '4') {
         //    const itemValueTwoAndOne = document.querySelectorAll('.season_1, .season_2')
         //    for (const value of itemValueTwoAndOne) {
         //       value.style.display = 'none';
         //    }
         //    const itemValue = document.querySelectorAll('.season_3')
         //    for (const value of itemValue) {
         //       value.style.display = 'none';
         //    }
         //    const valueColumn = document.querySelectorAll('.season_4')
         //    for (const value of valueColumn) {
         //       value.style.display = 'flex';
         //    }
         // }
      });
   })
}













