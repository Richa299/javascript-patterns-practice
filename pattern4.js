let k = 10;
let star3 = "";
let p = 0;
for (let i = 1; i <= k; i++) {
  let p = i;
  for (let j = 1; j <= k * 2; j++) {
    if (j <= i) {
      star3 += j;
    } else if (j > k * 2 - i) {
      star3 += p;
      p--;
    } else {
      star3 += " ";
    }
  }
  star3 += "\n";
}
console.log(star3);
