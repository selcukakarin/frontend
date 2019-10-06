Primitive
let a = "Selçuk";
let b = "Akarın";

if (a === b) {
    console.log("Eşit")
}
// primitive tipte değerler tutulduğu içi n değerler karşılaştırılır sonuc Eşit

// Referans
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5];

if (array1 === array2) {
    console.log("Eşit");
}
// referans tiplerde ise bellekte refere ettiği yer tutulduğu için, tutulan yerler karşılaştırılır sonuç Eşit değil
const person1 = {
    name: "Selçuk",
    age: 24
}
const person2 = {
    name: "Selçuk",
    age: 24
}
if (person1 === person2) {
    console.log("Eşit");
}
// Objeler de bir referans tipi olduğu için eşit değil sonucunu aldık.

const cities = new Map();
const key = [1, 2, 3];
cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set([1, 2, 3], "Array");

console.log(cities.get("Ankara"));
// Ankara primitive tipte olduğu için Ankara'nın value'suna karşılık gelen 5 değerine ulaştık.
console.log(cities.get([1, 2, 3]));
// çıktısı undefined olur. Bunun sebebi yukarıda set ile tanımlanan array ile şu anda oluşan arrayin farklı yerleri göstermesidir.
// yukarıdaki satırdaki problemi çözmek için key dizisini tanımladık
cities.set(key, "Array");
console.log(cities.get(key));