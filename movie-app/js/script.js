// ------------------------------- API ------------------------------- //
let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8cbeb3dacd0e1d8c24b79671c01e68d';


// ----------------- Get value input ------------------- //
const formGet = document.querySelector('.header__input');
const formGetPlaceholder = formGet.placeholder;




// ----------------- On focus ------------- //
formGet.addEventListener('focus', function () {
   formGet.placeholder = '';
})
formGet.focus(); // load page focus //

// ----------------- Off focus ------------- //
formGet.addEventListener('blur', function () {
   formGet.placeholder = formGetPlaceholder;
})

// ---------------- Поиск через иконку --------------------- //
const iconSearch = document.querySelector('.header__search');
// ---------------- Запрет отправки формы ----------------- //
iconSearch.addEventListener ('submit', function (e) {
   e.preventDefault();
})

function getIcon(e) {
   if (e.target.closest('.header__button')) {
      let keyBtn = formGet.value;
      if (keyBtn !== '') {
         url = `https://api.themoviedb.org/3/search/movie?api_key=b8cbeb3dacd0e1d8c24b79671c01e68d&query=${keyBtn}`;
      };

   }
   // ------------------- Обработка API -------------- //
   getData();
}
iconSearch.addEventListener('click', getIcon);


// ---------------- Поиск через клавиатуру --------------------- //
formGet.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) { // -- Enter -- //
      const keyForms = formGet.value;
      // ------------------------------- API по значению input ------------------------------- //
      url = `https://api.themoviedb.org/3/search/movie?api_key=b8cbeb3dacd0e1d8c24b79671c01e68d&query=${keyForms}&tag_mode=all`;


      if (keyForms == '') { // ------------------------------- Проверка на пустую строку ------------------------------- //
         url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b8cbeb3dacd0e1d8c24b79671c01e68d';
      }


      // ------------------- Обработка API -------------- //
      getData();
   }
})




// ------------------- Обработка API -------------- //
async function getData() {
   const result = await fetch(url);
   const data = await result.json();
   showData(data);
}
getData();


// ------------------- Вывод содержимого на страницу -------------- //
function showData(data) {
   // ---------------- function get poster ------------------------ //
   const img = document.querySelectorAll('.movie__img');
   function getPoster() {

      let lengthData = data.results.length;
      // ---------------- if length array with movies less 12 -------------- //
      if (lengthData < 12) {
         for (let i = 0; i < lengthData; i++) {
            const dataImg = data.results[i].poster_path;
            if (dataImg !== null) {
               img[i].src = `https://image.tmdb.org/t/p/w1280/${dataImg}`;
               const parentImage = img[i].parentElement;
               const parentItem = parentImage.parentElement;
               parentItem.classList.remove('none');
            } else {
               const parentImage = img[i].parentElement;
               const parentItem = parentImage.parentElement;
               parentItem.classList.add('none');
            }
         }
         // ------------- Deleted other card ----------------- //
         for (let j = lengthData; j < 12; j++) {
            const parentImage = img[j].parentElement;
            const parentItem = parentImage.parentElement;
            parentItem.classList.add('none');
         }
      }

      // ---------------- if length array with movies more 12 -------------- //
      if (lengthData >= 12) {
         img.forEach((image, index) => {
            const dataImg = data.results[0 + index].poster_path;
            if (dataImg !== null) {
               image.src = `https://image.tmdb.org/t/p/w1280/${dataImg}`;
               const parentImage = image.parentElement;
               const parentItem = parentImage.parentElement;
               parentItem.classList.remove('none')
            } else {
               const parentImage = image.parentElement;
               const parentItem = parentImage.parentElement;
               parentItem.classList.add('none')
            }
         })
      }
   }
   getPoster();

   // ---------------- function get name the movie ------------------------ //
   const title = document.querySelectorAll('.movie__name');
   function getNameTheMovie() {
      // ---------------- if length array with movies less 12 -------------- //
      let lengthData = data.results.length;
      if (lengthData < 12) {
         for (let i = 0; i < lengthData; i++) {
            const keysTitle = data.results[i].title;
            title[i].textContent = `${keysTitle}`;
            img[i].alt = `${keysTitle}`;
         }
      }
      // ---------------- if length array with movies more 12 -------------- //
      if (lengthData >= 12) {
         title.forEach((titleName, index) => {
            const keysTitle = data.results[0 + index].title;
            titleName.textContent = `${keysTitle}`;
         })
         img.forEach((altName, index) => {
            const keysTitle = data.results[0 + index].title;
            altName.alt = `${keysTitle}`;
         })
      }
   }
   getNameTheMovie();

   // ---------------- function get overview ------------------------------- //
   const overView = document.querySelectorAll('.movie__back-overview');
   function getOverTheMovie() {
      // ---------------- if length array with movies less 12 -------------- //
      let lengthData = data.results.length;
      if (lengthData < 12) {
         for (let i = 0; i < lengthData; i++) {
            const keysOver = data.results[i].overview;
            overView[i].textContent = `${keysOver}`;
         }
      }
      // ---------------- if length array with movies more 12 -------------- //
      if (lengthData >= 12) {
         overView.forEach((overViewGet, index) => {
            const keysOver = data.results[0 + index].overview;
            overViewGet.textContent = `${keysOver}`;
         })
      }

   }
   getOverTheMovie();

   // ---------------- function get average ------------------------------- //
   const numberMovie = document.querySelectorAll('.movie__number');
   function getNumberMovie() {
      // ---------------- if length array with movies less 12 -------------- //
      let lengthData = data.results.length;
      if (lengthData < 12) {
         for (let i = 0; i < lengthData; i++) {
            const keysNumberMovie = data.results[i].vote_average;
            if (keysNumberMovie <= 7.5 && keysNumberMovie >= 5) {
               numberMovie[i].style.color = 'yellow';
            } else if (keysNumberMovie < 5) {
               numberMovie[i].style.color = 'red';
            } else {
               numberMovie[i].style.color = 'rgba(48, 241, 10, 0.938)';
            }
            numberMovie[i].textContent = `${keysNumberMovie}`
         }
      }
      // ---------------- if length array with movies more 12 -------------- //
      if (lengthData >= 12) {
         numberMovie.forEach((numberMovieGet, index) => {
            const keysNumberMovie = data.results[0 + index].vote_average;
            if (keysNumberMovie <= 7.5 && keysNumberMovie >= 5) {
               numberMovieGet.style.color = 'yellow';
            } else if (keysNumberMovie < 5) {
               numberMovieGet.style.color = 'red';
            } else {
               numberMovieGet.style.color = 'rgba(48, 241, 10, 0.938)';
            }
            numberMovieGet.textContent = `${keysNumberMovie}`
         })
      }

   }
   getNumberMovie();

   const releaseDate = document.querySelectorAll('.movie__release-date');
   function getReleaseDate () {
      let lengthData = data.results.length;
      if (lengthData < 12) {
         for (let i = 0; i < lengthData; i++) {
            const keysRelease = data.results[i].release_date;
            releaseDate[i].textContent = `Release date - ${keysRelease}`;
         }
      }
      // ---------------- if length array with movies more 12 -------------- //
      if (lengthData >= 12) {
         releaseDate.forEach((release, index) => {
            const keysRelease = data.results[0 + index].release_date;
            release.textContent = `Release date - ${keysRelease}`;
         })
      }
   }
   getReleaseDate ()
}

// ---------------- the function for window with review -------------- //
const parrentBtnAndBack = document.querySelector('.movie__row');

function getOver(e) {
   if (e.target.closest('.movie__button')) {
      const filter = e.target.dataset.filter;
      const backMovie = document.querySelectorAll('.movie__back');
      backMovie.forEach(back => {
         const filterBack = back.dataset.filter;
         if (filter == filterBack) {
            back.classList.toggle('active');
         } else {
            back.classList.remove('active');
         }
      })
   }
}
parrentBtnAndBack.addEventListener('click', getOver);


// -------------- the function for top movies ----------------------- //

const topMovie = document.querySelector('.header__top');

topMovie.addEventListener('click', function (e) {
   cross.classList.remove('cross-active');
   formGet.value = '';
   url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c';
   getData();
})


// ------------------ click cross ----------------- //
const cross = document.querySelector('.header__cross');

formGet.addEventListener('input', function (e) {
   cross.classList.add('cross-active')
   if (formGet.value === '') {
      cross.classList.remove('cross-active');
   }
})

cross.addEventListener('click', function (e) {
   formGet.value = '';
   formGet.focus();
   cross.classList.remove('cross-active');
})

// ----------------- Close the card when happen click -------------- //

window.addEventListener('click', function (e) {
   const targetClick = e.target;
   if (!targetClick.closest ('.movie__row')) {
      const backMovie = document.querySelectorAll ('.movie__back');
      backMovie.forEach (back => {
         back.classList.remove ('active');
      })
   }
})




