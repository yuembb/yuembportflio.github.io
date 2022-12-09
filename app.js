
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 10) {
          $(".head").css("background" , "#222");
        }
  
        else{
            $(".head").css("background" , "#100e17");  	
        }
    })
  })



