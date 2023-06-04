class Engine {
  constructor() {
    this.timestamp = performance.now();
  }

  tick(methods) {
    const currentTime = performance.now();
    const elapsedTime = currentTime - this.timestamp;
    console.log('Работает1');
    if (elapsedTime >= 3000) {
      methods();
      console.log('checkup');
      this.timestamp = currentTime;
    }

    requestAnimationFrame(() => this.tick(methods));
  }

  run(methods) {
    requestAnimationFrame(() => this.tick(methods));
  }
}