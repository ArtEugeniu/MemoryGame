const tutorialCloseBtn = document.querySelector('.close-tutorial-btn');
const tutorialBlock = document.querySelector('.rules-controls');
const tutorialOpenBtn = document.querySelector('.open-tutorial-btn');

const fieldArr = [1, 2, 3, 4, 5, 6, 7, 8];
fieldArr.sort((a, b) => Math.random() - 0.5);
const keys = ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Enter', ' ', 'r'];
console.log(fieldArr);
const content = []
let x = 3;
let y = 1;
let step = 1;
let error = 0

const fieldInit = () => {
  for (let i = 0; i < 2; i++) {
    for (let k = 0; k < 4; k++) {
      let div = document.createElement('div');
      div.classList.add('fieldItem');
      div.textContent = fieldArr[i * 4 + k];
      if (i === 1 && k === 3) div.classList.add('active');

      document.querySelector('.gamefield').append(div);

      setTimeout(() => {
        document.querySelectorAll('.fieldItem').forEach(item => item.textContent = '');

        document.addEventListener('keydown', pressKey);
      }, 5000);
    }
  }
}

const pressKey = (event) => {
  const fieldItems = document.querySelectorAll('.gamefield > .fieldItem');
  console.log(event.key);

  if (!keys.includes(event.key)) return;


  fieldItems[y * 4 + x].classList.remove('active');

  switch (event.key) {
    case 'ArrowUp':
      y - 1 >= 0 ? y = y - 1 : y = 1;
      break;
    case 'ArrowDown':
      y + 1 <= 1 ? y = y + 1 : y = 0;
      break;
    case 'ArrowLeft':
      x - 1 >= 0 ? x = x - 1 : x = 3;
      break;
    case 'ArrowRight':
      x + 1 <= 3 ? x = x + 1 : x = 0;
      break;
    case 'Enter':
      if (fieldArr[y * 4 + x] === step) {
        fieldItems[y * 4 + x].textContent = fieldArr[y * 4 + x];
        step++;
      } else {
        alert('error');
        error++;
      }
      break;
    case ' ':
      if (fieldArr[y * 4 + x] === step) {
        fieldItems[y * 4 + x].textContent = fieldArr[y * 4 + x];
        step++;
      } else {
        alert('error');
        error++;
      }
      break;
    case 'r':
      location.reload();
  };

  fieldItems[y * 4 + x].classList.add('active');

  if (error === 2) {
    alert('Game Over');
    location.reload();
  };

  if (step === 9) {
    setTimeout(() => {
      alert('You win!');
      location.reload();
    }, 500);
  }
}

fieldInit();

tutorialCloseBtn.addEventListener('click', () => {
  tutorialBlock.classList.add('close-tutorial');
})

tutorialOpenBtn.addEventListener('click', () => {
  tutorialBlock.classList.remove('close-tutorial');
})
