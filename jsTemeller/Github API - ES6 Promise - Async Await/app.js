// Elementleri seçme
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {
    let username = nameInput.value.trim();
    if (username === "") {
        alert("lütfen geçerli bir kullanıcı girin");
    } else {
        github.getGithubData(username)
            .then(response => {
                if (response.user.message === "Not Found") { // eğer response olarak dönen user'ın message değeri Not found ise
                    // Hata Mesajı
                    ui.showError("Kullanıcı bulunamadı.");
                } else {
                    ui.addSearchedUsersToUI(username);
                    Storage.addSearchedUsersToStorage(username);
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            // .then(response => console.log(response.user))       // sadece user'a ulaşırız
            // .then(response => console.log(response.repo))    // sadece repoya ulaşırız
            .catch(err => ui.showError(err));
    }


    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched() {
    // Tüm arananları temizle

    if(confirm("Emin misiniz?")){
        // Silme
        Storage.clearAllSearchedUsersFromStorage();     // Storage temizlemesi
        ui.clearAllSearchedFromUI();
    }

}

function getAllSearched() {
    // Arananları storage'dan al ve UI'a ekle
    let users = Storage.getSearchedUsersFromStorage();

    let result="";
    users.forEach(user => {
        // <li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
        result+=`<li class="list-group-item">${user}</li>`;
    });

    lastUsers.innerHTML = result;

}