let n = 5;
let star = "";
let kk = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    star += kk;
    star += " ";
    kk++;
  }
  star += "\n";
}
console.log(star);
