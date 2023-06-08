class Engine {
  constructor() {
    this.timestamp = performance.now();
  }

  tick(methods) {
    const currentTime = performance.now();
    const elapsedTime = currentTime - this.timestamp;
    if (elapsedTime >= speed) {
      methods();
      this.timestamp = currentTime;
    }
    requestAnimationFrame(() => this.tick(methods));
  }

  run(methods) {
    requestAnimationFrame(() => this.tick(methods));
  }
}
