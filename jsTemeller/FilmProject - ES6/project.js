// tanımlamalar
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// Tüm Eventleri Yükleme
eventListeners();

// Event tanımlamaları
function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function () {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
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
        UI.displayMessages("Tüm alanları doldurun", "danger");
    } else {
        // Yeni Film
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm); // Arayüze film ekleme
        Storage.addFilmToStorage(newFilm); // Storage'a ekleme
        UI.displayMessages("Film Başarıyla eklendi", "success");
    }

    e.preventDefault();
    UI.clearInputs(titleElement, urlElement, directorElement);
}

// Film sil
function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme işlemi başarılı", "success");
    }
}

// Tüm filmleri sil
function clearAllFilms() {
    if (confirm("emin misiniz?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
}