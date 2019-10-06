// Callback fonksiyonlar
// callback fonksiyonlar normal fonksiyonlardır. 
// Fakat bu fonksiyonları diğer fonksiyonlara parametre olarak gönderebiliriz.

const langs = ["Python", "Java", "C++"];
langs.forEach(function (lang) {
    console.log(lang);
})
// callback fonksiyon
// aşağıdaki fonksiyonu forEach fonksiyonuna parametre olarak gönderildi.
// function(lang){
//     console.log(lang);
// }

document.getElementById("tikla").addEventListener("click", function () {
    console.log("Tıklandı");
})
// callback fonksiyon
// aşağıdaki fonksiyonu forEach fonksiyonuna parametre olarak gönderildi.
// function(){
//     console.log("Tıklandı");
// }

// asenkron işlemler /////////
function process1() {
    setTimeout(function () {
        console.log("process1");
    }, 3000);

}

function process2() {
    setTimeout(function () {
        console.log("process2");
    }, 2000);

}
process1();
process2();
console.log("selam");
//////////////////////////////

//////////////////////////////////////////////////////
// asenkron işlemi senkron işleme çevirdik ///////////
function process1(callback) {
    setTimeout(function () {
        console.log("process1");
        // process2'den önce process1'i çevir dedik
        callback();
    }, 3000);

}

function process2() {
    setTimeout(function () {
        console.log("process2");
    }, 2000);

}
process1(process2);
console.log("selam");
// asenkron işlemi senkron işleme çevirdik ///////////
///////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//////////// Asenkron durum Hata ////////////////////////
const langs = ["Python", "Java", "C++"];

function addLang(lang) {
    setTimeout(function () {
        langs.push(lang);
        console.log("Eklendi");
    }, 2000);
}

function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang);
        }, 1000);
    })
}

addLang("Javascript");
getAllLangs(); // Asenkron durum oluştu
//////////// Asenkron durum Hata ////////////////////////
/////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////
//////////// Asenkron Hata Giderildi ////////////////////
const langs = ["Python", "Java", "C++"];

function addLang(lang, callback) {
    setTimeout(function () {
        langs.push(lang);
        console.log("Eklendi");
        // asenkron hata giderildi
        callback();
    }, 2000);
}

function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang);
        }, 1000);
    })
}

addLang("Javascript", getAllLangs);
//////////// Asenkron Hata Giderildi ////////////////////
/////////////////////////////////////////////////////////