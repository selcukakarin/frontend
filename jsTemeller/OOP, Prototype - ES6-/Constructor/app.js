console.log(this); // Global Scope

const emp1 = { // Object Literal
    name: "Selçuk",
    age: 24,
    showInfos: () => console.log("Bilgiler gösterildi.")
};

const emp2 = {
    name: "Selçuk",
    age: 24
};
emp1.salary = "4000";
emp1.showInfos();
console.log(emp1);

function Employee() { // Yapıcı fonksiyon - Constructor
    this.name = "Selçuk";
}

const emp1 = new Employee();
console.log(emp1);
// Employee {name: "Selçuk"}

const emp2 = new Employee();
console.log(emp2);

function Employee(name, age, salary) { // Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;
}
const emp1 = new Employee("Selçuk", 24, 3500);
const emp2 = new Employee("Ali", 17, 4000);
console.log(emp1);
console.log(emp2);

function Employee(name, age, salary) { // Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;
    console.log(this);
}

const emp1 = new Employee("Selçuk", 24, 3500);
const emp2 = new Employee("Ali", 17, 4000);

function Employee(name, age, salary) { // Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    this.showInfos = function () {
        console.log(this.name, this.age, this.salary);
    }
}

const emp1 = new Employee("Selçuk", 24, 3500);
const emp2 = new Employee("Ali", 17, 4000);
emp1.showInfos();
emp2.showInfos();