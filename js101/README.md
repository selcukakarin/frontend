# sifirdan-javascript-kursu

## Notlar

(Http Status Resource)[https://developer.mozilla.org/tr/docs/Web/HTTP/Status]

## Http Status
200 : OK

403 : Forbidden

404 : Not Found

505 : Internal Server Error

## Holds the status of the XMLHttpRequest.
0: request not initialized 

1: server connection established

2: request received 

3: processing request 

4: request finished and response is ready

## Immediately Invoked Function Expression (IIFE)
```
(function(name){
    console.log("Merhaba: " + name);
})("Selçuk");
```
## Confirmbox and object-functions
```
const database = {
    host: "localhost",
    add: function(){
        console.log("Eklendi");
    },
    get:function(){
        console.log("Elde Edildi");
    },
    update:function(id){
      console.log(`Id: ${id} Güncellendi`);  
    },
    delete:function(id){
      console.log(`Id: ${id} Silindi`);  
    }
}
console.log(database.host);
database.add();
database.delete(10);

if (confirm("Emin misiniz?")){
    console.log("Silin Gitsin");
}
else {
    console.log("Silmeyin");
}
```
## Prompt
```
const cevap = prompt("2 + 2 = ?");

if (cevap == "4") {
    console.log("Doğru");
}
else {
    console.log("Yanlış");10
}
```
## Window location attribute
```
value = window;
value = window.location;
value = window.location.host; // şu anki host
value = window.location.hostname; // şu anki hostname
value = window.location.port; // şu anki port
value = window.location.href; // şu anki adres
```
## Arrow Function
```
const merhaba = () => {
    console.log("Merhaba");

}
merhaba();

const merhaba = (firstName,lastName) => console.log("Merhaba",firstName,lastName);

merhaba("Murat","Coşkun");

const cube = function(x){
    return x * x* x;
}
console.log(cube(4));

const cube = x => x * x* x;

console.log(cube(4));
```
## Destructing
```
let number1,number2;

arr = [100,200,300,400];

number1 = arr[0];
number2 = arr[1];

// Destructing

[number1,number2] = arr; 
const [number1,number2] = arr;


console.log(number1,number2);

// Obje Destructing

const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:number1,c:number2,e:number3} = numbers;

console.log(number1,number2,number3);

// Function Destructing

const getLangs = () => ["Python","Java","C++"];

const [lang1,lang2,lang3] = getLangs();
console.log(lang1,lang2,lang3);

// Obje 

const person = {
    name:"Mustafa Murat",
    year:1993,
    salary : 3000,
    showInfos : () => console.log("Bilgiler gösteriliyor...")

}

const {name:isim,year:yil,salary:maas,showInfos:bilgileriGoster} = person;

console.log(isim,yil,maas);

bilgileriGoster();
```
## For in and For off
```
const person = {
    name:"Mustafa Murat",
    age:25,
    salary:3000
};

const langs = ["Python","Java","C++","Php"];

const name = "Mustafa";

// For In 

// Object
for(let prop in person) {
    console.log(prop,person[prop]);

}

// Array
for (let index in langs){
    console.log(index,langs[index]);
}

// String
for (let index in name){
    console.log(index,name[index]);
}

// Object
for (let value of person){
    console.log(value);
}

for (let value of langs){
    console.log(value);
}

// String
for (let character of name){
    console.log(character);
}
```
## Maps
```
// Mapler - Key(Anahtar) - Value(Değer)

let myMap = new Map(); // Oluşturma

console.log(myMap);

const key1 = "Mustafa";
const key2 = {a:10,b:20};
const key3 = () => 2;

// Set
myMap.set(key1,"String Değer");
myMap.set(key2,"Object Literal Değer");
myMap.set(key3,"Function Değer");

// Get 
console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);

// Map Boyutu
console.log(myMap.size);

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

// For Each
cities.forEach(function(value,key){
    console.log(key,value);
})

// For Of
for(let [key,value] of cities){ // Destructing
    console.log(key,value);
}

// Map Keys
for(let key of cities.keys()){
    console.log(key);
}

// Map Values
for(let value of cities.values()){
    console.log(value);
}

// Arraylerden Map Oluşturma
const array = [["key1","value1"],["key2","value2"]];

const lastMap = new Map(array);

console.log(lastMap);

// Maplerden Array Oluşturma
const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",4);

const array = Array.from(cities);
[["Ankara",5],["İstanbul",15],["İzmir",4]]
console.log(array);
```
## Set
```
// Setler - Kümeler

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Mustafa");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});

const myset2 = new Set([100,3.14,"Mustafa"]);

console.log(myset);
console.log(myset2);

// Size
console.log(myset.size);

// Delete Metodu
myset.delete("Mustafa");

// Has Metodu
console.log(myset.has("Mustafa"));
console.log(myset.has(3.14));
console.log(myset.has(2000));
console.log(myset.has([1,2,3]));

// For Each
myset.forEach(function(value){
    console.log(value);
})

// For Of 
for (let value of myset){
    console.log(value);
}

const array = Array.from(myset);

console.log(array);
```
## Spread
```
// Spread Operator

const langs = ["Python","C++","Java","Php"];

console.log(langs[0],langs[1],langs[2],langs[3]);

console.log(...langs);

const langs2 = ["Javascript","C#",...langs];

console.log(langs2);

const numbers = [1,2,3,4,5,6,7,8,9];

const [a,b,...number2] =numbers;

console.log(a,b);
console.log(number2);

const addNumbers = (a,b,c) => console.log(a+b+c);

const numbers = [100,200,300];

addNumbers(...numbers);
```
## Call, Apply, Bind
```
// Call,Apply,Bind

const obj1 = {
    number1:10,
    number2:20
};

const obj2 = {
    number1:30,
    number2:40
};

function addNumbers(number3,number4){
        
    console.log(this.number1 + this.number2 + number3 + number4);
}
addNumbers(100,200);

addNumbers.call(obj1,100,200);
addNumbers.call(obj2,100,200);

addNumbers.apply(obj1,[100,200]);
addNumbers.apply(obj2,[100,200]);

// Bind

function getNumbersTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1);
const copyFunc2 = getNumbersTotal.bind(obj2);

console.log(copyFunc1(100,200));
console.log(copyFunc2(100,200));
```
## Object.Create - bir objenin prototype'ini başka bir objeye bağlama
```
const obj = {
    test1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
}
// console.log(obj);

const emp = Object.create(obj);
emp.name = "Mustafa";
emp.age = 25;
console.log(emp);

function Person(){

}
Person.prototype.test1 =function(){
    console.log("Test 1");
}
Person.prototype.test2 =function(){
    console.log("Test 2");
}

function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function(){
    console.log("MyTest");
}
const emp = new Employee("Mustafa",25);

console.log(emp);

// emp.test1();
```
## Prototype tabanlı kalıtım
```
// Kalıtım - Inheritance
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}
const person = new Person("Mustafa",25);
console.log(person);

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}
// Overriding - İptal Etme
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş : " +this.salary);
}
const emp = new Employee("Mustafa",25,4000);

console.log(emp);
emp.showInfos();
emp.toString();

console.log(emp);
```
## Static metodlar
```
// Statik Metodlar

class Matematik {
    sqrt(x){
        console.log(x*x);
    }
    static cube(x) {
        console.log(x*x*x);
    }
}
const math = new Matematik();
Matematik.cube(3);
console.log(math);

math.sqrt(4);
Matematik.sqrt(5);

Object.create();

console.log(Math.sqrt(4));
```
ES6 Class
```
// Syntactic Sugar

function Employee(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}
Employee.prototype.showInfos = function(){
    console.log("İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);

}
const emp = new Employee("Mustafa",25,4000);

console.log(emp);

class Employee {

    constructor(name,age,salary){ // Constructr
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }

}

const emp = new Employee("Mustafa",25,4000);

console.log(emp);
emp.showInfos();
```
## ES6 Inheritance
```
function Person(name,age){
    this.name = name;
    this.age = age;

}
Person.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " + this.age);
}
function Employee(name,age,salary){
    Person.call(this,name,age);
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş : " +this.salary);
}
const emp = new Employee("Mustafa",25,4000);

class Person { // Superclass, BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: " + this.name + " Yaş: " + this.age);
    }
}
class Employee extends Person { // DerivedClass, Subclass,ChildClass
    constructor(name,age,salary) {
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.salary = salary;

    }
    showInfos(){// Overriding
        console.log("İsim: " + this.name + " Yaş: " + this.age + " Maaş : " +this.salary);
    }
    toString(){ // Overriding
        console.log("Employee");
    }

    raiseSalary(amount) { // Ekstra 
        this.salary += amount;

    }
}
const emp = new Employee("Mustafa",25,4000);
emp.raiseSalary(500);

console.log(emp);
emp.showInfos();

emp.showInfos();
emp.toString();
```
## Arrow Function and This
```
const person = {

    age:25,

    // tellAge : function(){

    //     // this - Person
    //     console.log(this);
    //     console.log(this.age);
    // }.bind(this)

    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }

    // this - Window
}

person.tellAge();
```
## Callback Functions
```
// Callback Fonksiyonlar

langs.forEach(function(lang){
    console.log(lang);
});

document.getElementById("btn").addEventListener("click",function(){
    console.log("Tıkla");

});
function process1(callback){
    setTimeout(function(){
        console.log("Process 1");
        callback();

    },3000);
}
function process2(){
    setTimeout(function(){
        console.log("Process 2");
    },2000);
    
}

process1(process2);

const langs = ["Python","Java","C++"];

function addLang(lang,callback){

    setTimeout(function(){
        langs.push(lang);
        console.log("Eklendi");
        callback();
    },2000);
}
function getAllLangs(){
    setTimeout(function(){
        langs.forEach(function(lang){
            console.log(lang);
        });
    },1000);
}

addLang("Javascript",getAllLangs);
```
## SetTimeout and SetInterval
```
// Set Timeout

setTimeout(function(){
    console.log("Naber");

},5000);

let i = 0;
let value = setInterval(function(){
    i++;
    console.log("Sayı:",i);

},1000);
document.getElementById("btn").addEventListener("click",function(){
    clearInterval(value);

});
```
## Ajax usage
```
document.getElementById("btn").addEventListener("click",function(){

    // XMLHttpRequest

    const xhr = new XMLHttpRequest();

    xhr.onprogress = function(){ // xhr status = 3
        console.log("Process işleniyor... ", this.readyState);
    }
    xhr.onload = function(){  // xhr status = 4
        if (this.status === 200) {
            document.getElementById("ajax").textContent = this.responseText;
        
        }
    }
    // onload'ın alternatifi - ilkel
    // xhr.onreadystatechange = function(){
    //     if(this.status == 200 && this.readyState == 4) {
    //         // Response Hazır
    //         console.log(this.responseText);
    //     }
    // }
    xhr.open("GET","example.txt",true);
    xhr.send();
});
```
## Ajax usage 2
```
document.getElementById("ajax").addEventListener("click",getAllEmployees);

function getAllEmployees(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","employees.json",true);
    xhr.onload = function(){
        let list = document.getElementById("employees");
        if(this.status == 200) {
            const employees = JSON.parse(this.responseText);

            employees.forEach(function(employee){
                list.innerHTML += `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    </tr>
                `;
            });
        }
    }
    xhr.send();
}
```
## Ajax External
```
document.getElementById("change").addEventListener("click",change);

function change(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.exchangeratesapi.io/latest");
    xhr.onload = function(){
        if(this.status) {
            const response = JSON.parse(this.responseText);
            // console.log(this.responseText);
            const rate = response.rates.TRY
            const amount = Number(document.getElementById("amount").value);
            document.getElementById("tl").value = amount * rate;
        }
    }
    xhr.send();
}
```
## Ajax HTTP Requests
```
// Ajax,callback , http requests

class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    // Get Request

    get(url,callback){

        this.xhr.open("GET",url); // Bağlantı açık

        this.xhr.onload = () =>{

            if (this.xhr.status === 200) {
                callback(null,this.xhr.responseText); // İsteğimiz bitti
            }
            else {
                // Hata durumuna 
                callback("Get Request: Bir hata oluştu",null);
            }
        };
        this.xhr.send();
    }
    post(url,data,callback){
        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // JSON Verisi
        
        this.xhr.onload = () => {
            if(this.xhr.status === 201) {
                // Başarılı
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Post Request: Bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    put(url,data,callback){
        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // JSON Verisi
        
        this.xhr.onload = () => {
            if(this.xhr.status === 200) {
                // Başarılı
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Put Request: Bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    delete(url,callback){

        this.xhr.open("DELETE",url); // Bağlantı açık

        this.xhr.onload = () =>{

            if (this.xhr.status === 200) {
                callback(null,"Veri silme işlemi başarılı"); // İsteğimiz bitti
            }
            else {
                // Hata durumuna 
                callback("Delete Request: Bir hata oluştu",null);
            }
        };
        this.xhr.send();
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if (err === null){
        // Başarılı
        console.log(response);
    }
    else {
       // Hata
       console.log(err); 
    }

});

request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
    if (err === null){
        // Başarılı
        console.log(response);
    }
    else {
       // Hata
       console.log(err); 
    }

});

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){

    if (err === null){
        console.log(album);
    }
    else {
        // Hata
        console.log(err);
    }
});

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Tarkan Karma"},function(err,album){

    if (err === null){
        console.log(album);
    }
    else {
        // Hata
        console.log(err);
    }
});

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if (err === null){
        // Başarılı
        console.log(response);
    }
    else {
       // Hata
       console.log(err); 
    }
});
```
## Promise
```
function getData(data) { // Promise Objesi döndüren fonksiyon
  return new Promise(function(resolve,reject){
      setTimeout(function(){

        if(typeof data === "string"){
          // Olumlu
          resolve(data);
        }
        else {
          // Olumsuz
          reject(new Error("Lütfen string bir değer girin"));
        }

      },5000);
  });
}

getData(24)
.then(response => console.log("Gelen Değer " + response))
.catch(err => console.error(err));

function addTwo(number){

  return new Promise((resolve,reject) =>{
      setTimeout(function(){
          if (typeof number === "number"){
            resolve(number+2);
          }
          else {
            reject(new Error("Lütfen bir sayı girin"));
          }
      },3000);
  });
}

addTwo("Merhaba")
.then(response => {
  console.log(response);
  return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.error(err));
 // 1 tane catch - birden çok then- Promise Chain
```
## Fetch
```
function getTextFile(){ // Text Dosyası

    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}
function getJsonFile(){ // Local bir Json Dosyasından Veri Alma

    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}
function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => {
        console.log(data.rates.TRY);
    })
    .catch(err => console.log(err));
}
getTextFile();
getJsonFile();
getExternalAPI();

// https://api.exchangeratesapi.io/latest
```
## Fetch HTTP Requests
```
class Request {

    get(url){ // Get Request
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));

        })
    }
    post(url,data){

        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }

    put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                "Content-type": "application/json; charset=UTF-8"
                }
    
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })

    }
    delete(url){

        return new Promise((resolve,reject) => {
            fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'DELETE'
            }).then(response => resolve("Veri silme işlemi başarılı"))
            .catch(err => reject(err));
        });
    }

}
const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    
    console.log(albums);
})
.catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:10,title:"Tarkan Karma"})
.then(album => console.log(album))
.catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message) )
.catch(err => console.log(err));
```
## Async, await
```
async function test(data) {
    // Promise return new Promise
    // return data;
    let promise = new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("Bu bir değerdir.");
        },5000);
    });

    let response = await promise; // 5 saniye bekleyecek.

    return response;
}

test("Merhaba").then(response => console.log(response));

async function testData(data) {

    let promise = new Promise((resolve,reject) => {
        setTimeout(()=> {
            if(typeof data === "string") {
                resolve(data);
            }
            else {
                reject(new Error("Lütfen string bir değer girin"));
            }
        },5000);
    });
    const response = await promise; 
    return response;
}

testData(24)
.then(data => console.log(data))
.catch(err => console.log(err));

async function getCurrency(url){
    const response = await fetch(url); // Response Object
    const data = await response.json(); // Json object
    return data;
}

getCurrency("https://api.exchangeratesapi.io/latest")
.then(ahmet => console.log(ahmet));
```
## Async, await HTTP Requests
```
class Request {
    async get(url){ // Get Request
        
        const response = await fetch(url); // Response Object
        const data = await response.json() // JSON Object
        return data;
    }
    async post(url,data){
        const response = await fetch(url,{
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                      "Content-type": "application/json; charset=UTF-8"
                    }
                }); // Response Object

        const responsedata = await response.json();
        return responsedata;
    }
    async put(url,data){
        const response = await fetch(url,{
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                    "Content-type": "application/json; charset=UTF-8"
                    }
                }); // Response Object
        const responsedata = await response.json();
        return responsedata;
    }
    async delete(url){
        const response = await fetch(url, {
                method: 'DELETE'
                }); // Response Object
        return "Veri silme işlemi başarılı";
    }
}
const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => {
    
    console.log(albums);
})
.catch(err => console.log(err));

request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
.then(newAlbum => console.log(newAlbum))
.catch(err => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:10,title:"Tarkan Karma"})
.then(album => console.log(album))
.catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message) )
.catch(err => console.log(err));
```


(JS Cheat Sheet)[https://github.com/selcukakarin/frontEnd/tree/master/js101/js-cheatsheet.pdf]