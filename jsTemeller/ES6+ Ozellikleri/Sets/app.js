// Sets - Kümeler
// Set içerisinde bir değer sadece bir kez var olabilir.
const mySet = new Set();
mySet.add(100);
mySet.add(2);
mySet.add(100);
mySet.add(3.14);
mySet.add("Selçuk");
mySet.add(true);
mySet.add([1, 2, 3]);
mySet.add({
    a: 1,
    b: 2
});

// const mySet2=new Set([100,2,100,3.14,"Selçuk"]);

// console.log(mySet2);
// console.log(mySet);

// Size
console.log(mySet.size);

// Delete Metodu
mySet.delete("Selçuk");
console.log(mySet);

// has metodu
console.log(mySet.has("Selçuk"));
console.log(mySet.has(100));
console.log(mySet.has([1, 2, 3])); // buradaki [1,2,3] arrayi şuanda bellekte var oldu diğer array'le alakası yok sonuç false

// For Each
mySet.forEach(function (value) {
    console.log(value);
});

// For of
for (let value of mySet) {
    console.log(value);
}

// Set'ten array oluşturma
const array = Array.from(mySet);

console.log(array);