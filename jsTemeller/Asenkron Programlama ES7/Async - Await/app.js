// async function test(data){
//     // async anahtar kelimesi bir fonksiyonun mutlaka bir Promise döneceğini belirtir
//     // return data;
//     // // Biz burda promise dönmediğimiz için javascript data'yı alıp kendi bir promise oluşturdu.

//     // Aşağıda kendi promise object'imizi oluşturduk
//     return new Promise((resolve,reject) => {
//         resolve(data);
//     });
// }

// console.log(test("Merhaba"));
// // çıktı Promise {<resolved>: "Merhaba"}

// test("Merhaba")
// .then(response => console.log(response));


// async function test(data){
//     let promise = new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve("Başarılı");
//         },3000);
//     });

//     // await yalnızca async fonksiyonlar içerisinde çalışabilir
//     let response = await promise;   // bu satır burada 3 sn bekleyecektir
//     // yani await promise'in resolve dönmesini bekleyecek
//     console.log(response);
//     console.log("Selamlar");
//     return response;
// }

// test("Merhaba");

// test("Merhaba")
// .then(response => console.log(response));


// async function testData(data){
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             if(typeof data === "string"){
//                 resolve(data);
//             }else{
//                 reject(new Error("Lütfen string bir değer girin"));
//             }
//         },3000);
//     });

//     const response= await promise;

//     return response;
// }

// testData(22)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// testData("Selam")
// .then(data => console.log(data))
// .catch(err => console.log(err));

async function getCurrency(url) {
    const response = await fetch(url); // Response Object
    console.log(response)
    // çıktı 
    // Response {type: "cors", url: "https://api.exchangeratesapi.io/latest", redirected: false, status: 200, ok: true, …}

    const data = await response.json(); // JSON object
    console.log(data);
    // çıktı
    // {base: "EUR", rates: {…}, date: "2019-04-05"}

    // console.log ile gelen json'ı çağrılan yere gönderebiliriz
    return data;
}

getCurrency("https://api.exchangeratesapi.io/latest")
    .then(response => console.log(response));
// çıktı 
// {base: "EUR", rates: {…}, date: "2019-04-05"}