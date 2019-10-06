// C# veya java class tabanlı dillerdir.
// fakat javascript prototype tabanlı bir dildir.

const object = new Object(); // Object Literal (sözlük yapısı)
const object2 = new Object(); // Object Literal (sözlük yapısı)
object.name = "Selçuk";
console.log(object);

function Employee(name, age) {
    this.name = name;
    this.age = age;
    this.showInfos = function () {
        console.log("Bilgiler gösteriliyoo");
    }
    this.toString = function () { // prototype'daki toString override edildi.
        console.log("selam sana ey dost");
    }
}
const emp1 = new Employee("Selçuk", 24);
console.log(emp1);
// oluşturulan emp1 objesi içerisindeki proto metodlarına ulaşabildik. prototype mantığı - toString()
console.log(emp1.toString()); // [object Object]

//// Farklı özellik
// eğer genel metodlarımız var ise function'un prototype'ın içine tanımlayıp her objede kullanabiliriz - Kod tekrarı önlenir

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

// Employee fonksiyonunun prototype'ine metod tanımladık ve bu metod her objede var oldu
Employee.prototype.showInfos = function () {
    console.log("İsim : " + this.name + " Yaş :" + this.age);
}
const emp1 = new Employee("Selçuk", 24);
const emp2 = new Employee("Ali", 15);

emp1.showInfos();
emp2.showInfos();