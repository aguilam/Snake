const GameConfig = {
  FieldSize: {
    rowCount: 10,
    colCount: 10
  },
  FieldConfig: {
    width: '900', 
    height: '900', 
    background: 'green', 
    borderWidth: '10px', 
    borderColor: 'red'   
  },
  CellsConfig: {
    width: '60', 
    height: '60', 
    background: 'blue', 
    borderWidth: '1px', 
    borderColor: 'yellow'   
  }
}
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
function tickMethods(){
  snake.move(GameConfig.FieldSize.colCount, snakeDirection)
  playGround.draw(snake.body)
}
function main() {
  playGround.fieldDraw();
  playGround.draw(snake.body)
  engine.run(tickMethods);
}
addEventListeners();
main();


