import PositionsTree from "./posiitons-tree";

export default function canvasTree(canvas, tree) {
  const { offsetWidth, offsetHeight } = canvas;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, offsetWidth, offsetHeight);
  const fontSize = offsetWidth * 0.03;
  ctx.font = `${fontSize}px black`;
  const positionsTree = new PositionsTree(tree, canvas);
  drawPoint(ctx, positionsTree.root);
}

function drawPoint(ctx, point) {
  const { x, y, radius, left, right, value } = point;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  const fillColor = ctx.fillStyle;
  const strokeColor = ctx.strokeStyle;
  if (point.node.isRed || point.node.isBlack) {
    ctx.strokeStyle = "#fff";
  }
  if (point.node.isRed) {
    ctx.fillStyle = "#FC0D1C";
    ctx.fill();
  }
  if (point.node.isBlack) {
    ctx.fillStyle = "#414141";
    ctx.fill();
  }
  ctx.stroke();
  ctx.closePath();
  ctx.fillStyle = fillColor;
  ctx.strokeStyle = strokeColor;
  const text = value;
  const measure = ctx.measureText(text);
  ctx.strokeText(text, x - measure.width / 2, y + 4, 20);

  if (left) {
    drawPoint(ctx, left);

    const angle = calculateAngle(left, point);
    drawArrow(
      ctx,
      x + Math.cos(angle) * radius,
      y + Math.sin(angle) * radius,
      left.x - Math.cos(angle) * left.radius,
      left.y - Math.sin(angle) * left.radius
    );
  }
  if (right) {
    drawPoint(ctx, right);

    const angle = calculateAngle(right, point);
    drawArrow(
      ctx,
      x + Math.cos(angle) * radius,
      y + Math.sin(angle) * radius,
      right.x - Math.cos(angle) * right.radius,
      right.y - Math.sin(angle) * right.radius
    );
  }
}

function calculateAngle(node1, node2) {
  return Math.atan2(node1.y - node2.y, node1.x - node2.x);
}

function drawArrow(ctx, fromX, fromY, toX, toY) {
  ctx.beginPath();
  const headlen = 5;
  const angle = Math.atan2(toY - fromY, toX - fromX);
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.lineTo(
    toX - headlen * Math.cos(angle - Math.PI / 6),
    toY - headlen * Math.sin(angle - Math.PI / 6)
  );
  ctx.moveTo(toX, toY);
  ctx.lineTo(
    toX - headlen * Math.cos(angle + Math.PI / 6),
    toY - headlen * Math.sin(angle + Math.PI / 6)
  );
  ctx.stroke();
  ctx.closePath();
}
