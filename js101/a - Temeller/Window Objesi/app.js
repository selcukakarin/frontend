// Alert

alert("Merhaba");

console.log(cevap);

// Confirm

if (confirm("Emin misiniz?")){
    console.log("Silin Gitsin");
}
else {
    console.log("Silmeyin");
}

const cevap = prompt("2 + 2 = ?");

if (cevap == "4") {
    console.log("Doğru");
}
else {
    console.log("Yanlış");10
}

let value;

value = window;
value = window.location;
value = window.location.host; // şu anki host
value = window.location.hostname; // şu anki hostname
value = window.location.port; // şu anki port
value = window.location.href; // şu anki adres

if (confirm("Sayfa yenilensin mi?")) {
    window.location.reload();
}
else {
    console.log("sayfa yenilenmedi");
}

value = window.outerHeight;
value = window.outerWidth;

value = window.innerHeight;
value = window.innerWidth;


value = window.scrollX;

value = window.scrollY;

console.log(value);