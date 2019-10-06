const person = {
    name: "selçuk akarın",
    age: 25,
    salary: 3000
};

const langs = ["Python", "Java", "C++", "Php"];

const name = "selçuk";

// For in 

// Object - objenin içinde gezmek için kullandık
for (let prop in person) {
    console.log(prop, person[prop]);
}
// çıktı
// name selçuk akarın
// age 25
// salary 3000

// Array - dizi içinde gezmek için kullandık
for (let index in langs) {
    console.log(index, langs[index]);
}

// String - string üzerinde gezdik
for (let index in name) {
    console.log(index, name[index]);
}

// For of

for (let value of person) {
    console.log(person);
}
//Uncaught TypeError: person is not iterable

//Object

for (let value of langs) {
    console.log(value);
}

// String

for (let character of name) {
    console.log(character);
}