let n = 6;
let star = "";
let k = 65;
for (let i = 1; i <= n; i++) {
  k = 65;
  let p = i;
  for (let j = 1; j <= i; j++) {
    k = k + (n - p);
    star += String.fromCharCode(k);
    star += " ";
    p = p - 1;
    k = 65;
  }
  star += "\n";
}
console.log(star);
