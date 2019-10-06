let number1, number2;

arr = [100, 200, 300, 400];

number1 = arr[0];
number2 = arr[1];

// Destructing

[number1, number2] = arr;
const [number1, number2] = arr;

console.log(number1, number2);

// Obje Destructing

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
};
// aşağıdaki tanımlama çalışmaz, değişkenlerin isimleri sözlük içerisindeki keylerle aynı olmalı
const {
    number1,
    number2,
    number3
} = numbers; // çalışmaz
const {
    a,
    b,
    c
} = numbers; // çalışır
// eğer farklı değişkenlere farklı isimler vermek istersek
const {
    a: number1,
    b: number2,
    c: number3
} = numbers;

console.log(number1, number2, number3);


// Function Destructing

// return dizi
const getLangs = () => ["Python", "Java", "C++"];

const [lang1, lang2, lang3] = getLangs();

console.log(lang1, lang2, lang3);

// Obje
const person = {
    name: "Selçuk Akarın",
    year: 1994,
    salary: 3000,
    showInfos: () => console.log("Bilgiler gösteriliyore...")
}

const {
    name: isim,
    year: yil,
    salary: maas,
    showInfos: bilgileriGoster
} = person;
console.log(isim, yil, maas);
bilgileriGoster();