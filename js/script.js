const GameConfig = {
  FieldSize: {

  },
  FieldConfig: {
    
  },
  CellsSize: {
    
  }
}
class Engine {
  constructor() {
    this.PlayGround = new PlayGround();
    this.Food = false;
  }
  FieldInitializeation() {
    this.PlayGround.FieldDraw();
  }

  tick() {
    console.log('Работает')
    if (this.Food == false) {
      console.log('Еда создана')
      this.Food = true
    }
    requestAnimationFrame(() => this.tick());
  }

  run() {
    requestAnimationFrame(() => this.tick());
  }
}

class PlayGround{
  constructor() {
    this.RowCount = 10;
    this.ColCount = 10;
    let FieldContainerStyle = {  
      Width: '900px', 
      Height: '900', 
      Ground: 'green', 
      BorderWidth: '10px', 
      BorderColor: 'red'     
    };
    this.FieldContainerWidth = '900'
    this.FieldContainerHeight = '900'
    this.FieldContainerBackground = 'green'
    this.FieldContainerBorderWidth = '10px'
    this.FieldContainerBorderColor = 'red'
    this.CellWidth = '60'
    this.CellHeight = '60'
    this.CellBackground = 'blue'
    this.CellBorderWidth = '2px'
    this.CellBorderColor = 'red'
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
    FieldContainer.style.width = `${this.FieldContainerWidth}px`;
    FieldContainer.style.height = `${this.FieldContainerHeight}px`;
    FieldContainer.style.background = `${this.FieldContainerBackground}`;
    FieldContainer.style.border = `${this.FieldContainerBorderWidth} solid ${this.FieldContainerBorderColor}`;
    FieldContainer.style.display = 'grid'
    FieldContainer.style.gridTemplateColumns = `repeat(${this.ColCount}, 1fr)`;
  }
  CellsCreate(){
    for (let index = 0; index < this.RowCount * this.ColCount; index++) {
      const cell = document.createElement('div');
      this.CellsCustomization(cell);
      cell.setAttribute('number', index);
      FieldContainer.appendChild(cell);
    }
  }
  CellsCustomization(cell){
    cell.style.width = `${this.CellWidth}px`;
    cell.style.height = `${this.CellHeight}px`;
    cell.style.background = `${this.CellBackground}`;
    cell.style.border = `${this.CellBorderWidth} solid ${this.CellBorderColor}`;
  }
  
}


function main() {
  const engine = new Engine();
  engine.FieldInitializeation();
  engine.run();
}

main();

