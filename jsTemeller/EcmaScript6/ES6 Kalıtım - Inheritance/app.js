class Person { // SuperClass - BaseClass
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfos() {
        console.log("isim : " + this.name + " yaş: " + this.age);
    }
}
// DerivedClass - SubClass - ChildClass
class Employee extends Person { // Employee'i Person class'ından kalıttık. Tüm metodları Employee'ye çektik.
    constructor(name, age, salary) { // constructor override
        // this.name=name;
        // this.age=age;
        super(name, age); // üst sınıftaki metodu (constructor) kullandık
        this.salary = salary;
    }
    showInfos() { // Person'ın showInfos metodu override edildi
        console.log("isim: " + this.name + " yaş : " + this.age + " maaş: " + this.salary);
    }
    toString() { // Overriding
        console.log("Employee");
    }
    // Ekstra metodlar da ekleyebiliriz
    raiseSalary(amount) {
        // this.salary=this.salary+amount;
        this.salary += amount;
    }
}
const emp = new Employee("selçuk", 23, 5000);
console.log(emp)
emp.raiseSalary(321);
emp.showInfos();
emp.toString();