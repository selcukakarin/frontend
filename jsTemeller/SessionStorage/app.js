// Session Storage - Key Value
console.log(window)

// buttonları seçmek
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// inputlar

const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItems);

function addItem(e) {
    sessionStorage.setItem(addkey.value, addvalue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value); // key'e göre sil
}

function clearItems(e) {
    sessionStorage.clear();
}