# sifirdan-javascript-kursu

## Notlar

```
// Immediately Invoked Function Expression (IIFE)

(function(name){
    console.log("Merhaba: " + name);
})("Murat");


const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
      console.log(`Id: ${id} Güncellendi`);  
    },
    delete:function(id){
      console.log(`Id: ${id} Silindi`);  
    }
}
console.log(database.host);
database.add();
database.delete(10);

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

value = window;
value = window.location;
value = window.location.host; // şu anki host
value = window.location.hostname; // şu anki hostname
value = window.location.port; // şu anki port
value = window.location.href; // şu anki adres


```
(JS Cheat Sheet)[https://github.com/selcukakarin/frontEnd/tree/master/js101/js-cheatsheet.pdf]