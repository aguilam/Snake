export const GameConfig = {
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

const myPlayGround = new PlayGround();

function main() {
  const engine = new Engine();
  engine.FieldInitializeation();
  engine.run();
}

main();

