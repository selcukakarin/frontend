class Storage {
    // Filmi Storage'a ekle
    static addFilmToStorage(newFilm) {
        // storage içerisinde kayıt varsa aldık ve eklenecek filmi alınan arrayin sonuna ekledik
        let films = this.getFilmsFromStorage(); // Storage'da array varsa döner yoksa boş array döner
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films)) // films array'imizi Storage'a yazmak için stringe çevirdik
    }

    // Storage'dan Filmleri Çek
    static getFilmsFromStorage() {
        let films;
        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films")); // LocalStorage'dan gelen stringi array'e çevirdik (söxlük yapısına)
        }
        return films;
    }

    // Storage'dan filmi sil
    static deleteFilmFromStorage(filmTitle) {
        let films = this.getFilmsFromStorage();
        // splice
        // localStorage'daki array'i çektik ve silinmesi gereken değeri sildik
        films.forEach(function (film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1); // bulunan indexten 1 tane sil dedik
            }
        });
        // şimdi ise array'da yapılan değişikliklerle birlikte array'i localeStorage'a yükleyeceğiz
        localStorage.setItem("films", JSON.stringify(films));

    }

    // Filmleri storage'dan sil
    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films");
    }
}