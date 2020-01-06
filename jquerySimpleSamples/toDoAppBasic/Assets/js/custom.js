$("ul").on("click","li",function(){  // click var olan elemntleri dinler on sonradan eklenenleri de dinler
    $(this).toggleClass("tamamlanmis");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){

    if(event.which===13){ // 13 --> Enter
        var yeniItem=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>"+yeniItem+"</li>")
    }
     
})

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle(50);
});