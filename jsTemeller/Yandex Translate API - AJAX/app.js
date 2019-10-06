// Prototype, AJAX, Callback

eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    // document.getElementById("word").addEventListener("input",translateWord);
    // change - select elementinde bir değişim olduğu zaman change çalışır.
    // fakat bazı browser'lar addEventListener("change",..) olayını desteklemez.
    // Bunu önlemek için aşağıdaki olayı kullanabiliriz.
    document.getElementById("language").onchange = function () {
        // Arayüz işlemleri
        console.log("event");
        ui.changeUI();
    }
}

const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);
const ui = new UI();


function translateWord(e) {
    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);
    translate.translateWord(function (err, response) {
        if (err) {
            // Hata
            console.log(err);
        } else {
            // Response
            ui.displayTranslate(response);
        }
    });

    e.preventDefault();
}