'use strict';

const background = 'padding: 0 20px; text-shadow: 0 0 10px red; color: green';
console.log('%c Игра Марблы', background);

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = (language) => {
    const currentLanguage = language;
    const result = {
      player: 5,
      computer: 5,
    };

    return function start() {
      const localization = {
        lang: {
          RU: 'русский',
        },
        getNumber: {
          RU: `Загадайте число от 1 до ${result.player}`,
        },
        figures: {
          RU: ['камень', 'ножницы', 'бумага'],
        },
        startGame: {
          RU: 'Камень, ножницы или бумага?',
        },
        exitGame: {
          RU: 'Вы действительно хотите покинуть игру?',
        },
        gameOver: {
          RU: 'Конец игры!',
        },
        continueGame: {
          RU: 'Продолжаем игру!',
        },
        draw: {
          RU: 'Ничья!',
        },
        win: {
          RU: 'Вы выиграли!',
        },
        loss: {
          RU: 'Вы проиграли!',
        },
        resultGame: {
          RU: 'Игрок : Компьютер',
        },
      };

      const getNumber = prompt(`Введите число от 1 до ${result.player}`);

      const computerMove = localization.figures[currentLanguage][getRandomIntInclusive(0, localization.figures[currentLanguage].length - 1)];
      const playerMove = prompt(localization.startGame[currentLanguage]);

      const winRPS = () => {
        return ((playerMove[0] === localization.figures[currentLanguage][0][0]) && (computerMove === localization.figures[currentLanguage][1])) ||
        ((playerMove[0] === localization.figures[currentLanguage][1][0]) && (computerMove === localization.figures[currentLanguage][2])) ||
        ((playerMove[0] === localization.figures[currentLanguage][2][0]) && (computerMove === localization.figures[currentLanguage][0]));
      };
      const lossRPS = () => {
        return ((computerMove === localization.figures[currentLanguage][0]) && (playerMove[0] === localization.figures[currentLanguage][1][0])) ||
          ((computerMove === localization.figures[currentLanguage][1]) && (playerMove[0] === localization.figures[currentLanguage][2][0])) ||
          ((computerMove === localization.figures[currentLanguage][2]) && (playerMove[0] === localization.figures[currentLanguage][0][0]));
      };

      if (playerMove === null) {
        let exitGame = confirm(localization.exitGame[currentLanguage]);

        if (exitGame) {
          alert(`${localization.gameOver[currentLanguage]}
              ${localization.resultGame[currentLanguage]}
              ${result.player} : ${result.computer}`);
        } else {
          alert(`${localization.continueGame[currentLanguage]}
                ${localization.resultGame[currentLanguage]}
                ${result.player} : ${result.computer}`);
          start();
        }
      } else if (playerMove[0] === computerMove[0]) {
          alert(`${localization.draw[currentLanguage]}
                ${localization.resultGame[currentLanguage]}
                ${result.player} : ${result.computer}`);
        start();
      } else if (winRPS()) {
        result.player++;
        alert(`${localization.win[currentLanguage]}
              ${localization.resultGame[currentLanguage]}
              ${result.player} : ${result.computer}`);
        start();
      } else if (lossRPS()) {
        result.computer++;
        alert(`${localization.loss[currentLanguage]}
              ${localization.resultGame[currentLanguage]}
              ${result.player} : ${result.computer}`);
        start();
      } else {
        start();
      }
    };
  };

  window.RPS = game;
})();
