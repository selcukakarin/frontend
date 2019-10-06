// Mapler - Key(Anahtar) - Value(Değer)

let myMap = new Map(); // Map oluşturuldu.

console.log(typeof myMap); // object
console.log(myMap); // Map(0) {}

const key1 = "Selçuk";
const key2 = {
    a: 10,
    b: 7
};
const key3 = () => 2;

// set
myMap.set(key1, "String değer");
myMap.set(key2, "Object Literal değer");
myMap.set(key3, "Function değer");

// get

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));
//String değer
//Object Literal değer
//Function değer

console.log(myMap);
//Map(3) {"Selçuk" => "String değer", {…} => "Object Literal değer", ƒ => "Function değer"}


// map boyutu

console.log(myMap.size); // 3

const cities = new Map();
cities.set("İstanbul", 5);
cities.set("Ankara", 15);
cities.set("İzmir", 4);

// For Each
cities.forEach(function (value, key) {
    console.log(key, value);
});

// For of
for (let [key, value] of cities) { // Destructing
    console.log(key, value);
}

// Map Keys
for (let key of cities.keys()) {
    console.log(key);
}

// Map values
for (let value of cities.values()) {
    console.log(value);
}

// Array'lerden map oluşturma
const array = [
    ["key1", "value1"],
    ["key2", "value2"]
];
const lastMap = new Map(array);
console.log(lastMap);

// Map'lerden array oluşturma

const cities = new Map();

cities.set("İstanbul", 5);
cities.set("Ankara", 15);
cities.set("İzmir", 4);

const array = Array.from(cities);
// [["İstanbul",5],["Ankara",15],["İzmir",4]] şeklinde bir array oluşturuldu.
console.log(array);