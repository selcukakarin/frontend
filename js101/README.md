# sifirdan-javascript-kursu

## Notlar

// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error
// Holds the status of the XMLHttpRequest.
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready

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