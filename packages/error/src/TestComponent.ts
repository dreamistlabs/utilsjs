export default class TestComponent {
  private a: number;
  private b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  public add() {
    return this.a + this.b;
  }
}
