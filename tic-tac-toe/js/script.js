
// -----------------Hello page --------------------------------- //
const inputNamePlayerOne = document.querySelector('.input-one');
const inputNamePlayerTwo = document.querySelector('.input-two');
const btnContinue = document.querySelector('.btn');
const helloPage = document.querySelector('.hello-page');
let results = '';
// ------------------------- Next page --------------------------------------- //
btnContinue.addEventListener('click', function (e) {
   if (inputNamePlayerOne.value !== '' && inputNamePlayerTwo.value !== '') {
      helloPage.classList.add('block-none');
      // ----------- Присваивание имени строкам ----------- //
      let namePlayerFirst = inputNamePlayerOne.value;
      namePlayerOne.textContent = namePlayerFirst;
      let namePlayerSecond = inputNamePlayerTwo.value;
      namePlayerTwo.textContent = namePlayerSecond;
   }
})

// ------------------------ Main --------------------------------- //
const namePlayerOne = document.querySelector('.game__name-1');
const namePlayerTwo = document.querySelector('.game__name-2');
const parentBlocks = document.querySelector('.game__blocks');
const gameTitle = document.querySelector('.game__title');

// ---------------------- выводим крестик или нолик ----------------------- //
let click = 0;
function getClickOnBlock(e) {
   if (e.target.closest('.game__block')) {
      if (click % 2 === 0) {
         e.target.insertAdjacentHTML('afterbegin', '<span class="game__block-span-1"></span> <span class="game__block-span-2"></span>');
         e.target.classList.add ('mute');

      } else {
         e.target.insertAdjacentHTML('afterbegin', '<img class="game__img" src="./assets/img/ellipse-big.svg" alt="ellipse-big">')
         e.target.classList.add ('mute');
      }
   }
   click++;
   getWinCombination();
}

parentBlocks.addEventListener('click', getClickOnBlock);

// ---------------------- win ----------------------- //

function getWinCombination() {
   const blocks = document.querySelectorAll('.game__block');

   const arrValueBlocks = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ]

   for (let i = 0; i < arrValueBlocks.length; i++) {
      if (
         blocks[arrValueBlocks[i][0]].querySelector('.game__block-span-1') &&
         blocks[arrValueBlocks[i][1]].querySelector('.game__block-span-1') &&
         blocks[arrValueBlocks[i][2]].querySelector('.game__block-span-1')
      ) {
         for (let j = 0; j < 3; j++) {
            const colorBlock = blocks[arrValueBlocks[i][j]];
            colorBlock.style.backgroundColor = '#2FFE43'
            gameTitle.style.backgroundColor = '#0085ff'
         }
         blocks.forEach(blockMute => {
            blockMute.classList.add('mute');
         })

         results = "Крестики победили";
         giveNameWinner()
      } else if (
         blocks[arrValueBlocks[i][0]].querySelector('.game__img') &&
         blocks[arrValueBlocks[i][1]].querySelector('.game__img') &&
         blocks[arrValueBlocks[i][2]].querySelector('.game__img')
      ) {
         for (let j = 0; j < 3; j++) {
            const colorBlock = blocks[arrValueBlocks[i][j]];
            colorBlock.style.backgroundColor = '#2FFE43'
            gameTitle.style.backgroundColor = 'red'
         }
         blocks.forEach(blockMute => {
            blockMute.classList.add('mute');
         })
         results = "Нолики победили";
         giveNameWinner()
      }
   }
}



function giveNameWinner() {
   gameTitle.textContent = results;
}

const btnRestart = document.querySelector('.game__start');
btnRestart.addEventListener('click', function (e) {
   const blocks = document.querySelectorAll('.game__block');
   const blocksOne = document.querySelectorAll('.game__block-span-1');
   const blocksTwo = document.querySelectorAll('.game__block-span-2');
   const blockImg = document.querySelectorAll('.game__img');
   blocksOne.forEach(elementBlock => {
      elementBlock.remove();
   });
   blocksTwo.forEach(elementBlock => {
      elementBlock.remove();
   });
   blocks.forEach(elementBlock => {
      elementBlock.style.backgroundColor = '#feffd6';
      elementBlock.classList.remove('mute')
   });
   blockImg.forEach(elementBlock => {
      elementBlock.remove();
   });
   gameTitle.textContent = 'Continue';
   gameTitle.style.backgroundColor = '#feffd6'
})