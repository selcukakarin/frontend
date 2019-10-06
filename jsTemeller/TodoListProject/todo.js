// Elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener() { // Tüm event listener'lar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);
}

function clearAllTodos() {
    // Todo'ları arayüzden temizleme
    if (confirm("Tümünü silmek istediğine emin misin?")) {
        // todoList.innerHTML="";  // Yavaş bir yöntem
        while (todoList.firstElementChild != null) { // todoList'in ilk elemenı boş değilse liste boş değilse sil
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos"); // LocalStorage'daki todos keyini sildik.
    }
}

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase(); // target'taki item'im value'sunu alıp lowercase yaptık
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function (listItem) { // her li elementi için dön
        const text = listItem.textContent.toLowerCase(); // büyük küçük harf duyarlılığını kaldırdık.
        if (text.indexOf(filterValue) === -1) {
            // Bulamadı
            listItem.setAttribute("style", "display : none !important");
        } else {
            listItem.setAttribute("style", "display : block");
        }
    });
}

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove(); // sadece arayüzden silme işlemi yaptık
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo başarıyla silindi.");
    }
}

function deleteTodoFromStorage(deleteTodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1); // verilen indexten itibaren 1 adet değer sil dedik - LocalStorage'dan silme işlemi
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) { // her todo için fonksiyon çalıştırılır
        addTodoToUI(todo);
    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        showAlert("danger", "Lütfen bir todo girin...");
    } else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo başarıyla eklendi");
    }
    e.preventDefault();
}

function getTodosFromStorage() { // Storage'dan tüm todo'ları alır
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos")); // string olarak gelen değeri array'e çevirdik JSON.parse
    }
    return todos;
}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo); // localStorage'a newTodo eklendi.

    localStorage.setItem("todos", JSON.stringify(todos)); // array'i stringe çevirdik  JSON.stringify
}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    // setTimeout
    // window.setTimeout
    // 1000 ms sonra fonksiyon çalışacak
    setTimeout(function () {
        alert.remove();
    }, 1000);


}

function addTodoToUI(newTodo) { // String değeri list item olarak arayüze eklenecek
    // <li class="list-group-item d-flex justify-content-between">
    //                         Todo 1
    //                         <a href = "#" class ="delete-item">
    //                             <i class = "fa fa-remove"></i>
    //                         </a>

    //                     </li>

    // listItem oluşturma
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";
    // Text Node ekleme
    listItem.appendChild(document.createTextNode(newTodo));

    // link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    // element ekleme
    listItem.appendChild(link);

    // TodoList'e listItem'ı ekleme
    todoList.appendChild(listItem);
    todoInput.value = "";
}