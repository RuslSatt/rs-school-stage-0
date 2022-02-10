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
}

   // ------------- active button --------------- //

   const button = document.querySelectorAll('.movie__button');
   const back = document.querySelector('.movie__back');

   button.forEach (buttons => {
      buttons.addEventListener('click', function (e) {
         back.classList.toggle ('active');
      })
   })
