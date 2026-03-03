let n = 5;
let star = "";
for (let i = 1; i <= n + n - 1; i++) {
  for (let j = 1; j <= n; j++) {
    if (i <= n && j <= i) {
      star += "*";
    } else if (i > n && j <= n * 2 - i) {
      star += "*";
    } else {
      star += " ";
    }
  }
  star += "\n";
}
console.log(star);
