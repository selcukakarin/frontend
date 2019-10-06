let value;
const programmer = {
    name: "Selçuk Akarın",
    age: 24,
    email: "selcukakarin@gmail.com",
    langs: ["Python", "Java", "Js"],
    address: {
        city: "İstanbul",
        street: "Halitbey"
    },

    work: function () {
        console.log("Programcı çalışıyor...");
    }
}

value = programmer;

value = programmer.email;
// value=programmer["email"];

value = programmer.langs;

value = programmer.address.city;

programmer.work();

const programmers = [{
        name: "alican",
        age: 15
    },
    {
        name: "mustafa",
        age: 28
    }
];

value = programmers[1];
value = programmers[1].name;

console.log(value);