// Değişken oluşturma

var a = 20;
var b = 10;
var c = 30;
console.log(a, b, c);

// Primitive veri tipleri

//Number
var a = 10; // Number veri tipi
var b = 3.14; // Number veri tipi
console.log(a);
console.log(typeof (a));
console.log(b);
console.log(typeof (b));

// String
var name = "selçuk";
console.log(name);
console.log(typeof (name));

// Boolean
var x = true;
console.log(x);
console.log(typeof (x));

// Null
var a = null;
console.log(a);
console.log(typeof (a)); // object döner

// undefined
var k;
console.log(k); // undefined döner


// Referans veri tipleri

// numbers
var numbers = [1, 2, 3, 4, 5]
console.log(numbers);
console.log(typeof numbers); // object döner
console.log(numbers[0]);

// kendi objemiz
var person = {
    name: "selçuk",
    age: "24"
}
console.log(person)
console.log(typeof person) // object döner

// Date
var date = new Date();
console.log(date);
console.log(typeof date); // object döner

// function
var merhaba = function () {
    console.log("merhaba");
}

console.log(merhaba);
console.log(typeof merhaba); // function döner

// primitive veritipleri sadece o değişkenin değeridir.
// referans veri tipleri bellekte bir yeri refere eder ve o bellekteki yeri biz kullanabiliriz.
// örnek
//////////////////////////////
//Primitive
// sadece değerler kopyalanır bellekteki yerler ile ilgili bir olay yok
var a = 10;
var b = a;
console.log(a, b);
a = 20;
console.log(a, b);
//////////////////////////////
//////////////////////////////
// bu örnekte ise bellekteki yerler değişir
var a = [1, 2, 3];
var b = a;
a.push(4);
// b değişmez b'nin gösterdiği yerdeki değerler değişti
console.log(b);
//////////////////////////////