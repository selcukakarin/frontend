// function getTextFile(){

//     fetch("example.txt")
//     .then(response => console.log(response))
//     .catch(err => console.log(err));

// }

// getTextFile();
// // çıktı
// // Response
// // body: (...)
// // bodyUsed: false
// // headers: Headers {}
// // ok: true
// // redirected: false
// // status: 200
// // statusText: "OK"
// // type: "basic"
// // url: "http://127.0.0.1:5500/Asenkron%20Programlama%20ES6/Fetch%20API/example.txt"
// // __proto__: Response


// function getTextFile(){ // Text dosyasından fetch ile verileri aldık

//     fetch("example.txt")
//     .then(response => response.text())  // response'u text olarak alıp return ile döndük - return yazmak zorunlu değil
//     .then(data => console.log(data))    // return ile gelen değeri yazdırdık
//     .catch(err => console.log(err));

// }

// getTextFile();


function getJsonFile() { // JSON dosyasından fetch ile verileri aldık

    fetch("example.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

}

function getExternalAPI() {
    fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => {
            console.log(data.rates.TRY);
        })
        .catch(err => console.log(err));
}

getJsonFile(); // çıktı [{…}, {…}, {…}]
getExternalAPI(); // çıktı 6.2855