// getElementById
let element;

element = document.getElementById("todo-form"); // todo-from id'li <form> elementine ulaşabildik.
element = document.getElementById("todo-form213213"); // null - bu id'li element yok
element = document.getElementById("tasks-title"); // tasks-title id'li <h5> elementi döner

// getElementsByClassName
element = document.getElementsByClassName("list-group-item"); // HTMLCollection(4) [li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between]
element = document.getElementsByClassName("list-group-item")[0]; // HTMLCollection'dan gelen il <li> elementine ulaştık
element = document.getElementsByClassName("card-header"); // HTMLCollection [div.card-header]

// getElementsByTagName
element = document.getElementsByTagName("li"); // HTMLCollection(4) [li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between]

// QuerySelector - Css Selector
// QuerySelector sadece bir tane element döner
element = document.querySelector("#todo-form"); // #todo-form id'li <form> elementi gelir
element = document.querySelector("#tasks-title"); // #tasks-title id'li <h5> elementi gelir
element = document.querySelector(".list-group-item"); // .list-group-item class'lı ilk <li> gelir
element = document.querySelector("div"); // sayfadaki ilk div gelir - container

// QuerySelectorAll - Tüm Elementleri seçer
element = document.querySelectorAll(".list-group-item"); // .list-group-item class'lı tüm elementler gelir //NodeList(4) [li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between, li.list-group-item.d-flex.justify-content-between]

// NodeList değerlerini forEach ile yadırabiliriz.
element.forEach(function (el) {
    console.log(el);
});

// Seçilen elementlerin özelliklerini değiştirme
const eleman = document.querySelector("#clear-todos");

// elemet özellikleri
console.log(eleman.id); // clear-todos
console.log(eleman.className); // btn btn-dark
console.log(eleman.classList); // DOMTokenList(2) ["btn", "btn-dark", value: "btn btn-dark"]
console.log(eleman.classList[0]); // btn
console.log(eleman.classList[1]); // btn-dark
console.log(eleman.textContent); // Tüm Taskları Temizleyin  (html etiketleri varsa gelmez)
console.log(eleman.innerHTML); // Tüm Taskları Temizleyin (html etiketleri varsa gelir)
console.log(eleman.href); // http://127.0.0.1:5500/DOM/index.html#

// style ve element özelliklerini değiştirme
console.log(eleman.style); // CSSStyleDeclaration
eleman.className = "btn btn-primary";
eleman.style.color = "#000";
eleman.style.marginLeft = "25px";
eleman.href = "http://www.google.com.tr";
eleman.target = "_blank";
console.log(eleman.textContent);
eleman.textContent = "Sil";
eleman.textContent = "<span>Selamlar</span>"; // html tag çalışmaz
eleman.innerHTML = "<span style='color:brown;'>Selamlar</span>"; // html tag çalışır

console.log(eleman);

const elemanlar = document.querySelectorAll("li") // NodeList(4) 
elemanlar.forEach(function (el) {
    el.style.color = "red";
    el.style.background = "#eee";
});

let eleman1 = document.querySelector("li:first-child"); // ilk <li>
eleman1 = document.querySelector("li:last-child"); // son <li>
eleman1 = document.querySelector("li:nth-child(2)"); // 2. çocuk
eleman1 = document.querySelectorAll("li:nth-child(odd)"); // Tek elemanlar gelir NodeList(2)
eleman1 = document.querySelectorAll("li:nth-child(even)"); // Çift elemanlar gelir NodeList(2)
eleman1.forEach(function (el) {
    el.style.background = "#ccc";
    el.style.color = "white";
});

let value;

const todoList = document.querySelector(".list-group"); // <ul class="list-group">…</ul>
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList; //  list-group <ul> elementi geldi
value = todo; // 2. <li> elementi geldi
value = cardrow; // <div class="card row">…</div>

// Child Nodes -- text Dahil
value = todoList.childNodes; // NodeList(9)  --- Satır altlamaları da text olarak saymaktadır ( altsatıra geçme html içerisinde )
value = todoList.childNodes[0];
// Children -- text hariç -- Sadece elementler
value = todoList.children; // HTMLCollection(4) 
value = todoList.children[0]; // ilk element
value = todoList.children[todoList.children.length - 1]; // son element
value = todoList.children[2].textContent = "Selçuk";

value = cardrow;
value = cardrow.children; // HTMLCollection(3) 
value = cardrow.children[2] // <div class="card-body">…</div>
value = cardrow.children[2].children // HTMLCollection(7)
value = cardrow.children[2].children[1].textContent = "Burası da değişti";

value = todoList; // <ul class="list-group">…</ul>
value = todoList.firstElementChild; // <li class="list-group-item d-flex justify-content-between">…</li>
value = todoList.lastElementChild; // son element
value = todoList.children.length; // 4
value = todoList.childElementCount; // 4

value = cardrow; // <div class="card row">…</div>
value = cardrow.parentElement; // <div class="container" style="margin-top:20px;">…</div>
value = cardrow.parentElement.parentElement; // <body>

// Element Kardeşleri
value = todo; // <li class="list-group-item d-flex justify-content-between"> 2 </li>
value = todo.previousElementSibling; // <li class="list-group-item d-flex justify-content-between"> 1 </li>
value = todo.previousElementSibling.previousElementSibling; // null
value = todo.nextElementSibling; // <li class="list-group-item d-flex justify-content-between"> 3 </li>
value = todo.nextElementSibling.nextElementSibling; // <li class="list-group-item d-flex justify-content-between"> 4 </li>






console.log(value);