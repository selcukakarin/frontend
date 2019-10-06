// Syntactic Sugar = ES6

function Employee(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}
Employee.prototype.showInfos = function () {
    console.log("isim: " + this.name + " yaş: " + this.age + " maaş: " + this.salary)
}

const emp = new Employee("Selçuk", 24, 5000);
console.log(emp);

class Employee {
    // ES6 class'larında aşağıdaki kullanımdaki gibi başına function yazmadan fonksiyon tanımlayabiliyoruz.
    constructor(name, age, salary) { // constructor
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    // yine başına function koymadık
    showInfos() {
        console.log("İsim: " + this.name + " yaş: " + this.age + " maaş: " + this.salary);
    }
}
const emp = new Employee("Selçuk", 24, 4000);
console.log(emp);
emp.showInfos();