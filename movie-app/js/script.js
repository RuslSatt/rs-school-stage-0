// ------------------------------- API ------------------------------- //
let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c';


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

formGet.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) { // -- Enter -- //
      const keyForms = formGet.value;
      // ------------------------------- API по значению input ------------------------------- //
      url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${keyForms}`;

      // ------------------------------- API по значению input ------------------------------- //
      if (keyForms == '') { // ------------------------------- Проверка на пустую строку ------------------------------- //
         url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c';
      }


      // ------------------- Обработка API -------------- //
      async function getData() {
         const result = await fetch(url);
         const data = await result.json();
         showData(data); // Вывод содержимого на страницу
      }
      getData();
   }
})

// ------------------- Обработка API -------------- //
async function getData() {
   const result = await fetch(url);
   const data = await result.json();
   showData(data);
   console.log(data);
}
getData();


// ------------------- Вывод содержимого на страницу -------------- //
function showData(data) {
   // ---------------- function get poster ------------------------ //

   const img = document.querySelectorAll('.movie__img');
   function getPoster() {
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
   getPoster();

   // ---------------- function get name the movie ------------------------ //
   const title = document.querySelectorAll('.movie__name');
   function getNameTheMovie() {
      title.forEach((titleName, index) => {
         const keysTitle = data.results[0 + index].title;
         titleName.textContent = `${keysTitle}`;
      })
   }
   getNameTheMovie();

   // ---------------- function get overview ------------------------------- //
   const overView = document.querySelectorAll('.movie__back');
   function getOverTheMovie() {
      overView.forEach((overViewGet, index) => {
         const keysOver = data.results[0 + index].overview;
         overViewGet.textContent = `${keysOver}`;
      })
   }
   getOverTheMovie();

   // ---------------- function get average ------------------------------- //
   const numberMovie = document.querySelectorAll('.movie__number');
   function getNumberMovie() {
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
   getNumberMovie();


}

// ---------------- the function for window with review -------------- //
const parrentBtnAndBack = document.querySelector('.movie__row');

function getOver (e) {
   if (e.target.closest ('.movie__button')) {
      const filter = e.target.dataset.filter;
      const backMovie = document.querySelectorAll('.movie__back');
      backMovie.forEach (back => {
         const filterBack = back.dataset.filter;
         if (filter == filterBack) {
            back.classList.toggle ('active');
         } else {
            back.classList.remove ('active');
         }
      })
   }
}
parrentBtnAndBack.addEventListener ('click', getOver);


// -------------- the function for top movies ----------------------- //

const topMovie = document.querySelector('.header__top');

topMovie.addEventListener('click', function (e) {
   url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c';
   async function getData() {
      const result = await fetch(url);
      const data = await result.json();
      showData(data); // Вывод содержимого на страницу
   }
   getData();
})


