class PlayGround{
  constructor() {
    this.playGroundConfig = GameConfig;
  }
  draw(drawArray){
    const cells = document.querySelectorAll('[number]');
    for (var i = 0; i < cells.length; i++) {
      var cell = cells[i];
      var number = parseInt(cell.getAttribute('number'));
      if (drawArray.includes(number)) {
        cell.style.background = 'green';
      } else {
        this.cellsCustomization(cell);
      }
    }
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
    FieldContainer.style.gridTemplateColumns = `repeat(${this.playGroundConfig.FieldSize.colCount}, 1fr)`;
  }
  cellsCreate(){
    for (let index = 0; index < (this.playGroundConfig.FieldSize.rowCount * this.playGroundConfig.FieldSize.colCount); index++) {
      const cell = document.createElement('div');
      this.cellsCustomization(cell);
      cell.setAttribute('number', index);
      FieldContainer.appendChild(cell);
    }
  }
  cellsCustomization(cell){
    cell.style.width = `${this.playGroundConfig.CellsConfig.width}px`;
    cell.style.height = `${this.playGroundConfig.CellsConfig.height}px`;
    cell.style.background = `${this.playGroundConfig.CellsConfig.background}`;
    cell.style.border = `${this.playGroundConfig.CellsConfig.borderWidth} solid ${this.playGroundConfig.CellsConfig.borderColor}`;
  }
}