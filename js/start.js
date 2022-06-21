'use script';

const easyBtn = document.querySelector('.main__button_easy');
const mediumBtn = document.querySelector('.main__button_medium');
const hardBtn = document.querySelector('.main__button_hard');

easyBtn.addEventListener('click', () => {
  console.log('лёгкий уровень');

  const startEasyGame = window.marbles();
  startEasyGame();
});

mediumBtn.addEventListener('click', () => {
  console.log('средний уровень');
});

hardBtn.addEventListener('click', () => {
  console.log('тяжёлый уровень');
});
