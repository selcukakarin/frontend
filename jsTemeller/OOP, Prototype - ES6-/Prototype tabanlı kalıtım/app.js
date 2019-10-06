// Kalıtım - Inheritance
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function () {
    console.log("isim: " + this.name + " yaş: " + this.age);
}
const person = new Person("Selçuk", 24);
console.log(person);

function Employee(name, age, salary) {
    // this.name=name;
    // this.age=age;
    Person.call(this, name, age);
    this.salary = salary;
}
// Person'dan metodlarımızı kalıttık.   
Employee.prototype = Object.create(Person.prototype);
// prototype metodlarını override etme
// overriding
Employee.prototype.toString = function () {
    console.log("Employee");
}
Employee.prototype.showInfos = function () {
    console.log("isim : " + this.name + " yas: " + this.age + " maaş: " + this.salary);
}
const emp = new Employee("Selçuk", 24, 4000);

console.log(emp);
// kalıtılan metodların kullanımı
emp.showInfos();
console.log(emp.toString()) // Çıktı : [object Object] -- override'dan önceki durum
emp.toString();