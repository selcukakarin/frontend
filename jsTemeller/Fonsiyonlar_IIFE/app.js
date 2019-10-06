// Fonksiyon Tanımlama

function merhaba() {
    console.log("Merhaba");
}
merhaba(); // Fonksiyon çağrısı (Function Call)

function bilgiler(name, age) {
    if (typeof name == "undefined") name = "Bilgi yok";

    if (typeof age == "undefined") age = "Bilgi yok";
    console.log(`İsim: ${name} Yaş: ${age}`);
}

bilgiler("Selçuk", 24); // Fonksiyon çağrısı (Function Call)
bilgiler("Alican", 14);
bilgiler(); // İsim: undefined Yaş: undefined || İsim: Bilgi yok Yaş: Bilgi yok


function bilgiler(name = "Bilgi yok", age = "Bilgi yok") {

    console.log(`İsim: ${name} Yaş: ${age}`);
}

bilgiler("Mustafa"); // İsim: Mustafa Yaş: Bilgi yok

// return 
////////////////////////////
//hatalı kullanım
// function square(x){
//     console.log(x*x);
// }
// function cube(x){
//     console.log(x*x*x);
// }
// let a=square(12);
// a=cube(a); // hata NaN
////////////////////////////
function square(x) {
    return x * x;
    console.log("çalışmaz");
}

function cube(x) {
    return x * x * x;
}
let a = square(2);
a = cube(a);
console.log(a)

let x = cube(square(2));
console.log(x)

// Function expression

const selam = function (name = "Bilgi yok") {
    console.log("Merhaba " + name);
};

selam("selçuk");
selam();

// Immediately Invoked Function Expression (IIFE) - Tanımlandığı yerde kullanılan fonksiyon
(function (name) {
    console.log("Selam " + name);
})("Alican");


const database = {
    host: "localhost",
    add: function () {
        console.log("Eklendi.");
    },
    get: function () {
        console.log("Elde edildi");
    },
    update: function (id) {
        console.log(`Id: ${id} güncellendi.`);
    },
    delete: function (id) {
        console.log(`Id: ${id} silindi.`);
    }
}

console.log(database.host);

database.add();
database.update(99);