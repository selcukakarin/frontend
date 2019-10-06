// Local Storage

//Set item
localStorage.setItem("hareket", "burpee");
localStorage.setItem("tekrar", 50); // value stringe çevrilip kaydedilir.

// Get item
const value = localStorage.getItem("tekrar");
console.log(value); // 50
console.log(typeof value); // string

// Clear Local Storage

localStorage.clear();

console.log(localStorage.getItem("sport")); // null

if (localStorage.getItem("hareket") === null) {
    console.log("Sorguladığınız veri bulunamadı.")
} else {
    console.log("Bulundu.")
}

// Local Storage - Array Yazma  
const todos = ["Todo 1", "Todo 2", "Todo 3"];
localStorage.setItem("todos", todos); // Todo 1,Todo 2,Todo 3
console.log(localStorage.getItem("todos")); // Todo 1,Todo 2,Todo 3
console.log(typeof localStorage.getItem("todos")); // string - Array olarak kaydetmedi

localStorage.setItem("todos", JSON.stringify(todos)); //   ["Todo 1","Todo 2","Todo 3"]

const todos = ["Todo 1", "Todo 2", "Todo 3"];
const value = localStorage.getItem("todos");
console.log(value); /// Todo 1,Todo 2,Todo 3

const todos = ["Todo 1", "Todo 2", "Todo 3"];
localStorage.setItem("todos", JSON.stringify(todos)); // ["Todo 1","Todo 2","Todo 3"]
// stringify ile string yapılan elemanı yeniden JSON'a çevirdik
const value = JSON.parse(localStorage.getItem("todos")); // stringify yaptıktan sonra ["Todo 1", "Todo 2", "Todo 3"] gibi bir çıktı aldık.
console.log(value);

// dinamik localsession kullanmak
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    const value = todoInput.value;

    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.preventDefault();
}