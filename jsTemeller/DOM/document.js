// let value;
// // window object
// console.log(this.document);
// console.log(document);

// value = document; // #document
// value = document.all; // HTMLAllCollection(44) 
// value = document.all.length; // 44 - html sayfasındaki element sayısı
// value = document.all[0]; // <html> elementine ulaştık
// value = document.all[6]; // <a> elementine ulaştık
// value = document.all[document.all.length - 1] // sayfanın son elementine ulaştık <script>

// // document'in içindeki tüm elementlere erişim sağladık
// const elements = document.all;
// for (let i = 0; i < elements.length; i++) {
//     console.log(elements[i]);
// }

// // HTMLCollection için forEach fonksiyonu çalışmaz
// const elements1 = document.all; // HTMLCollection
// elements1.forEach(function (element) {
//     console.log(element);
// });

// // forEach ile document'in tüm elementlerini aldık
// const collections = Array.from(document.all); // HTMLCollection --> Array
// console.log(typeof collections) // object
// collections.forEach(function (collection) {
//     console.log(collection);
// });

// value = document.all[8]; // <body> elementini aldık
// value = document.body; // <body> elementini aldık
// value = document.head; // <head>
// value = document.location; // location objesi
// value = document.location.hostname; // 127.0.0.1
// value = document.location.port; // 5500
// value = document.URL; // http://127.0.0.1:5500/DOM/index.html
// value = document.characterSet; // UTF-8

// value = document;

// // Scriptler
// // script etiketlerinin konumu önemli
// value = document.scripts; //HTMLCollection(4) [script, script, script, script]
// value = document.scripts.length; // 4
// value = document.scripts[0]; // ilk <script> elementine ulaştık

// // Linkler
// value = document.links; // HTMLCollection(5) [a.delete-item, a.delete-item, a.delete-item, a.delete-item, a#clear-todos.btn.btn-dark, clear-todos: a#clear-todos.btn.btn-dark]
// value = document.links[0]; // il <a> elementimize ulaştık
// value = document.links[document.links.length - 1]; // son <a> elementimize ulaştık
// value = document.links[document.links.length - 1].getAttribute("class"); // btn btn-dark
// value = document.links[document.links.length - 1].getAttribute("href"); // #
// value = document.links[document.links.length - 1].className; // btn btn-dark
// value = document.links[document.links.length - 1].classList; // DOMTokenList(2) ["btn", "btn-dark", value: "btn btn-dark"]

// // Formlar
// value = document.forms; // HTMLCollection [form#todo-form, todo-form: form#todo-form, form: form#todo-form]
// value = document.forms.length; // 1
// value = document.forms[0]; // ilk <form> elementimize ulaştık
// value = document.forms["form"]; // name özelliği form olan formu seçtik
// value = document.forms[0].id; // todo-form
// value = document.forms[0].getAttribute("id"); // todo-form
// value = document.forms[0].name; // form
// value = document.forms[0].getAttribute("name"); // form
// value = document.forms[0].method; // get default




// console.log(value);