const filterInput = document.getElementById("filter");

const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm);

function submitForm(e) {
    console.log("Submit Eventi");

    e.preventDefault(); // sayfa yenilenmesini durdurduk
}

filterInput.onfocus = function () {
    console.log("Selamlar..")
}

filterInput.addEventListener("focus", function (e) {

    console.log(e); /// FocusEvent 
    console.log(e.type); // focus
    console.log(e.target); // eventin nerede hangi element de oluştuğunu döner <input>
    console.log(e.target.placeholder); // Bir Todo Arayın
    console.log(e.target.className); // form-control
    console.log("Selçuk");
});

console.log(filterInput);



// Klavye Eventleri

// keypress - bastığında çalışır
document.addEventListener("keypress", run); // klavyeden herhangi bir tuşa basıldığında run() fonksiyonunu çalıştır
// keypress klavyedeki ok tuşları f3 f4 gibi tuşlar için çalışmaz bunun için keydown kullanılır

function run(e) {
    console.log(e.which); // klavyeden basılan karakterin ASCI karşılığını verir.
    console.log(e.key); // klavyeden basılan tuşu döner 
    console.log("Selçuk")
}

// keydown - bastığında çalışır
document.addEventListener("keydown", run); // klavyeden herhangi bir tuşa basıldığında run() fonksiyonunu çalıştır
// keypress klavyedeki ok tuşları f3 f4 gibi tuşlar için çalışmaz bunun için keydown kullanılır
function run(e) {
    console.log(e.which); // klavyeden basılan karakterin ASCI karşılığını verir.
    console.log(e.key); // klavyeden basılan tuşu döner 
    console.log("Selçuk")
}

// keyup - bırakıldığında çalışır
document.addEventListener("keyup", run); // klavyeden herhangi bir tuşa basıldığında run() fonksiyonunu çalıştır

function run(e) {
    console.log(e.which); // klavyeden basılan karakterin ASCI karşılığını verir.
    console.log(e.key); // klavyeden basılan tuşu döner 
    console.log("Selçuk")
}

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);

function changeText(e) {
    header.textContent = e.target.value;
    console.log(e.target.value); // input elementinin içindeki girilen yazıyı aldık
}

// Mouse Eventleri

const cardbody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

// click event
title.addEventListener("click", run);


// Double click event
title.addEventListener("dblclick", run);

// mousedown
title.addEventListener("mousedown", run); // click ile aynı

// mouseup
title.addEventListener("mouseup", run) // click bırakıldığında çalışır

// mouseover
title.addEventListener("mouseover", run); // click olmadan üzerine gelindiğinde çalışır

// mouseout
title.addEventListener("mouseout", run);

cardbody.addEventListener("mouseover", run); // mouseover veya mouseout bir parent'a atanmışsa içindeki her eleman içinde ayrı ayrı çalışır
// yukarıdaki açıklamadaki durum istenmiyorsa mouse enter ve mouse leave kullanılır

// mouse enter ve mouse leave
cardbody.addEventListener("mouseenter", run);
cardbody.addEventListener("mouseleave", run);


function run(e) {
    console.log(e.type);
}


const filter = document.getElementById("filter")

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", load); // sayfada yüklendikten sonra çalışır

function load(e) {
    console.log("sayfa yüklendi");
}

// input events
// Focus
filter.addEventListener("focus", run);
// Blur
filter.addEventListener("blur", run);
// Paste
filter.addEventListener("paste", run); // inputa birşey kopyalandığı zaman çalışır.
// Copy
filter.addEventListener("copy", run); // inputtan bir kopyalama yapıldığı zaman çalışır.
// Cut
filter.addEventListener("cut", run);
// Select
filter.addEventListener("select", run); // seçme işleminde çalışır


function run(e) {
    console.log(e.type);
}

console.log(filter);

// Event Bubling - child'a tıkladığın zaman parent'a da tıklamış olursun
document.querySelector(".container").addEventListener("click", function () {
    console.log("Div Container");
});

document.querySelector(".card.row").addEventListener("click", function () {
    console.log("card row");
});

document.querySelectorAll(".card-body")[1].addEventListener("click", function () {
    console.log("card body");
});

// Event Capturing - Olay yakalama - Delegation
const cardbody = document.querySelectorAll(".card-body")[1];

// card body'de nereye basarsan bas selam selçuk yazar
cardbody.addEventListener("click", run);

function run(e) {
    console.log("selam selçuk");
}


cardbody.addEventListener("click", run);

function run(e) {

    if (e.target.className === "fa fa-remove") {
        console.log("Silme işlemi");
    }
    if (e.target.id === "filter") {
        console.log("filtreleme işlemi");
    }
    if (e.target.id === "clear-todos") {
        console.log("Tüm taskları temizle");
    }

    // console.log(e.target); // card body içindeki elementleri yakalamaya yarar
}