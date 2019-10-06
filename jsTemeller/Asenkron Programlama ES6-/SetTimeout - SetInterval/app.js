console.log(this);


// setTimeout
// 2 sn sonra çalışır
setTimeout(function () {
    console.log("Selam");
}, 2000); // 2sn

// clear demediğimiz sürece 1 sn aralıklarla çalışır
let i = 0;
setInterval(function () {
    i++;
    console.log("Sayı : ", i);
}, 1000)

let i = 0;
let value = setInterval(function () {
    i++;
    console.log("Sayı : ", i);
}, 1000)
// setInterval'i durduran buton
document.getElementById("btn").addEventListener("click", function () {
    clearInterval(value);
});