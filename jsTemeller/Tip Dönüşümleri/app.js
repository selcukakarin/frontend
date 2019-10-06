let value;

// veri tiplerini --> string

value = String(123);
value = String(3.14);
value = String(true);
value = String(false);
value = String(function () {
    console.log()
});
value = String([1, 2, 3, 4]);

value = (10).toString();
value = (3.14).toString();

// veri tipler --> Number

value = Number("123");
value = Number(null); // null = değeri var ama boş
value = Number(undefined); // NaN - Not a Number
value = Number("selam"); // NaN - Not a Number
value = Number(function () {
    console.log()
}); // NaN - Not a Number
value = Number([1, 2, 3, 4]);
value = Number("3.14");
value = parseFloat("3.15");
value = parseInt("55");

// js hata vermez şu şekilde davranır; "Selam"+"24"
const a = "Selam" + 24;
console.log(a);
console.log(typeof a);

const y = Number("54") + 24;
console.log(y);
console.log(typeof y);

console.log(value);
console.log(typeof value);