// ES6 Static Metodlar
// class'ın içersinindeki bir metodu obje tanımlamadan kullanmak için static metodlar kullanılabilir.
class Matematik {
    pow(x) {
        console.log(x * x);
    }
    static cube(x) {
        console.log(x * x * x);
    }
}
// const math=new Matematik();
// math.cube(3);        // çıktı: 27
// console.log(math);
const math = new Matematik();
Matematik.cube(4); // çıktı: 64
console.log(math); // static metodlar class'ın içerisindeki protoya tanımlanmaz
math.pow(2); // çıktı: 4 - pow metodu static olmadığı için obje üzerinden (protodan) çağrılabildi.
Matematik.pow(5); // Hata - Fakat bu sefer de pow static olmadığı için Matematik class'ı üzerinden obje oluşmadan kullanılmaz

math.cube(); // Hata     static metoda obje üzerinden ulaşılmaz. Çünkü static metodlar protoda oluşturulmaz.

// static metod örnekleri
// Object.create();
// Math.sqrt(4);