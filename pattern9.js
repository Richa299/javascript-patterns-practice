let n = 4;
let star = "";
let k = 64;
for (let i = 1; i <= n; i++) {
  k = 64;
  for (let j = 1; j <= n + (n - 1); j++) {
    if (j >= n - i + 1 && j <= i + (n - 1)) {
      if (j <= n) {
        star += String.fromCharCode(++k);
      } else {
        k--;
        star += String.fromCharCode(k);
      }
    } else if (j <= i + (n - 1)) {
      star += " ";
    }
  }
  star += "\n";
}
console.log(star);
