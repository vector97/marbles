'use strict';

const background = 'padding: 0 20px; text-shadow: 0 0 10px red; color: green';
console.log('%c Игра Марблы', background);

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {
    const result = {
      player: 5,
      computer: 5,
    };

    return function start() {
      const getNumber = prompt(`Введите число от 1 до ${result.player}`, '');

      if (getNumber < 1 || getNumber > result.player) {
        alert('Неверное число');
        start();
      } else {
        const botNumber = getRandomIntInclusive(1, result.player);

        const arbiter = (playerNumber, PCNumber) => {
          if (playerNumber % 2 === PCNumber % 2) {
            result.player -= getNumber;
            result.computer += +getNumber;
            alert('Бот угадал загаданное вами число. К сожалению, Вы проиграли этот раунд!');
            alert(`
              Игрок : Компьютер
              ${result.player} : ${result.computer}
              `);
          } else {
            result.player += +getNumber;
            result.computer -= getNumber;
            alert('Бот не угадал загаданное вами число. Поздравляю, Вы выиграли этот раунд!');
            alert(`
              Игрок : Компьютер
              ${result.player} : ${result.computer}
              `);
          }
        };
        arbiter(getNumber, botNumber);

        if (result.player < 1) {
          alert('У вас закончились шарики. К сожалению, вы проиграли!');
        } else if (result.computer < 1) {
          alert('У бота закончились шарики. Поздравляю, вы победили!');
        } else {
          start();
        }
      }
    };
  };

  window.marbles = game;
})();
