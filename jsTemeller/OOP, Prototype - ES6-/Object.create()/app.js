// EcmaScript 6'dan önce
// Bir objeyi oluştururken prototype'ını başka bir objeden almak istersen object.create() metodunu kullanırız.
const obj = {
    test1: function () {
        console.log("Test 1");
    },
    test2: function () {
        console.log("Test2");
    }
}
console.log(obj)

// Object.create(obj) ile emp objemizin protosunu obj objemizin protosu yaptık.
// emp çıktısı aşağıdadır
//age: 24
// name: "Selçuk"
// __proto__: Object
const emp = Object.create(obj);
emp.name = "Selçuk";
emp.age = 24;
console.log(emp);

// örnek 2 ----- 
function Person() {

}
Person.prototype.test1 = function () {
    console.log("Test 1");
}
Person.prototype.test2 = function () {
    console.log("Test 2");
}
const person = new Person();

console.log(person);
// çıktı
// Person {}
// __proto__:
// test1: ƒ ()
// test2: ƒ ()
// constructor: ƒ Person()
// __proto__: Object

function Person() {

}
Person.prototype.test1 = function () {
    console.log("Test 1");
}
Person.prototype.test2 = function () {
    console.log("Test 2");
}

function Employee(name, age) {
    this.name = name;
    this.age = age;
}
// Employee fonksiyonuna person prototype'ini inherit ettik. 
//Bu sayede Employee'de bulunmayan fakat Person'da bulunan test1 ve test2 fonksiyonlarını kullanabiliriz.
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function () {
    console.log("MyTest");
}
const emp = new Employee("Selçuk", 123);
emp.test1();
console.log(emp);

// çıktı
// Employee {name: "Selçuk", age: 123}
// age: 123
// name: "Selçuk"
// __proto__: Person
// myTest: ƒ ()
// __proto__:
// test1: ƒ ()
// test2: ƒ ()
// constructor: ƒ Person()
// __proto__: Object