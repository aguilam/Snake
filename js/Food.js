class Food {
  constructor() {
    this.foods;
  }

  createFood(col, row) {
    const maxX = col - 1;
    const maxY = row - 1;
    this.foods = {
      x: Math.floor(Math.random() * (maxX - 0 + 1)) + 0,
      y: Math.floor(Math.random() * (maxY - 0 + 1)) + 0
    };
  }

  foodCheck(col, row) {
    if (this.foods === undefined) {
      this.createFood(col, row);
    }
  }
}

