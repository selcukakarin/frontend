// // Ajax, callback, http requests
// class Request{
//     constructor(){
//         this.xhr=new XMLHttpRequest();
//     }
//     // Get request
//     get(url){
//         this.xhr.open("GET",url);       // Bağlantıyı açtık
//         this.xhr.onload=function(){
//             console.log(this); 
//             // çıktı XMLHttpRequest - yani this burada xhr'ı göstermektedir. Request class'ını göstermemektedir.
//             // bu durumun sebebi onload xhr'ın bir fonksiyonu ve bu fonksiyon içinde this dersek xhr'ı seçmiş oluruz
//             if(this.xhr.status===200){  // requestten bilgi geldi mi kontrolünü sağladık
//                 console.log(this.xhr.responseText());
//             }
//         }
//         this.xhr.send();    // isteğimizi gönderdik
//     }
// }

// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");
// // HATA 'status' 

// // 1. çözüm yöntemi
// class Request{
//     constructor(){
//         this.xhr=new XMLHttpRequest();
//     }
//     // Get request
//     get(url){
//         this.xhr.open("GET",url);       // Bağlantıyı açtık
//         const temp=this;
//         // yukarıdaki sorunu çözmek için temp değişkeni tanımlandı. temp artık Request'i göstermektedir.
//         this.xhr.onload=function(){
//             if(temp.xhr.status===200){  // requestten bilgi geldi mi kontrolünü sağladık
//                 console.log(temp.xhr.responseText);
//             }
//         }
//         this.xhr.send();    // isteğimizi gönderdik
//     }
// }

// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");
// // HATA 'status' giderildi
// // bir JSON array'i oldu 

// // 2. çözüm yöntemi
// class Request{
//     constructor(){
//         this.xhr=new XMLHttpRequest();
//     }
//     // Get request
//     get(url){
//         this.xhr.open("GET",url);       // Bağlantıyı açtık
//         const temp=this;
//         // yukarıdaki sorunu çözmek için this'in gösterdiği yere odaklanıldı. this artık Request'i göstermektedir.
//         this.xhr.onload=function(){
//             if(this.status===200){  // requestten bilgi geldi mi kontrolünü sağladık
//                 console.log(this.responseText);
//             }
//         }
//         this.xhr.send();    // isteğimizi gönderdik
//     }
// }

// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");
// // HATA 'status' giderildi
// // bir JSON array'i oldu 

// // 3. çözüm yöntemi
// class Request{
//     constructor(){
//         this.xhr=new XMLHttpRequest();
//     }
//     // Get request
//     get(url){
//         this.xhr.open("GET",url);       // Bağlantıyı açtık
//         const temp=this;
//         this.xhr.onload=function(){
//             if(this.xhr.status===200){  // requestten bilgi geldi mi kontrolünü sağladık
//                 console.log(this.xhr.responseText);
//             }
//         }.bind(this);   // Yukarıdaki sorunu çözmek için bind yaptık. bind ile artık this Request class'ını göstermekte oldu.
//         this.xhr.send();    // isteğimizi gönderdik
//     }
// }

// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");
// // HATA 'status' giderildi
// // bir JSON array'i oldu 

// // 4. çözüm yöntemi
// class Request{
//     constructor(){
//         this.xhr=new XMLHttpRequest();
//     }
//     // Get request
//     get(url){
//         this.xhr.open("GET",url);       // Bağlantıyı açtık
//         const temp=this;
//         this.xhr.onload=()=>{
//             if(this.xhr.status===200){  // requestten bilgi geldi mi kontrolünü sağladık
//                 console.log(this.xhr.responseText);
//             }
//         }  // Arrow fonskiyon da bind ile aynı işi yapmakta
//         this.xhr.send();    // isteğimizi gönderdik
//     }
// }

// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums");
// // HATA 'status' giderildi
// // bir JSON array'i oldu 

// 4. çözüm yöntemi ile devam
class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // GET request
    get(url, callback) {
        this.xhr.open("GET", url); // Bağlantıyı açtık
        const temp = this;
        this.xhr.onload = () => {
            if (this.xhr.status === 200) { // requestten bilgi geldi mi kontrolünü sağladık
                // null parametresini hata yok anlamında gönderdik
                callback(null, this.xhr.responseText); // isteğimiz bitti
                // istek bittiği zaman içeriden gelen veriyi callback fonksiyonuna gönderiyoruz
            } else {
                // Hata durumunda - dönen değer (responseText) yoksa
                callback("GET : Herhangi bir hata oluştu", null);
                // null dönen değer olmadığı anlamında gönderildi
            }
        } // Arrow fonksiyon da bind ile aynı işi yapmakta
        this.xhr.send(); // isteğimizi gönderdik
    }

    // POST request
    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON verisi göndereceğimizi söyledik
        this.xhr.onload = () => {
            // 201 yapmamızın sebebi -  https://developer.mozilla.org/tr/docs/Web/HTTP/Status 
            if (this.xhr.status === 201) { // bir kaynak oluşturduk
                callback(null, this.xhr.responseText);
                // oluşturulan kaynk bize responseText olarak geri döndü
            } else {
                callback("POST : Herhangi bir hata oluştu", null);
            }
        }
        this.xhr.send(JSON.stringify(data)); // datayı stringe çevirip api'ye gönderdik

    }

    // PUT request
    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON verisi göndereceğimizi söyledik
        this.xhr.onload = () => {
            // 201 yapmamızın sebebi -  https://developer.mozilla.org/tr/docs/Web/HTTP/Status 
            if (this.xhr.status === 200) { // güncellediğimize dair 200 kodu geri döner
                callback(null, this.xhr.responseText);
                // güncellenen vri responseText olarak geri döndü
            } else {
                callback("PUT : Herhangi bir hata oluştu", null);
            }
        }
        this.xhr.send(JSON.stringify(data)); // datayı stringe çevirip api'ye gönderdik

    }

    // DELETE request
    get(url, callback) {
        this.xhr.open("DELETE", url); // Bağlantıyı açtık
        this.xhr.onload = () => {
            if (this.xhr.status === 200) { // requestten bilgi geldi mi kontrolünü sağladık
                // null parametresini hata yok anlamında gönderdik
                callback(null, "Veri silme işlemi başarılı"); // isteğimiz bitti
                // istek bittiği zaman içeriden gelen veriyi callback fonksiyonuna gönderiyoruz
            } else {
                // Hata durumunda - dönen değer (responseText) yoksa
                callback("DELETE : Herhangi bir hata oluştu", null);
                // null dönen değer olmadığı anlamında gönderildi
            }
        } // Arrow fonskiyon da bind ile aynı işi yapmakta
        this.xhr.send(); // isteğimizi gönderdik
    }
}

// const request=new Request();
// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){   // response = callback(this.xhr.responseText);'den gelen değer
//     if(err===null){
//         // Başarılı - responseText var
//         console.log(response);
//     }else{
//         // Hata
//         console.log(err);
//     }
// });
// // HATA 'status' giderildi
// // bir JSON array'i oldu 

// GET
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/albums/50", function (err, response) { // response = callback(this.xhr.responseText);'den gelen değer
    if (err === null) {
        // Başarılı - responseText var
        console.log(response);
    } else {
        // Hata
        console.log(err);
    }
});
// HATA 'status' giderildi
// bir JSON array'i oldu 

// POST
request.post("https://jsonplaceholder.typicode.com/albums", {
    userId: 2,
    title: "Selamlar"
}, function (err, album) {
    if (err === null) {
        console.log(album)
    } else {
        console.log(err)
    }
})

// PUT
request.put("https://jsonplaceholder.typicode.com/albums/10", {
    userId: 333,
    title: "Şhinşah Karma"
}, function (err, album) {
    if (err === null) {
        console.log(album)
    } else {
        console.log(err)
    }
})

// DELETE
request.get("https://jsonplaceholder.typicode.com/albums/11", function (err, response) { // response = callback(this.xhr.responseText);'den gelen değer
    if (err === null) {
        // Başarılı - responseText var
        console.log(response);
    } else {
        // Hata
        console.log(err);
    }
});