// // dış dünyadan bir modulü import etme

// // CommonJs Modülleri 
// module.exports.test1 =function test1(){
//     console.log("Test 1");
// }

// module.exports.test2 = function test2(){
//     console.log("Test 2");
// }

// module.exports={
//     name:"Selçuk",
//     test1:function(){
//         console.log("Test 1");
//     },
//     person:{
//         name:"Selçuk",
//         mail:"selcukakarin@gmail.com"
//     }
// }


// ES6 modülleri
export const name="Selçuk";
export function test(){
    console.log("Test fonksiyonu");
}
export class Person{
    static Test(){
        console.log("Person Test");
    }
}
export const employee={
    name:"selçuk",
    salary:4000
}

// export default class Deneme{
//     static deneme(){
//         console.log("Default deneme");
//     }
// }

const denemeValue="DENEME DEĞERİ";
export default denemeValue;
