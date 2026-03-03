let n = 6;
let star = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    if (i % 2 !== 0) {
      if (j % 2 !== 0) star += "1";
      else star += "0";
    } else {
      if (j % 2 !== 0) {
        star += "0";
      } else star += "1";
    }
  }
  star += "\n";
}

console.log(star);
