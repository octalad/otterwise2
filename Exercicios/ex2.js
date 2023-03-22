let arr = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];
let par = [];
let imp = [];
let pos = [];
let neg = [];

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > 0) {
    pos[pos.length + 1] = arr[i];
  } else {
    neg[neg.length + 1] = arr[i];
  }

  if (arr[i] % 2 == 0) {
    par[par.length + 1] = arr[i];
  } else {
    imp[imp.length + 1] = arr[i];
  }
}

console.log(`Pares ${par}`);
console.log(`impares ${imp}`);
console.log(`positivos ${pos}`);
console.log(`negativos ${neg}`);
