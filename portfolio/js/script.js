'use strict';
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

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}