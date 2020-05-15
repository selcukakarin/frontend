// Callback Fonksiyonlar

// langs.forEach(function(lang){
//     console.log(lang);
// });

document.getElementById("btn").addEventListener("click",function(){
    console.log("Tıkla");

});
function process1(callback,cb2){

        console.log("Process 1");
        callback(cb2);
        var a;
        for (i=0;i<100000;i++){
            a=i+100
        }


}
function process2(callback){
   
        console.log("Process 2");
        callback();

    
}

function process3(){

        console.log("Process 3");

    
}

process1(process2,process3);

// const langs = ["Python","Java","C++"];

// function addLang(lang,callback){

//     setTimeout(function(){
//         langs.push(lang);
//         console.log("Eklendi");
//         callback();
//     },2000);
// }
// function getAllLangs(){
//     setTimeout(function(){
//         langs.forEach(function(lang){
//             console.log(lang);
//         });
//     },1000);
// }

// addLang("Javascript",getAllLangs);





