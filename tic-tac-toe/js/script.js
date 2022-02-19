// --Start main code--------------- Hello page --------------------------------- //

const inputNamePlayerOne = document.querySelector('.input-one');
const inputNamePlayerTwo = document.querySelector('.input-two');
const btnContinue = document.querySelector('.btn');
const helloPage = document.querySelector('.hello__page');
const mainBlock = document.querySelector('.main');
const conditionGameFirst = document.querySelector('.hello__condition-three')
const conditionGameSecond = document.querySelector('.hello__condition-five')

// -------------------Choiсe condition-------------------------------------- //

conditionGameFirst.addEventListener('click', function (e) {
   if (conditionGameSecond.classList.contains('condition__color')) {
      conditionGameSecond.classList.remove('condition__color');
      conditionGameFirst.classList.add('condition__color');
   } else {
      conditionGameFirst.classList.add('condition__color');
   }
});
conditionGameSecond.addEventListener('click', function (e) {
   if (conditionGameFirst.classList.contains('condition__color')) {
      conditionGameFirst.classList.remove('condition__color');
      conditionGameSecond.classList.add('condition__color');
   } else {
      conditionGameSecond.classList.add('condition__color');
   }
});

// --------------------- Click on button play ---------------------- //

let namePlayerFirst = '';
let namePlayerSecond = '';
btnContinue.addEventListener('click', function (e) {
   if (inputNamePlayerOne.value !== '' &&
      inputNamePlayerTwo.value !== '' &&
      conditionGameFirst.classList.contains('condition__color') ||
      conditionGameSecond.classList.contains('condition__color')
   ) {
      onMuteBtnRestart();
      changeGameTitle();
      helloPage.classList.add('block-opacity');
      mainBlock.classList.add('block-remove-opacity');
      // ----------- Get name players ----------- //
      namePlayerFirst = inputNamePlayerOne.value;
      // ----------- Create new element with name player ---------- //
      let namePLayerElementOne = document.createElement('p');
      namePLayerElementOne.className = 'game__name-player';
      namePLayerElementOne.innerHTML = namePlayerFirst;
      namePlayerOne.prepend(namePLayerElementOne)
      // ----------- Get name players ----------- //
      namePlayerSecond = inputNamePlayerTwo.value;
      // ----------- Create new element with name player ---------- //
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

// ---------------------- Step ----------------------- //

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
      if (click === 9) {
         offMuteBtnRestart();
      }
   }
}

parentBlocks.addEventListener('click', getClickOnBlock);

// ---------------------- winner ----------------------- //
let scoreFirst = 0;
let scoreSecond = 0;
let results = '';
let score = 1;
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
         for (let j = 0; j < 3; j++) { // Give style on winning
            const colorBlock = blocks[arrValueBlocks[i][j]];
            colorBlock.style.backgroundColor = '#2FFE43'
            gameTitle.style.backgroundColor = '#0085ff'
         }
         blocks.forEach(blockMute => {
            blockMute.classList.add('mute'); // Mute everything blocks on winning
         })
         offMuteBtnRestart();
         changeContentFirst();
         getNameWinner();
         choiceWinnerOnConditionGameFirst()

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
         offMuteBtnRestart();
         changeContentSecond();
         getNameWinner();
         choiceWinnerOnConditionGameSecond();
      }
   }
}
// ---------------- Work with buttons --------------- //

btnRestart.addEventListener('click', function (e) {
   click = 0;
   onMuteBtnRestart();
   removeCrossAndCircle();
   removeClassChangeStyleBlocks();
   changeGameTitle();
})

changePlayer.addEventListener('click', function (e) {
   changeClassMainAndHello();
   zeroingScoreAndSteps();
   removeClassChangeStyleBlocks();
   removeCrossAndCircle();
   removeNamePlayer();
   removeCondition();
   onMuteBtnRestart();
})

refreshBtn.addEventListener('click', function (e) {
   gameTitle.textContent = `Раунд 1`;
   gameTitle.style.backgroundColor = '#feffd6'
   zeroingScoreAndSteps();
   removeClassChangeStyleBlocks();
   removeCrossAndCircle();
   onMuteBtnRestart();
})

tableBtn.addEventListener('click', function (e) {
   scoreTable.classList.add('block-remove-opacity');
})

scoreTableBtn.addEventListener('click', function (e) {
   scoreTable.classList.remove('block-remove-opacity');
})

happyButtonRepeat.addEventListener('click', function (e) {
   happyName.classList.remove('block-remove-opacity');
   zeroingScoreAndSteps();
   removeClassChangeStyleBlocks();
   removeCrossAndCircle();
   changeGameTitle();
   onMuteBtnRestart();

})

happyButtonExit.addEventListener('click', function (e) {
   happyName.classList.remove('block-remove-opacity');
   inputNamePlayerOne.value = '';
   inputNamePlayerTwo.value = '';
   changeClassMainAndHello();
   removeClassChangeStyleBlocks();
   removeCrossAndCircle();
   zeroingScoreAndSteps();
   changeGameTitle();
   removeCondition();
})

// ! ----------------------- Functions ----------------------------- //

function onMuteBtnRestart() {
   btnRestart.classList.add('mute');
   btnRestart.style.backgroundColor = '#cacaba';
}
function offMuteBtnRestart() {
   btnRestart.classList.remove('mute');
   btnRestart.style.backgroundColor = '#feffd6';
}


function changeContentFirst() {
   round++;
   scoreFirst++;
   changeScoreFirst.textContent = scoreFirst;
   results = `Раунд взял(а) ${namePlayerFirst}`;
}

function changeContentSecond() {
   round++;
   scoreSecond++;
   changeScoreSecond.textContent = scoreSecond;
   results = `Раунд взял(а) ${namePlayerSecond}`;
}

function getNameWinner() {
   gameTitle.textContent = results;
}

function choiceWinnerOnConditionGameFirst() {
   if (conditionGameFirst.classList.contains('condition__color')) {
      if (scoreFirst === 1) {
         happyName.classList.add('block-remove-opacity');
         happyNamePLayer.textContent = `${namePlayerFirst} победитель! Поздравляем`;
         round = 1;
         getRecordFirstPLayer();

      }
   }
   if (conditionGameSecond.classList.contains('condition__color')) {
      if (scoreFirst === 5) {
         happyName.classList.add('block-remove-opacity');
         happyNamePLayer.textContent = `${namePlayerFirst} победитель! Поздравляем`;
         round = 1;
         getRecordFirstPLayer();
      }
   }
}

function choiceWinnerOnConditionGameSecond() {
   if (conditionGameFirst.classList.contains('condition__color')) {
      if (scoreSecond === 3) {
         happyName.classList.add('block-remove-opacity');
         happyNamePLayer.textContent = `${namePlayerSecond} победитель! Поздравляем`;
         round = 1;
      }
   }
   if (conditionGameSecond.classList.contains('condition__color')) {
      if (scoreSecond === 5) {
         happyName.classList.add('block-remove-opacity');
         happyNamePLayer.textContent = `${namePlayerSecond} победитель! Поздравляем`;
         round = 1;
      }
   }
}

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

function zeroingScoreAndSteps() {
   changeScoreFirst.textContent = '0';
   changeScoreSecond.textContent = '0';
   scoreFirst = 0;
   scoreSecond = 0;
   click = 0;
   round = 1;
}

function removeCondition() {
   conditionGameFirst.classList.remove('condition__color');
   conditionGameSecond.classList.remove('condition__color');
}

function changeGameTitle() {
   gameTitle.textContent = `Раунд ${round}`;
   gameTitle.style.backgroundColor = '#feffd6'
}

function changeClassMainAndHello() {
   helloPage.classList.remove('block-opacity');
   mainBlock.classList.remove('block-remove-opacity');
}
// ------------------- score -------------------------- //
let ind = 0;
let array = [];

let localArray = [];
let arr = [];

console.log(arr);
console.log(array);



function getRecordFirstPLayer() {
   ind = 0;

   if (array.length > 10) {
      array.splice(0, 1);
   }

   array.forEach((arrayIs, index) => {
      if (arrayIs.name == namePlayerFirst) {
         console.log(index);
         ind = index;
      }
   });

   if (array.length === 0) {
      arr.push({ name: namePlayerFirst, num: score });
      array.push(arr[0]);
      createNewElementInTableFirst();
   } else if (array.length === localArray.length && array.length !== 0) {
      if (array[ind].name !== namePlayerFirst) {
         arr.push({ name: namePlayerFirst, num: score });
         array.unshift(arr[0]);
         createNewElementInTableFirst();
      } else {
         let number = ++array[ind].num;
         const idNumberPlayer = document.getElementById(namePlayerFirst);
         idNumberPlayer.textContent = number;
      }
   } else {
      if (array[ind].name !== namePlayerFirst) {
         arr.push({ name: namePlayerFirst, num: score });
         arr.splice(0, 1);
         array.unshift(arr[0]);
         createNewElementInTableFirst();
      } else {
         let number = ++array[ind].num;
         const idNumberPlayer = document.getElementById(namePlayerFirst);
         idNumberPlayer.textContent = number;
      }
   }
}

function createNewElementInTableFirst() {
   const namePLayerRecord = document.querySelector('.table__name');
   let namePLayerWinner = document.createElement('p');
   namePLayerWinner.className = 'table__player-name';
   namePLayerWinner.innerHTML = array[ind].name;
   namePLayerRecord.append(namePLayerWinner);

   const numberPlayerRecord = document.querySelector('.table__number');
   let numberPLayerWinner = document.createElement('p');
   numberPLayerWinner.className = 'table__player-number';
   numberPLayerWinner.id = namePlayerFirst;
   numberPLayerWinner.innerHTML = array[ind].num;
   numberPlayerRecord.append(numberPLayerWinner);
}
// ! ----------------------- Function ----------------------------- //
// ? ----------------------- Local Storage ------------------------ //

function setLocalStorage() {
   localStorage.setItem('score', JSON.stringify(array));
}

function getLocalStorage() {
   const pars = localStorage.getItem('score');
   localArray = JSON.parse(pars)
   localArray.sort((a, b) => b.num - a.num);
   console.log(localArray);
   localArray.forEach(localArr => {
      array.push(localArr);
      const namePLayerRecord = document.querySelector('.table__name');
      let namePLayerWinner = document.createElement('p');
      namePLayerWinner.className = 'table__player-name';
      namePLayerWinner.innerHTML = localArr.name;
      namePLayerRecord.append(namePLayerWinner);

      const numberPlayerRecord = document.querySelector('.table__number');
      let numberPLayerWinner = document.createElement('p');
      numberPLayerWinner.className = 'table__player-number';
      numberPLayerWinner.id = localArr.name;
      numberPLayerWinner.innerHTML = localArr.num;
      numberPlayerRecord.append(numberPLayerWinner);
   })
}
window.addEventListener('pagehide', setLocalStorage);
window.addEventListener('pageshow', getLocalStorage);

