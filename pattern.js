let n = 8;
let star = "";
for (let i = 1; i <= n * 2; i++) {
  for (let j = 1; j <= n + (n - 1); j++) {
    if (i <= n && j >= n + 1 - i && j <= n - 1 + i) {
      star += "*";
    } else if (i > n && j >= i - n && j <= n + (n - (i - n))) {
      star += "*";
    } else {
      star += " ";
    }
  }
  star += "\n";
}
console.log(star);
