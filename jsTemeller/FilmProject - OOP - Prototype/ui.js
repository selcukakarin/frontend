function UI() {

}

// Arayüze film ekle
UI.prototype.addFilmToUI = function (newFilm) { // UI'ın prototype'ına  addFilmToUI methodunu tanımladık
    const filmList = document.getElementById("films");
    // console.log(filmList);   // <tbody id="films">…</tbody>
    filmList.innerHTML += `
<tr>
  <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
  <td>${newFilm.title}</td>
  <td>${newFilm.director}</td>
  <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
</tr>
`;
}

// İnputları temizle
UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

// Mesajları göster
UI.prototype.displayMessages = function (message, type) {
    const cardBody = document.querySelector(".card-body");
    // Alert divini oluşturma
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);

    setTimeout(function () { // div 1 saniye sonra siliniyor.
        div.remove();
    }, 1000);
}

// Filmleri yükle
UI.prototype.loadAllFilms = function (films) {
    const filmList = document.getElementById("films");

    // html'deki films idli dive eriştik ve aşağıda içerisini doldurduk
    films.forEach(function (film) {
        filmList.innerHTML += `
        <tr>
          <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
          <td>${film.title}</td>
          <td>${film.director}</td>
          <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `;
    });
}

// Filmi arayüzden sil
UI.prototype.deleteFilmFromUI = function (element) {
    element.parentElement.parentElement.remove();
}

// Filmleri arayüzden sil
UI.prototype.clearAllFilmsFromUI = function () {
    const filmList = document.getElementById("films");
    // filmList.innerHTML="";   // Yavaş çalışan bir yöntemdir.
    while (filmList.firstElementChild !== null) { // Child olduğu sürece
        filmList.firstElementChild.remove();
    }
}