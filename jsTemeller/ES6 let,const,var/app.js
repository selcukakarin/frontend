// var
var a;
console.log(a);

var name = "selçuk";
var name = "alican";
console.log(name);

name = "mustafa";
console.log(name);

var u, y;
u = 10;
y = 10;
console.log(u + y);

// let
let x = "kamuran";
console.log(x);
x = "ekrem";
console.log(x);

// let ile var arasındaki fark
// let ile tanımlanan değişken aynı isimle yeniden tanımlanamaz.

let k, l;
k = 10;
l = 20;

console.log(k + l);

// Const
const dene = "selçuk";
console.log(dene);
// hata const ile atanan değer değişmez
// dene="ali";
// console.log(name);
// hata const ile oluşturulan değişkene oluşturulduğu yerde değer verilmeli
// const deneme;
// deneme=10;
// console.log(deneme);

const at = [1, 2, 3, 4, 5];
console.log(at);
// değer ataması yapılmadı -- a'nın refere ettiği yerdeki değerlere ekleme yapıldı. bellekteki yerde ekleme oldu
at.push("a");
console.log(at);