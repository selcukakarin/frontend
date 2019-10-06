// // Dinamik yeni element oluşturma   

// {
//     /* <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>       */ }
// const newLink = document.createElement("a");
// const cardbody = document.getElementsByClassName("card-body")[1];
// console.log(cardbody);

// newLink.id = "clear-todos";
// newLink.className = "btn btn-danger";
// newLink.href = "https://www.google.com.tr";
// newLink.target = "_blank";
// newLink.appendChild(document.createTextNode("farklı sayfaya git"));
// cardbody.appendChild(newLink);

// // Text Content -- Güvensiz
// // cardbody'nin içini boşaltır ve sadece aşağıdaki texti yazar
// // cardbody.textContent="Farklı sayfaya git";

// // Text Node -- Güvenli
// const text = document.createTextNode("Selam");
// cardbody.appendChild(text);
// console.log(cardbody);

// console.log(newLink);

// // dinamik Element silme

// const todoList = document.querySelector("ul.list-group");
// console.log(todoList); //  <ul class="list-group">…</ul>

// const todos = document.querySelectorAll("li.list-group-item");
// console.log(todos); // NodeList(4) 

// // Remove
// // todos[1].remove();      // <li> silindi.
// // todoList.removeChild(todoList.lastElementChild);
// // todoList.removeChild(todos[2]);

// // Elemelentleri birbiriyle değiştirme - Replace
// const cardbody = document.querySelectorAll(".card-body")[1];
// console.log(cardbody); // <div class="card-body">…</div>
// const newElement = document.createElement("h3");

// newElement.className = "card-title";
// newElement.id = "tast-title";
// newElement.textContent = "Yeni eleman";

// // eski element
// const oldElement = document.querySelector("#tasks-title");
// // replace
// cardbody.replaceChild(newElement, oldElement);

// console.log(newElement);


// // Dinamik attribute

// const todoInput = document.getElementById("todo");
// let element;

// element = todoInput; // <input class="form-control" type="text" name="todo" id="todo" placeholder="Bir Todo Girin">
// element = todoInput.classList; // DOMTokenList  todo inputun classlarına eriştik
// // element=todoInput.classList.length;     // 1
// todoInput.className = "form-control newClass"; // class ekleme - var olan classları da yazmak gerekli
// todoInput.classList.add("newClss"); // class ekleme
// element = todoInput; // <input class="form-control newClass newClss" type="text" name="todo" id="todo" placeholder="Bir Todo Girin">
// todoInput.classList.remove("form-control"); // class çıkarma - <input class="newClass newClss" type="text" name="todo" id="todo" placeholder="Bir Todo Girin">

// element = todoInput.placeholder;
// element = todoInput.getAttribute("placeholder");
// todoInput.setAttribute("placeholder", "Selam");
// element = todoInput;
// todoInput.setAttribute("title", "başlık");

// element = todoInput.hasAttribute("name"); // true
// todoInput.removeAttribute("name");
// element = todoInput;



// console.log(element);