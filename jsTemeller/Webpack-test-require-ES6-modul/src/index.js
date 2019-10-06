// dış dünyadan bir modulü import etme

// // CommonJs Modülleri 
// const app=require("./module1");

// // console.log(app);
// // app.test1();
// // app.test2();
// // // app;

// console.log(app.name);
// app.test1();
// console.log(app.person.mail);

// ES6 modulleri
// import {test,Person} from "./module1";
// Person.Test();
// test();

import * as module1 from "./module1";
// console.log(module1);
console.log(module1.employee.salary);
console.log(module1.employee.name);
module1.Person.Test();

// import Deneme from "./module1";
// Deneme.deneme();

import denemeValue from "./module1";
console.log(denemeValue);