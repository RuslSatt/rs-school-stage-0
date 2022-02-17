
// -----------------Hello page --------------------------------- //
const inputNamePlayerOne = document.querySelector('.input-one');
const inputNamePlayerTwo = document.querySelector('.input-two');
const btnContinue = document.querySelector('.btn');
const helloPage = document.querySelector('.hello__page');
const mainBlock = document.querySelector('.main');
const conditionGameFirst = document.querySelector('.hello__condition-three')
const conditionGameSecond = document.querySelector('.hello__condition-five')



// -------------------------------------------------------------------------- //


conditionGameFirst.addEventListener('click', function (e) {
   if (conditionGameSecond.classList.contains('condition__color')) {
      conditionGameSecond.classList.remove('condition__color');
      conditionGameFirst.classList.add('condition__color');
   } else {
      conditionGameFirst.classList.add('condition__color');
   }
})

conditionGameSecond.addEventListener('click', function (e) {
   if (conditionGameFirst.classList.contains('condition__color')) {
      conditionGameFirst.classList.remove('condition__color');
      conditionGameSecond.classList.add('condition__color');
   } else {
      conditionGameSecond.classList.add('condition__color');
   }
})

let namePlayerFirst = '';
let namePlayerSecond = '';
// ------------------------- Next page --------------------------------------- //
btnContinue.addEventListener('click', function (e) {
   if (inputNamePlayerOne.value !== '' &&
      inputNamePlayerTwo.value !== '' &&
      conditionGameFirst.classList.contains('condition__color') ||
      conditionGameSecond.classList.contains('condition__color')
   ) {
      helloPage.classList.add('block-opacity');
      mainBlock.classList.add('block-remove-opacity');
      // ----------- Присваивание имени строкам ----------- //
      namePlayerFirst = inputNamePlayerOne.value;

      let namePLayerElementOne = document.createElement('p');
      namePLayerElementOne.className = 'game__name-player';
      namePLayerElementOne.innerHTML = namePlayerFirst;
      namePlayerOne.prepend(namePLayerElementOne)

      namePlayerSecond = inputNamePlayerTwo.value;

      let namePLayerElementTwo = document.createElement('p');
      namePLayerElementTwo.className = 'game__name-player';
      namePLayerElementTwo.innerHTML = namePlayerSecond;
      namePlayerTwo.prepend(namePLayerElementTwo)
   }
})



// ------------------------ Main --------------------------------- //
const namePlayerOne = document.querySelector('.game__name-1');
const namePlayerTwo = document.querySelector('.game__name-2');
const parentBlocks = document.querySelector('.game__blocks');
const gameTitle = document.querySelector('.game__title');
const blocks = document.querySelectorAll('.game__block');
const btnRestart = document.querySelector('.game__start');
const changePlayer = document.querySelector('.game__home');
const refreshBtn = document.querySelector('.game__refresh')
const tableBtn = document.querySelector('.game__table');
const scoreTable = document.querySelector('.table');
const scoreTableBtn = document.querySelector('.table__btn')
const changeScoreFirst = document.querySelector('.game__score-player-1')
const changeScoreSecond = document.querySelector('.game__score-player-2')
const happyName = document.querySelector('.happy');
const happyNamePLayer = document.querySelector('.happy__name');
const happyButtonRepeat = document.querySelector('.happy__button-repeat');
const happyButtonExit = document.querySelector('.happy__button-exit');

// ---------------------- выводим крестик или нолик ----------------------- //
btnRestart.classList.add('mute');
btnRestart.style.backgroundColor = '#cacaba';


let click = 0;
function getClickOnBlock(e) {

   if (e.target.closest('.game__block')) {
      if (click % 2 === 0) {
         e.target.insertAdjacentHTML('afterbegin', '<span class="game__block-span-1"></span> <span class="game__block-span-2"></span>');
         e.target.classList.add('mute');

      } else {
         e.target.insertAdjacentHTML('afterbegin', '<img class="game__img" src="./assets/img/ellipse-big.svg" alt="">')
         e.target.classList.add('mute');
      }
      click++
      getWinCombination();
   }
}

parentBlocks.addEventListener('click', getClickOnBlock);


// ---------------------- win ----------------------- //
let scoreFirst = 0;
let scoreSecond = 0;
let results = '';
let score = 0;
let round = 1;
function getWinCombination() {

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

         btnRestart.classList.remove('mute');
         btnRestart.style.backgroundColor = '#feffd6';

         round++;
         scoreFirst++;
         changeScoreFirst.textContent = scoreFirst;
         results = `Этот раунд за ${namePlayerFirst}`;
         giveNameWinner();

         // ! --------------------------------------------------------------------- //
         if (conditionGameFirst.classList.contains('condition__color')) {
            if (scoreFirst === 3) {
               happyName.classList.add('block-remove-opacity');
               happyNamePLayer.textContent = `${namePlayerFirst} победитель! Поздравляем`;

               round = 1;

               let scoreResult = score++;
               let arr = {
                  namePlayerFirst: scoreResult,
               }
            }
         }
         if (conditionGameSecond.classList.contains('condition__color')) {
            if (scoreFirst === 5) {
               happyName.classList.add('block-remove-opacity');
               happyNamePLayer.textContent = `${namePlayerFirst} победитель! Поздравляем`;

               round = 1;

               let scoreResult = score++;
               let arr = {
                  namePlayerFirst: scoreResult,
               }
            }
         }
         // ! --------------------------------------------------------------------- //

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

         btnRestart.classList.remove('mute');
         btnRestart.style.backgroundColor = '#feffd6';

         round++;
         scoreSecond++;
         changeScoreSecond.textContent = scoreSecond;
         results = `Этот раунд за ${namePlayerSecond}`;
         giveNameWinner();

         // ! --------------------------------------------------------------------- //
         if (conditionGameFirst.classList.contains('condition__color')) {
            if (scoreSecond === 3) {
               happyName.classList.add('block-remove-opacity');
               happyNamePLayer.textContent = `${namePlayerSecond} победитель! Поздравляем`;

               round = 1;

               let scoreResult = score++;
               let arr = {
                  namePlayerSecond: scoreResult,
               }
            }
         }
         if (conditionGameSecond.classList.contains('condition__color')) {
            if (scoreSecond === 5) {
               happyName.classList.add('block-remove-opacity');
               happyNamePLayer.textContent = `${namePlayerSecond} победитель! Поздравляем`;

               round = 1;

               let scoreResult = score++;
               let arr = {
                  namePlayerSecond: scoreResult,
               }
            }
         }
         // ! --------------------------------------------------------------------- //
      }
   }
}



function giveNameWinner() {
   gameTitle.textContent = results;
}




btnRestart.addEventListener('click', function (e) {
   btnRestart.classList.add('mute');
   btnRestart.style.backgroundColor = '#cacaba';
   removeCrossAndCircle();
   removeClassChangeStyleBlocks();
   gameTitle.textContent = `Раунд ${round}`;
   gameTitle.style.backgroundColor = '#feffd6'
   click = 0;
})

changePlayer.addEventListener('click', function (e) {
   scoreFirst = 0;
   scoreSecond = 0;
   round = 1;
   helloPage.classList.remove('block-opacity');
   mainBlock.classList.remove('block-none');
   removeClassChangeStyleBlocks();
   removeCrossAndCircle();
   removeNamePlayer();
   changeScoreFirst.textContent = '0';
   changeScoreSecond.textContent = '0';
   conditionGameFirst.classList.remove('condition__color');
   conditionGameSecond.classList.remove('condition__color');
})

refreshBtn.addEventListener('click', function (e) {
   scoreFirst = 0;
   scoreSecond = 0;
   removeClassChangeStyleBlocks();
   removeCrossAndCircle();
   changeScoreFirst.textContent = '0';
   changeScoreSecond.textContent = '0';

   gameTitle.textContent = `Раунд 1`;
   gameTitle.style.backgroundColor = '#feffd6'
})

function removeCrossAndCircle() {
   const blocksSpan = document.querySelectorAll('.game__block-span-1, .game__block-span-2');
   const blockImg = document.querySelectorAll('.game__img');
   blocksSpan.forEach(span => {
      span.remove();
   });
   blockImg.forEach(image => {
      image.remove();
   });
}


function removeClassChangeStyleBlocks() {
   blocks.forEach(elementBlock => {
      elementBlock.style.backgroundColor = '#feffd6';
      elementBlock.classList.remove('mute')
   });
}

function removeNamePlayer() {
   const namePLayers = document.querySelectorAll('.game__name-player');
   namePLayers.forEach(namePLayer => {
      namePLayer.remove()
   })
   inputNamePlayerOne.value = '';
   inputNamePlayerTwo.value = '';
}


tableBtn.addEventListener('click', function (e) {
   scoreTable.classList.add('block-remove-opacity');
})

scoreTableBtn.addEventListener('click', function (e) {
   scoreTable.classList.remove('block-remove-opacity');
})

happyButtonRepeat.addEventListener('click', function (e) {
   scoreFirst = 0;
   scoreSecond = 0;
   round = 1;
   click = 0;
   removeClassChangeStyleBlocks();
   removeCrossAndCircle();
   changeScoreFirst.textContent = '0';
   changeScoreSecond.textContent = '0';

   happyName.classList.remove('block-remove-opacity');
   gameTitle.textContent = `Раунд ${round}`;
   gameTitle.style.backgroundColor = '#feffd6'
   btnRestart.classList.add('mute');
   btnRestart.style.backgroundColor = '#cacaba';
})

happyButtonExit.addEventListener('click', function (e) {
   helloPage.classList.remove('block-opacity');
   mainBlock.classList.remove('block-none');
   removeClassChangeStyleBlocks();
   removeCrossAndCircle();
   changeScoreFirst.textContent = '0';
   changeScoreSecond.textContent = '0';
   scoreFirst = 0;
   scoreSecond = 0;
   happyName.classList.remove('block-remove-opacity');
   gameTitle.textContent = `Раунд ${round}`;
   gameTitle.style.backgroundColor = '#feffd6'
   click = 0;
   inputNamePlayerOne.value = '';
   inputNamePlayerTwo.value = '';
   conditionGameFirst.classList.remove('condition__color');
   conditionGameSecond.classList.remove('condition__color');
})
