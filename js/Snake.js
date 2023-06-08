class Snake {
  constructor() {
    this.body = [
      { x: 0, y: 0 },
      { x: 1, y: 0 }
    ];
  }
  getPosition() {
    return this.body;
  }
  move(colCount, snakeDirection) {
    const lastSegment = this.body[this.body.length - 1];
    let newSegment;
  
    switch (snakeDirection) {
      case 'up':
        newSegment = { x: lastSegment.x, y: lastSegment.y - 1 };
        break;
      case 'down':
        newSegment = { x: lastSegment.x, y: lastSegment.y + 1 };
        break;
      case 'left':
        newSegment = { x: lastSegment.x - 1, y: lastSegment.y };
        break;
      case 'right':
        newSegment = { x: lastSegment.x + 1, y: lastSegment.y };
        break;
      default:
        break;
    }
    this.body.push(newSegment);
    this.body.shift();
  }  
}

