$("#ajax3").click(function(){
    $("#ajax2").load("demo.txt",function(responseTxt,statusTxt,xhr){
        if(statusTxt=="success")
            alert("İçerik başarıyla yüklendi.");
        else if(statusTxt=="error")
            alert("Hata:"+xhr.status+" : "+xhr.statusTxt);
    })
})

responseTxt = eğer çağrı başarılı olursa sonuçtaki içeriği verir. - result
statusTxt = aramanın durumunu içerir. - status
xhr = XMLHttpRequest nesnesini içerir - XMLHttpRequest object
