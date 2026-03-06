let n = 5;
let star = "";
let k = 65;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    star += String.fromCharCode(k);
  }
  star += "\n";
  k++;
}
console.log(star);
