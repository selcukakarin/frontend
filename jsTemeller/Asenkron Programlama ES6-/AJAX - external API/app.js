document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest();
    // REST API
    xhr.open("GET", "https://api.exchangeratesapi.io/latest", true); // defualt değer true = asyncronous olduğu için true vermeye gerek yok.
    xhr.open("GET", "https://api.exchangeratesapi.io/latest");
    xhr.onload = function () {
        if (this.status) {
            console.log(this.responseText);
            // çıktı 
            // {
            //     "base": "EUR",
            //     "rates": {
            //         "BGN": 1.9558,
            //         "NZD": 1.6599,
            //         "ILS": 4.0439,
            //         "RUB": 73.3377,
            //         "CAD": 1.4987,
            //         "USD": 1.1219,
            //         "PHP": 58.637,
            //         "CHF": 1.1207,
            //         "ZAR": 15.8758,
            //         "AUD": 1.5781,
            //         "JPY": 125.01,
            //         "TRY": 6.323,
            //         "HKD": 8.8062,
            //         "MYR": 4.5768,
            //         "THB": 35.654,
            //         "HRK": 7.432,
            //         "NOK": 9.6308,
            //         "IDR": 15895.08,
            //         "DKK": 7.4639,
            //         "CZK": 25.693,
            //         "HUF": 319.81,
            //         "GBP": 0.85418,
            //         "MXN": 21.5469,
            //         "KRW": 1276.07,
            //         "ISK": 133.8,
            //         "SGD": 1.5187,
            //         "BRL": 4.334,
            //         "PLN": 4.2892,
            //         "INR": 77.593,
            //         "RON": 4.7495,
            //         "CNY": 7.5353,
            //         "SEK": 10.4075
            //     },
            //     "date": "2019-04-04"
            // }
            console.log(typeof this.responseText); // çıktı string
            const response = JSON.parse(this.responseText); // stringi JSON'a çeviriyoruz
            console.log(response.rates);
            // çıktı   {BGN: 1.9558, NZD: 1.6599, ILS: 4.0439, RUB: 73.3377, CAD: 1.4987, …}
            console.log(response.rates.TRY); // çıktı  6.323 - türk lirasının değeri 
            const rate = response.rates.TRY;
            const amount = Number(document.getElementById("amount").value);
            console.log(typeof response.rates.TRY); // çıktı number
            console.log(typeof document.getElementById("amount").value); // çıktı string - çevirmeden önceki değeri
            document.getElementById("tl").value = amount * rate;
            console.log(rate * amount);

        }
    }
    xhr.send(); // request gönder
}