class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }

    exchange() {

        // buradan bir promise dönecek resolve veya reject
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency) // response object döner. default USD'ye karşılık gelen para birimi değerleri çekildi.
                .then(response => response.json()) // gelen response object'i json'a çevirdik
                .then(data => {
                    // const parity = data.rates[this.secondCurrency];      // ilk kullanım
                    const parity = data["rates"][this.secondCurrency]; // ikinci kullanım
                    const amount2 = Number(this.amount);
                    let total = parity * amount2;
                    resolve(total);
                })
                .catch(err => reject(err));
        })

    }
    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }
}