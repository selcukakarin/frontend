     $(document).ready(function(){
         $("#selam").click(function(){
             $("#merhaba").slideToggle("slow");
         });
     });

     $(document).ready(function(){
        $("button").click(function(){
            $("#div1").fadeTo("slow",0.3);
            $("#div2").fadeTo("slow",0.5);
            $("#div3").fade("slow",0.7);
        });
    });

    $(document).ready(function(){
        $("button").click(function(){
            $("#div1").fadeToggle();
            $("#div2").fadeToggle("slow");
            $("#div3").fadeToggle(3000);
        });
    });

    $(document).ready(function(){
        $("button").click(function(){
            $("#div1").fadeIn();
            $("#div2").fadeIn("slow");
            $("#div3").fadeIn(3000);
        });
    });
    $(document).ready(function(){
        $("button").dblclick(function(){
            $("#div1").fadeOut();
            $("#div2").fadeOut("slow");
            $("#div3").fadeOut(3000);
        });
    });

    $(document).ready(function(){
        $("#sakla").click(function(){
            $("p").hide();
        });
        $("#goster").click(function(){
            $("p").show();
        });
    });

    $(document).ready(function(){
        $('button').click(function(){
            $("div").animate({
                left:'250px',
                height:'+=10px',
                width:'+=10px',
                opacity:"0.5"
            });
        });
    });

    $(document).ready(function(){
        $('button').click(function(){
            var div=$("div")    ;
            div.animate({height:"300px",opacity:"0.4"},"slow");
            div.animate({width:"300px",opacity:"0.8"},"slow");
            div.animate({height:"100px",opacity:"0.4"},"slow");
            div.animate({width:"100px",opacity:"0.8"},"slow");
        });
    });

    
