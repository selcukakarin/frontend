function Translate(word, language) {
    this.apikey = "trnsl.1.1.20190409T065156Z.805d9b1bf8dc4b03.bdda0f38e15238ee8ad9aa994deb6800c5296a62";
    this.word = word;
    this.language = language;

    // XHR object
    this.xhr = new XMLHttpRequest();

}

Translate.prototype.translateWord = function (callback) {
    // Ajax işlemleri
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET", endpoint, true); // eğer true yazmazsak bile default olarak true olacaktır. true = asenkron işlem
    this.xhr.onload = () => { // arrow function kullandığımız için bu scope'daki this Translate objemizi gösterecektir.
        if (this.xhr.status === 200) {
            // // console.log(this.xhr.responseText);
            // // // çıktı
            // // // {"code":200,"lang":"tr-en","text":["How are you"]}
            // // console.log(JSON.parse(this.xhr.responseText));
            // // // çıktı
            // // // {code: 200, lang: "tr-en", text: Array(1)}
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
            // // çıktı
            // // How are you
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null, text); // asenkron işlemi senkron hale getirdik
        } else {
            callback("Bir hata oluştu...", null);
        }

    }

    this.xhr.send();
}

Translate.prototype.changeParameters = function (newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}