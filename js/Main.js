const GameConfig = {
  FieldSize: {
    rowCount: 10,
    colCount: 10,
  },
  FieldConfig: {
    width: '900',
    height: '900',
    background: '#F7F7F7',
    borderWidth: '10px',
    borderColor: '#444444'
  },
  CellsConfig: {
    width: '70',
    height: '70',
    background: '#FFFFFF',
    borderWidth: '1px',
    borderColor: '#DDDDDD'
  }
};

function addEventListeners() {
  window.addEventListener('keydown', handleKeyDown.bind(this));
}

let snakeDirection = 'right';

function handleKeyDown(event) {
  switch (event.key) {
    case 'ArrowUp':
      snakeDirection = 'up';
      break;
    case 'ArrowDown':
      snakeDirection = 'down';
      break;
    case 'ArrowLeft':
      snakeDirection = 'left';
      break;
    case 'ArrowRight':
      snakeDirection = 'right';
      break;
    default:
      break;
  }
}

const engine = new Engine();
const playGround = new PlayGround();
const snake = new Snake();
const food = new Food();
let speed = 700;

function tickMethods() {
  if (!isGameOver) {
    snake.move(GameConfig.FieldSize.colCount, snakeDirection);
    gameOverCheck();
    const speedModificator = 400 / (GameConfig.FieldSize.colCount * GameConfig.FieldSize.rowCount - 2);
    foodEat(speedModificator);
    food.foodCheck(GameConfig.FieldSize.colCount, GameConfig.FieldSize.rowCount);
    playGround.scoreUpdate(snake.body.length);
    playGround.draw(snake.body, food.foods);
  }
}

function foodEat(speedModificator) {
  const length = snake.body.length;

  if (snake.body.some(segment => segment.x === food.foods.x && segment.y === food.foods.y)) {
    food.foods = undefined;
    speed -= speedModificator;
    switch (snakeDirection) {
      case 'up':
        snake.body.unshift({ x: snake.body[length - 1].x, y: snake.body[length - 1].y - GameConfig.FieldSize.colCount });
        break;
      case 'down':
        snake.body.unshift({ x: snake.body[length - 1].x, y: snake.body[length - 1].y + GameConfig.FieldSize.colCount });
        break;
      case 'left':
        snake.body.unshift({ x: snake.body[length - 1].x + 1, y: snake.body[length - 1].y });
        break;
      case 'right':
        snake.body.unshift({ x: snake.body[length - 1].x - 1, y: snake.body[length - 1].y });
        break;
      default:
        break;
    }
  }
}

let isGameOver = false;

function gameOverCheck() {
  if (
    snake.body.some(segment => segment.x >= GameConfig.FieldSize.colCount || segment.y >= GameConfig.FieldSize.rowCount || segment.x < 0 || segment.y < 0) ||
    snake.body.some((segment, index) => {
      return snake.body.slice(index + 1).some(otherSegment => {
        return segment.x === otherSegment.x && segment.y === otherSegment.y;
      });
    })
  ) {
    gameOver();
  }
}

function gameOver() {
  if (!isGameOver) {
    snakeDirection = '';
    gameOverModal();
    isGameOver = true;
  }
}

function gameOverModal() {
  const modal = document.createElement('dialog');
  const gameContainer = document.getElementById('GameContainer');
  const modalText = document.createElement('p');
  const modalScore = document.createElement('p');
  const modalButton = document.createElement('button');
  gameContainer.appendChild(modal);
  modal.appendChild(modalText);
  modalText.innerText = 'Вы проиграли, печально. Хотите перезапустить игру?';
  modal.appendChild(modalScore);
  modalScore.innerText = 'Ваш счёт: ' + snake.body.length;
  modal.appendChild(modalButton);
  modal.setAttribute('class', 'modal');
  modalButton.innerText = 'Перезапустить';
  modalButton.onclick = function () {
    Restart(modal);
  };
  modal.showModal();
}

function Restart(modal) {
  snakeDirection = 'right';
  snake.body = [
    { x: 0, y: 0 },
    { x: 1, y: 0 }
  ];
  modal.close();
  modal.remove();
  playGround.draw(snake.body, food.foods);
  isGameOver = false;
}

function main() {
  playGround.scoreCreate(snake.body.length);
  playGround.fieldDraw();
  food.foodCheck(GameConfig.FieldSize.colCount, GameConfig.FieldSize.rowCount);
  playGround.draw(snake.body, food.foods);
  engine.run(tickMethods);
}

addEventListeners();
main();



