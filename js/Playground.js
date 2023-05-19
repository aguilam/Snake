import { GameConfig } from './Main.js';
class PlayGround{
  constructor() {
    this.playGroundConfig = GameConfig;
  }
  FieldDraw(){
    this.FieldContainerCreate()
    this.CellsCreate()
  }
  FieldContainerCreate(){
    let container = document.getElementById('GameContainer');
    const FieldContainer = document.createElement('div');
    this.FieldContainerCustomization(FieldContainer)
    FieldContainer.setAttribute('id', 'FieldContainer');
    container.appendChild(FieldContainer);
  }
  FieldContainerCustomization(FieldContainer){
    FieldContainer.style.width = `${this.playGroundConfig.FieldConfig.width}px`;
    FieldContainer.style.height = `${this.playGroundConfig.FieldConfig.height}px`;
    FieldContainer.style.background = `${this.playGroundConfig.FieldConfig.background}`;
    FieldContainer.style.border = `${this.playGroundConfig.FieldConfig.borderWidth} solid ${this.playGroundConfig.FieldConfig.borderColor}`;
    FieldContainer.style.display = 'grid'
    FieldContainer.style.gridTemplateColumns = `repeat(${this.playGroundConfig.FieldSize.colCount}, 1fr)`;
  }
  CellsCreate(){
    for (let index = 0; index < (this.playGroundConfig.FieldSize.rowCount * this.playGroundConfig.FieldSize.colCount); index++) {
      const cell = document.createElement('div');
      this.CellsCustomization(cell);
      cell.setAttribute('number', index);
      FieldContainer.appendChild(cell);
    }
  }
  CellsCustomization(cell){
    cell.style.width = `${this.playGroundConfig.CellsConfig.width}px`;
    cell.style.height = `${this.playGroundConfig.CellsConfig.height}px`;
    cell.style.background = `${this.playGroundConfig.CellsConfig.background}`;
    cell.style.border = `${this.playGroundConfig.CellsConfig.borderWidth} solid ${this.playGroundConfig.CellsConfig.borderColor}`;
  }
  
}