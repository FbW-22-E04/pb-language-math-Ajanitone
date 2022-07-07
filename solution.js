console.log("01a: The lowest number is", Math.min(-1, 0, 1, 2, 3, 4));

console.log("01b: The highest number is", Math.max(-1, 0, 1, 2, 3, 4));

console.log("-------------------------------------------");

console.log(
  "2a: 3321.32321 rounded-up to nearest integer:",
  Math.round(3321.32321)
);

console.log("2ai:326.76 rounded-up to nearest integer:", Math.round(326.76));

console.log("2aii:76788.7 rounded-up to nearest integer:", Math.round(76788.7));

console.log("2aiii:-9.78 rounded-up to nearest integer:", Math.round(-9.78));

console.log("2aiv:43.342 rounded-up to nearest integer:", Math.round(43.342));

console.log("-------------------------------------------");

console.log("2bi:326.76 rounded-down to nearest integer:", Math.ceil(326.76));

console.log(
  "2bii:76788.7 rounded-down to nearest integer:",
  Math.ceil(76788.7)
);

console.log("2biii:-9.78 rounded-down to nearest integer:", Math.ceil(-9.78));

console.log("2biv:43.342 rounded-down to nearest integer:", Math.ceil(43.342));

console.log("-------------------------------------------");

const random = Math.ceil(Math.random() * 6);
console.log("03: Random intergers from 1 to 6:", random);

console.log("---------------Extra Exercises---------------");

const sideA = 3;
const SideB = 4;
const sideC = Math.sqrt(Math.pow(sideA, 2) + Math.pow(SideB, 2));

console.log(`01:The hypotenuse is ${sideC}`);

console.log("---------------Extra Exercises---------------");

const num = 6;
const num1 = 5;
const num2 = 9;
const mean = (9 + 5) / 2;
console.log(`02: The midrange is ${mean}`);

console.log("---------------Extra Exercises---------------");

const radius = 1;
const area = Math.PI * Math.sqrt(radius);
console.log("03: The area of the circle is", area);

console.log("---------------Extra Exercises---------------");
const random1 = Math.ceil(Math.random() * 6);
console.log("04: Random numbers between 1 & 6:", random1);

console.log("---------------Extra Exercises---------------");

const nums = 1749;
console.log(
  `05a:  1749 rounded to nearest hundred`,
  Math.ceil(Math.round(nums - 49))
);

const nums1 = 856.12;

console.log(
  `05a:  856.12 rounded to nearest hundred`,
  Math.ceil(Math.round(nums1 + 44))
);
