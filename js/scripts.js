function getTriangleArea(a, h) {
  if ((a > 0) && (h > 0)) {
    return a * h / 2;
  } else if ((a < 0) || (h < 0)) {
    return "Nieprawidłowe dane";
  }
}

console.log(getTriangleArea(10, 6));

var Triangle1Area = getTriangleArea(5, 6);
var Triangle2Area = getTriangleArea(20, 5);
var Triangle3Area = getTriangleArea(4, 4);

console.log(Triangle1Area);
console.log(Triangle2Area);
console.log(Triangle3Area);