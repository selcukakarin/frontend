// Call, apply ve bind
const obj1 = {
    number1: 10,
    number2: 20
};
const obj2 = {
    number1: 30,
    number2: 40
};

function addNumbers(number3, number4) {
    console.log(this); // window
    console.log(this.number1); // undefined
    console.log(this.number1 + this.number2 + number3 + number4);
}

// addNumbers(100,200);    // Çıktı : NaN

addNumbers.call(obj1, 100, 200); // Çıktı 330
addNumbers.call(obj2, 100, 200); // Çıktı 370

// apply ile call'ın tek farkı birinin parametreleri tek tek diğerinin ise liste şeklinde geçmesidir.
addNumbers.apply(obj1, [1, 2]); // Çıktı 33
addNumbers.apply(obj2, [1, 2]); // Çıktı 73

// Bind
function getNumbersTotal(number3, number4) {
    return this.number1 + this.number2 + number3 + number4;
}
// bind'ın call ve apply'dan farkı bind'ın elde edilen fonksiyonu kopyalayıp daha sonra kullanılabilmesidir
const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);
// console.log(copyFunc1);
console.dir(copyFunc1); // console.log'dan biraz daha detaylı bilgi sunar
console.dir(copyFunc2); // console.log'dan biraz daha detaylı bilgi sunar
// çıktı olaran bound getNumbersTotal() gelir ve biz buradaki bound kelimesinden bu copyFunc'tın bir kopya fonksiyon olduğunu anlayabiliriz.