// tanımlamalar
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI Objesini üret
const ui = new UI();

// Storage objesi üret
const storage = new Storage();

// Tüm Eventleri Yükleme
eventListeners();

// Event tanımlamaları
function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

// Film ekle
function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // Hata
        ui.displayMessages("Tüm alanları doldurun", "danger");
    } else {
        // Yeni Film
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm); // Arayüze film ekleme
        storage.addFilmToStorage(newFilm); // Storage'a ekleme
        ui.displayMessages("Film Başarıyla eklendi", "success");
    }

    e.preventDefault();
    ui.clearInputs(titleElement, urlElement, directorElement);
}

// Film sil
function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("Silme işlemi başarılı", "success");
    }
}

// Tüm filmleri sil
function clearAllFilms() {
    if (confirm("emin misiniz?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}