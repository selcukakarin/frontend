const name = "Selçuk";
const departmant = "Bilişim";
const salary = 4000;

// const a="İsim: "+name+"\n"+"Departmant: "+departmant+"\n"+"Maaş: "+salary;

// Template Literal
const a = `İsim:${name}\nDepartman:${departmant}\nMaaş:${salary}`;

// const html="<ul>"+
//             "<li>"+name+"</li>"+
//             "<li>"+departmant+"</li>"+
//             "<li>"+salary+"</li>"+
//             "</ul>";

// document.body.innerHTML=html

function at() {
    return "selamlar";
}

const html = `
            <ul>
                <li>${name}</li>
                <li>${departmant}</li>
                <li>${salary}</li>
                <li>${10/4}</li>
                <li>${at()}</li>
            </ul>
        `;
document.body.innerHTML = html

console.log(a);