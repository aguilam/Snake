class PlayGround{
  constructor() {
    this.playGroundConfig = GameConfig;
  }
  draw(snake,food){
    const cells = document.querySelectorAll('[x][y]');
    cells.forEach(cell => {
      const x = parseInt(cell.getAttribute('x'));
      const y = parseInt(cell.getAttribute('y'));
      if (snake.some(coord => coord.x === x && coord.y === y)) {
        cell.style.background = '#6C63FF';
      } else if (food && food.x === x && food.y === y) {
        cell.style.background = '#FF5757';
      } else {
        this.cellsCustomization(cell);
      }
    });
  }
  fieldDraw(){
    this.fieldContainerCreate()
    this.cellsCreate()
  }
  fieldContainerCreate(){
    let container = document.getElementById('GameContainer');
    const FieldContainer = document.createElement('div');
    this.fieldContainerCustomization(FieldContainer)
    FieldContainer.setAttribute('id', 'FieldContainer');
    container.appendChild(FieldContainer);
  }
  fieldContainerCustomization(FieldContainer){
    FieldContainer.style.width = `${this.playGroundConfig.FieldConfig.width}px`;
    FieldContainer.style.height = `${this.playGroundConfig.FieldConfig.height}px`;
    FieldContainer.style.background = `${this.playGroundConfig.FieldConfig.background}`;
    FieldContainer.style.border = `${this.playGroundConfig.FieldConfig.borderWidth} solid ${this.playGroundConfig.FieldConfig.borderColor}`;
    FieldContainer.style.display = 'grid'
    FieldContainer.style.gridTemplateColumns = `repeat(${this.playGroundConfig.FieldSize.colCount}, 1fr)`
    FieldContainer.style.justifyItems = 'center';

  }
  cellsCreate(){
    for (let y = 0; y < this.playGroundConfig.FieldSize.rowCount; y++) {
      for (let x = 0; x < this.playGroundConfig.FieldSize.colCount; x++) {
        const cell = document.createElement('div');
        this.cellsCustomization(cell);
        cell.setAttribute('x', x);
        cell.setAttribute('y', y);
        FieldContainer.appendChild(cell);
      }
    }
  }
  cellsCustomization(cell){
    cell.style.width = `${this.playGroundConfig.CellsConfig.width}px`;
    cell.style.height = `${this.playGroundConfig.CellsConfig.height}px`;
    cell.style.background = `${this.playGroundConfig.CellsConfig.background}`;
    cell.style.border = `${this.playGroundConfig.CellsConfig.borderWidth} solid ${this.playGroundConfig.CellsConfig.borderColor}`;
  }
  scoreCreate(score){
    let container = document.getElementById('GameContainer');
    const scoreContainer = document.createElement('div');
    scoreContainer.setAttribute('class', 'scoreContainer');
    container.appendChild(scoreContainer);
    const scoreText = document.createElement('p')
    scoreText.setAttribute('id', 'scoreText');
    scoreText.innerText = 'Ваш счёт: ' + score
    scoreContainer.appendChild(scoreText)
  }
  scoreUpdate(score){
    let scoreText = document.getElementById('scoreText')
    scoreText.innerText = 'Ваш счёт: ' + score
  }
}
