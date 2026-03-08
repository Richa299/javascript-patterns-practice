let n = 3;
let star = "";
let k = 0;
let boolean = false;
for (let i = 1; i <= n * 2; i++) {
  for (let j = 1; j <= n * 2; j++) {
    if (i <= n) {
      if (j <= n - i + 1) {
        star += "*";
      } else if (j >= n + i) {
        star += "*";
      } else {
        star += " ";
      }
    } else if (i > n) {
      if (j <= i - n) {
        star += "*";
      } else if (j >= n * 2 - k) {
        boolean = true;
        star += "*";
      } else {
        star += " ";
      }
    }
  }
  if (boolean === true) {
    k++;
    boolean = false;
  }
  star += "\n";
}
console.log(star);
