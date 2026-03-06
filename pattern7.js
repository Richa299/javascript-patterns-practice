let n = 5;
let star = "";
let k = 65;
for (let i = 1; i <= n; i++) {
  k = 65;
  for (let j = 1; j <= n - i + 1; j++) {
    star += String.fromCharCode(k);
    k++;
  }
  star += "\n";
}
console.log(star);
