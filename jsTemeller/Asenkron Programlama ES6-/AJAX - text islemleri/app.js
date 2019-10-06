// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error

// Holds the status of the XMLHttpRequest. readystate
// 0: request not initialized 
// 1: server connection established - server ile bağlantı sağlandı
// 2: request received - request alındı
// 3: processing request - request işleme alındı
// 4: request finished and response is ready - request bitti ve response döndü

// AJAX işlemi
document.getElementById("btn").addEventListener("click", function () {
    // XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    // Eski yöntem
    // xhr.onreadystatechange=function(){
    //     console.log(this.readyState);       // Çıktı 1 2 3 4
    //     console.log(this.status);       // Çıktı 1 0 2 200 3 200 4 200
    //     if(this.status==200 && this.readyState==4){
    //         // Response Hazır
    //         console.log(this.responseText);     // Çıktı Bu bir text dosyasıdır...
    //     }
    // }
    // Yeni yöntem
    xhr.onload = function () {
        // readystate=4
        // console.log(this.readyState);    // Çıktı 4 olur fakat hata mesajı da 4 hatasız bir response 'da 4 dönebilir. Bunun kontrolü için;
        if (this.status === 200) {
            // console.log(this.responseText);      // request attığımız sayfanın içeriği
            document.getElementById("ajax").textContent = this.responseText;
        }
    }
    // // ready state 3 olduğunda çalışacak kod
    // xhr.onprogress=function(){
    //     console.log("Process işleniyor...",this.readyState);
    // }

    xhr.open("GET", "example.txt", true); // true = asyncronous - false = syncronous - bağlantı aç
    xhr.send(); // bu örneğimizde değer göndermek istemiyoruz sayfaya fakat göndermek istersek kullanılacak kod xhr.send("sadasdas"); gibi olur

});