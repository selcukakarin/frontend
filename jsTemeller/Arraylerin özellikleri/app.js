let value;

const numbers = [43, 56, 33, 25, 22, -5, 2, 3, 4, 2, 1];
const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
const langs = ["Python", "Java", "C", "Js"];
const a = ["Selam", 22, null, undefined, 3.15];

// uzunluk
value = numbers.length;

// index
value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

// index değer değiştirme
numbers[2] = 100;

value = numbers

// index of
value = numbers.indexOf(100);

// array in sonuna değer ekleme - push
numbers.push(5000);
value = numbers;

// arrayin başına değer ekleme -- unshift
numbers.unshift(888);
value = numbers;

// arrayin sonundan değer atma
numbers.pop();
value = numbers;

// arrayin başından eleman atma
numbers.shift();
value = numbers;

// belli bir indexten belli bir indexe kadar ki verileri diziden çıkarır - splice
numbers.splice(0, 2);
value = numbers;

// Reverse
numbers2.reverse();
value = numbers2;

// sort - alfabetik sıralama
value = numbers.sort()

// sayısal değere göre sıralama
value = numbers.sort(function (x, y) {
    //Küçükten büyüğe
    return x - y;
})

value = numbers.sort(function (x, y) {
    //Büyükten küçüğe
    return y - x;
})

console.log(value);