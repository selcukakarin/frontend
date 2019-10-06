const person = {
    age: 25,
    // DIKKAT
    /// ARROW FUNCTION ile normal fonksiyon arasındaki bir fark
    // aşağıdaki örnekte görüldü gibi arrow fonksiyon aslında şu şekilde bir forma sahiptir = function(){ ... }.bind(this);
    tellAge: function () {
        // this person object'ini gösterir
        console.log(this);
        console.log(this.age);
    }.bind(this), // .bind(this) ile tellAge içerisindeki this'in window'u göstermesini sağladık

    // bu scope this window objesini gösterir

    tellAge2: () => {
        console.log(this)
        console.log(this.age);
    }
}

person.tellAge();
// bind this'den önceki çıktı  25
// bind this'den sonraki çıktı undefined

person.tellAge2(); // undefined