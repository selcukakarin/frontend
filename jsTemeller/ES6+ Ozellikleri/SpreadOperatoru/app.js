// Spread Operator

const langs = ["Python", "C++", "Java", "Php"];

console.log(langs[0], langs[1], langs[2], langs[3]);
// ...langs = spread operatörü
console.log(...langs)
const langs2 = ["Js", "C#", langs[0], langs[1], langs[2], langs[3]]
const langs2 = ["Js", "C#", ...langs]
console.log(langs2);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// spread
const [a, b, ...numbers2] = numbers;
console.log(a, b);
// çıktı 1 2
console.log(numbers2);
// çıktı [3, 4, 5, 6, 7, 8, 9]

const addNumbers = (a, b, c) => console.log(a + b + c);
const numbers = [100, 200, 300];
// addNumbers(numbers[0],numbers[1],numbers[2]);
// spread
addNumbers(...numbers);