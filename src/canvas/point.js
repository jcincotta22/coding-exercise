export default class Point {
  constructor(x, y, radius, value, node) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.value = value;
    this.node = node;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
