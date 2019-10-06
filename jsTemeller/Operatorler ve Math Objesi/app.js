let value;

const value1 = 20;

const value2 = 4;

// Aritmetik operatörler

value = value1 + value2
value = value1 - value2
value = value1 * value2
value = value1 / value2
value = value1 % value2

// Math objesi

value = Math.PI;
value = Math.E;

// yuvarlar
value = Math.round(3.6); // 4'e yuvarlar
value = Math.round(3.5); // 4'e yuvarlar
value = Math.round(3.2); //3'e yuvarlar

// yukarı yuvarlar
value = Math.ceil(3.1); // 4'e yuvarlar
value = Math.ceil(4.7); // 5'e yuvarlar

// aşağı yuvarlar
value = Math.floor(3.7); // 3'e yuvarlar
value = Math.floor(5.9); // 5'e yuvarlar

// karekök alma
value = Math.sqrt(16); // 4
value = Math.sqrt(80); // 8.94

// mutlak değer
value = Math.abs(-55); // 55

// üs al
value = Math.pow(8, 3); // 8*8*8
value = Math.pow(4, 2); // 4*4

// max-min
value = Math.max(10. - 4, 52, 11);
value = Math.min(-55, -5, 5, 11);

// random 0-1 arası float değer üretir -- 0 dahil 1 değil
value = Math.random();

// 0-20 arası float
value = Math.random() * 20;

// 1-21 arası float
value = Math.random() * 20 + 1;

// 0-20 arası int
value = Math.floor(Math.random() * 20);

console.log(value);