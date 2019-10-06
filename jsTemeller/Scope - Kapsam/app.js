// Scope

// // Global Scope

// function a(){
//     // Function Scope
// }

// if(){
//     // Block Scope
// }

var value1 = 10;
let value2 = 20;
const value3 = 30;

// hata yok 
function Func() {
    var value1 = 1;
    let value2 = 2;
    const value3 = 3;

    console.log(value1, value2, value3);
}
Func()

// if(true){
//     var a=40;
//     let b=50;
//     const c=60;
// }

// // var ile tanımlanmış a global scope tan erişilebilir ama const ve let ile tanımlananlara global scope tan erişilemez
// console.log(a);
// console.log(b);
// console.log(c)

if (true) {
    // global'deki değişkenin değeri değişti. ( var )
    var value1 = 40;
    ////////////////////////
    ///////// hata vermez ///
    // global'deki değişkenin değeri değişmez. ( const, let )
    let value2 = 50;
    ////////////////////////
    const value3 = 60;
    console.log(value1, value2, value3);
}

// ////////////////////////
// ///////// hata verir ///
// let value2=50;
// ////////////////////////

console.log(value1, value2, value3);