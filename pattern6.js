let n = 5;
let star = "";
let kk = 0;
for (let i = 1; i <= n; i++) {
  kk = 65;
  for (let j = 1; j <= i; j++) {
    star += String.fromCharCode(kk);
    star += " ";
    kk++;
  }
  star += "\n";
}
console.log(star);
