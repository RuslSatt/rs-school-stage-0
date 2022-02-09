let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c';


console.log(url);


const formGet = document.querySelector('.header__input');


formGet.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) {
      const keyForms = formGet.value;
      console.log(keyForms);
      url = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${keyForms}`;

      async function getData() {
         const result = await fetch(url);
         const data = await result.json();
         console.log(data);
         showData(data);

      }
      getData();
   }
})


console.log(url);


async function getData() {
   const result = await fetch(url);
   const data = await result.json();
   console.log(data);
   showData(data);

}
getData();


function showData(data) {
   const img = document.querySelector('.movie__img');

   for (let i = 0; i < 1; i++) {
      const keysImg = data.results[i].poster_path;
      img.src = `https://image.tmdb.org/t/p/w1280/${keysImg}`;
   }




   const keysTitle = data.results[0].original_title;
   const title = document.querySelector('.movie__name');
   title.textContent = `${keysTitle}`;

}
