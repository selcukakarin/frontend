const merhaba = function () {
    console.log("Merhaba");
}
merhaba();

// Arrow function

const merhaba = () => {
    console.log("Merhaba");
}
merhaba();

const merhaba = (firstName, lastName) => {
    console.log("Selam", firstName, lastName);
}
merhaba("selcuk", "akarın");

// eğer arrow function tek parametre alıyorsa parentezler içine yazmaya gerek yok
// eğer arrow function tek işlev yapıyorsa tek satır kod varsa süslü paranteze de gerek yok
const merhaba = firstName => console.log("Selam", firstName);
merhaba("selcuk");

const merhaba = (firstName, lastName) => console.log("Selam", firstName, lastName);
merhaba("selcuk", "akarın");

const cube = function (x) {
    return x * x * x;
}
console.log(cube(4));

const cube = x => {
    return x * x * x;
}

// arrow function tek bir işlev yapıyorsa return kullanmaya da gerek yok
const cube = x => x * x * x;
console.log(cube(5))