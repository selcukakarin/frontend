// Karşılaştırma Operatörleri
console.log(2 == 2);
console.log("js" == "java");
console.log(2 == "2");

console.log(2 === "2"); // veri tiplerini de kontrol eder

console.log(2 < 5);
console.log(2 != 4);
console.log(2 > 4);
console.log(4 >= 2);

// Mantıksal Bağlaçlar

// not 
console.log(!(2 != 2));

// and
console.log((4 != 2) && ("Ahmet" == "Mehmet"));

// or
console.log((4 != 2) || ("Ahmet" == "Mehmet"));

// if
const error = true;
if (error == false) {
    console.log("Hata oluştu...");
} else {
    console.log("Hata yok..")
}
console.log("Selam");

const user = "s";
if (user == "s") {
    console.log("Kullanıcı bulundu");
} else {
    console.log("Kullanıcı bulunamadı..");
}

// const process="4";
// if(process=="1"){
//     console.log("1")
// }else if(process=="1"){
//     console.log("2")
// }else{
//     console.log("3")
// }

// Ternary operatörü
const number = 100;
console.log(number === 100 ? "Sayı 100e eşit" : "Sayı 100e eşit değil");

// switch case
const process = 10;

switch (process) {
    case 1:
        console.log("işlem 1");
        break;
    case 2:
        console.log("işlem 2");
        break;
    case 3:
        console.log("işlem 3");
        break;
    default:
        console.log("Geçersiz işlem");
}