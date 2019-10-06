let value;

const now = new Date() // şu anki zamanı alırız..

const date1 = new Date("11-24-1994 06:10:10");

const date2 = new Date("November 24 1994");

const date3 = new Date("11/24/1994");

value = date1;

value = date1.getMonth(); // ay indexi 0'dan başlar ocak index 0 kasım index 10 döner
value = date1.getDate(); // tarihin gün değerini döner
value = date1.getDay(); // haftanın kaçıncı gününe denk geldiğini döner idenx mantığı pazar 0 döner
value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
value = date1.getMilliseconds();

date1.setMonth(1); // date1 month değeri değişti 1 = Feb Şubat
date1.setDate(15);
date1.setFullYear(1950);
date1.setHours(0);
date1.setMinutes(30);
date1.setSeconds(5);

value = date1;


console.log(value);