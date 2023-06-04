class Snake {
  body = [0];
  getPosition() {
    return this.body;
  }
  move(colCount, snakeDirection) {
    switch (snakeDirection) {
      case 'up':
        this.body.push(this.body[this.body.length - 1] - colCount);
        console.log(this.body);
        this.body.shift();
        console.log(this.body);
        console.log(snakeDirection);
        break;
      case 'down':
        this.body.push(this.body[this.body.length - 1] + colCount);
        console.log(this.body);
        this.body.shift();
        console.log(this.body);
        console.log(snakeDirection);
        break;
      case 'left':
        this.body.push(this.body[this.body.length - 1] - 1);
        console.log(this.body);
        this.body.shift();
        console.log(this.body);
        console.log(snakeDirection);
        break;
      case 'right':
        this.body.push(this.body[this.body.length - 1] + 1);
        console.log(this.body);
        this.body.shift();
        console.log(this.body);
        console.log(snakeDirection);
        break;
      default:
        break;
    }
  }
}

