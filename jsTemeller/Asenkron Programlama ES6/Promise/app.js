// promiselerde 3 durum söz konusudur
// state : pending , value : undefined
// state : resolve (fulfilled) , value : 25
// state : reject , value : error
// resolve durumunu then ile handle ederiz
// reject durumunu catch ile handle ederiz

function getData(data) { // promise object'i döndüren fonksiyon
    return new Promise(function (resolve, reject) {
        setTimeout(function () {


            resolve("Olumlu sonuç"); //  promise'te olumlu sonuç göndermek için resolve kullanılır
        }, 10000);
    });

}

console.log(getData("Merhaba")); // çıktı Promise
// eğer 10 sn geçmeden durumunu görmek istersek console'da status = pending olarak görürüz
// fakat 10 sn geçtikten sonra durumu görmek için console'daki oka tıklarsak Promise içeriğinde status= resolve olarak görünür


function getData(data) { // promise object'i döndüren fonksiyon
    return new Promise(function (resolve, reject) {
        setTimeout(function () {


            reject("Olumlu sonuç"); //  promise'te olumsuz sonuç göndermek için reject kullanılır
        }, 3000);
    });

}

console.log(getData("Merhaba")); // çıktı Promise
// eğer 3 sn geçmeden durumunu görmek istersek console'da status = pending olarak görürüz
// fakat 3 sn geçtikten sonra durumu görmek için console'daki oka tıklarsak Promise içeriğinde status= reject olarak görünür


function getData(data) { // promise object'i döndüren fonksiyon
    return new Promise(function (resolve, reject) {
        setTimeout(function () {


            resolve("Olumlu sonuç"); //  promise'te olumlu sonuç göndermek için resolve kullanılır
        }, 3000);
    });

}

// eğer promise'den resolve sonucu dönerse bunu then ile yakalayabiliriz.
// response = Olumlu sonuç olur çünkü resolve("Olumlu sonuç");  resolve içerisindeki değeri alır.
getData("Merhaba").then(function (response) {
    console.log(response);
});
// çıktı Olumlu sonuç

// console.log(getData("Merhaba"));    // çıktı Promise   
// eğer 3 sn geçmeden durumunu görmek istersek console'da status = pending olarak görürüz
// fakat 3 sn geçtikten sonra durumu görmek için console'daki oka tıklarsak Promise içeriğinde status= resolve olarak görünür


// AYNI DURUM reject içinde geçerli
function getData(data) { // promise object'i döndüren fonksiyon
    return new Promise(function (resolve, reject) {
        setTimeout(function () {


            reject("Olumsuz sonuç"); //  promise'te olumsuz sonuç göndermek için reject kullanılır
        }, 3000);
    });

}

// eğer promise'den reject sonucu dönerse bunu catch ile yakalayabiliriz.
// response = Olumsuz sonuç olur çünkü reject("Olumsuz sonuç");  reject içerisindeki değeri alır.
getData("Merhaba").catch(function (response) {
    console.log(response);
});
// çıktı Olumlu sonuç


function getData(data) { // promise object'i döndüren fonksiyon
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof data === "string") {
                // olumlu
                resolve(data);
            } else {
                // olumsuz
                reject(new Error("Lütfen string bir değer girin"));
            }

        }, 3000);
    });
}

// // eğer promise'den reject sonucu dönerse bunu catch ile yakalayabiliriz.
// // response = Olumsuz sonuç olur çünkü reject("Olumsuz sonuç");  reject içerisindeki değeri alır.
// getData("Merhaba").then(function(response){
//     console.log("Gelen değer "+response);
// }).catch(function(err){
//     console.error(err);
// });
// // Gelen değer Merhaba

getData("Merhaba")
    .then(response => console.log("Gelen değer " + response))
    .catch(err => console.error(err));
// Gelen değer Merhaba

function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                resolve(number + 2);
            } else {
                reject(new Error("Lütfen bir sayı girin"));
            }
        }, 3000);
    });
}

// PROMISE CHAIN YAPISI
// promise chain yapısında ard arda then'ler kullanılabilir fakat catch ancak bir defa kullanılabilir.
// catch 1 defa kullanılır
addTwo(10)
    .then(response => {
        console.log(response);
        return response + 2; // burada kullanılan return ile yeni bir promise tapısı oluşmuş oldu ve yeniden bi then ile yakalanabilir duruma geldi
    })
    .then(function (response2) {
        console.log(response2);
    })
    .catch(err => console.error(err));
// çıktı
// 12
// 14