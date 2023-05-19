class Engine {
  constructor() {
    this.PlayGround = myPlayGround;
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