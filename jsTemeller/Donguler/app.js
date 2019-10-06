// while

let i = 0;

while (i < 10) {
    console.log(i)
    i++; // i+=1
}

let k = 10;
while (k > 0) {
    console.log(k);
    k -= 2;
}

let x = 0;
while (x < 10) {

    if (x == 5) {
        break;
    }
    console.log(x);
    x++;
}


let y = 0;
while (y < 10) {

    if (y == 5 || y == 6) {
        y++
        continue;
    }
    console.log(y);
    y++;
}

// do-while

let a = 0;
do {

    console.log(a);
    a++;

} while (a < 10);


// for
const langs = ["Python", "Java", "C#"];

let index = 0;
while (index < langs.length) {
    console.log(langs[index]);
    index++;
}

for (let indis = 0; indis < langs.length; indis++) {
    console.log(langs[indis]);
}

// forEach  - Callback Function
langs.forEach(function (dil, sira) {
    console.log(dil, sira);
});


// map
const users = [{
        name: "Mustafa",
        age: 28
    },
    {
        name: "selcuk",
        age: 24
    },
    {
        name: "alican",
        age: 16
    }
];

const names = users.map(function (user) {
    return user.name;
});

const ages = users.map(function (user) {
    return user.age;
});

console.log(ages);
console.log(names);


//for in
const user = {
    name: "Selçuk",
    age: 24
};

for (let key in user) {
    console.log(key, user[key]);
}