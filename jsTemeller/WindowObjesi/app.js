// access to window
console.log(this);
console.log(window);

// alert
alert("Selam");

// confirm
const cevap = confirm("Emin misin?");
console.log(cevap);
if (cevap) {
    console.log("Silindi")
} else {
    console.log("silinmedi");
}

if (confirm("Emin misin?")) {
    console.log("Silindi")
} else {
    console.log("silinmedi");
}

// prompt
const cevapp = prompt("2+3=?");
console.log(cevapp);
console.log(typeof cevapp); // string

if (cevapp == 5) {
    console.log("doğru");
} else {
    console.log("Yanlış");
}

let value;

value = window;
value = window.location; //Location {replace: ƒ, assign: ƒ, href: "http://127.0.0.1:5500/WindowObjesi/index.html", ancestorOrigins: DOMStringList, origin: "http://127.0.0.1:5500", …}
value = window.location.host; // 127.0.0.1:5500
value = window.location.hostname; // 127.0.0.1
value = window.location.port; // 5500
value = window.location.href; // http://127.0.0.1:5500/WindowObjesi/index.html

// window.location.reload(); - sayfa yenileme
// window.location.reload(); // tek başına sonsuz döngü olur

// if(confirm("Sayfa yenilensin mi?")){
//     window.location.reload();
// }else{
//     console.log("sayfa yenilenmedi");
// }

// tarayıcının height ve width'ine ulaşma
value = window.outerHeight;
value = window.outerWidth;

// sayfanın height ve width'ine ulaşma
value = window.innerHeight;
value = window.innerWidth;

// scrollX scrollY
value = window.scrollX;
value = window.scrollY;



console.log(value);