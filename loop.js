const n = parseInt(prompt("So nguyen n"));
for (let i = n; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let a = parseInt(prompt("Nhap a: "));
var b = parseInt(prompt("Nhap b: "));
for (let i = a; i <= b; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

let f = parseInt(prompt("so"));
let multiple = 1;
for (let i = f; i > 0; i--) {
  multiple *= i;
}
console.log(`Giai thua cua ${f} la: ${multiple}`);

// nhap 1 so nguyen va tinh tong cac so do
const m = parseInt(prompt("Tong cua so nguyen "));
for (let i = m; i > 0; i = Math.floor((i /= 10))) {
  sum += i % 10;
}
console.log(sum);

sum = "";
const h = parseInt(prompt("Tong cua so nguyen "));
for (i = h; i > 0; i = Math.floor((i /= 10))) {
  sum += (i % 10).toString();
}
console.log(sum);

let count = 0;
const e = parsetInt(prompt("Input number: "));
for (i = 1; i <= e; i++) {
  if (e % i === 0) {
    console.log(i);
    count++;
  }
}
console.log(` co so uoc la ${count}`);

const c = parseInt(prompt("c="));
const d = parseInt(prompt("d="));
result = 1;
for (i = 1; i <= d; i++) {
  result *= c;
}
console.log(result);
