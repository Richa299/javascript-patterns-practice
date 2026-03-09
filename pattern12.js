let n = 5;
let star = "";
for (let i = 1; i <= n * 2 - 1; i++) {
  for (let j = 1; j <= n * 2; j++) {
    if (i <= n) {
      if (j <= i || j >= n * 2 + 1 - i) {
        star += "*";
      } else {
        star += " ";
      }
    } else {
      if (j <= n * 2 - i) {
        star += "*";
      } else if (j >= i + 1) {
        star += "*";
      } else {
        star += " ";
      }
    }
  }

  star += "\n";
}
console.log(star);
