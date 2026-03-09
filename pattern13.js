let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == 1 || i == n) {
      star += "*";
    } else if (j == 1 || j == n) {
      star += "*";
    } else {
      star += " ";
    }
  }

  star += "\n";
}
console.log(star);
