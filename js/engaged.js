$(document).ready(function(){

var $all = $("#engaged ul li,#engaged-left-top ul li,#engaged-left-aligned ul li,#engaged-right-aligned ul li");
   $all.mouseenter(function(){
        $(this).addClass("magictime openDownLeft");
    });
    $all.mouseleave(function(){
           $(this).removeClass("magictime openDownLeft");
    });

    
/* For color change   */
$("#engaged ul li,#engaged-left-top ul li,#engaged-left-aligned ul li,#engaged-right-aligned ul li").mouseenter(function(){



     $(this).children().css({"color": "#fff"});

     if($(this).children().hasClass("fa-facebook")){
        $(this).css({"background-color": "#3B5998"});
     }
     if($(this).children().hasClass("fa-google-plus")){
        $(this).css({"background-color": "#D34836"});
     }
     if($(this).children().hasClass("fa-twitter")){
        $(this).css({"background-color": "#4099FF"});
     }
     if($(this).children().hasClass("fa-stumbleupon")){
        $(this).css({"background-color": "#EB4924"});
     }
     if($(this).children().hasClass("fa-digg")){
        $(this).css({"background-color": "#000000"});
     }
     if($(this).children().hasClass("fa-flickr")){
        $(this).css({"background-color": "#0063DC"});
     }
     if($(this).children().hasClass("fa-tumblr")){
        $(this).css({"background-color": "#00225F"});
     }
     if($(this).children().hasClass("fa-youtube-play")){
        $(this).css({"background-color": "#C4302B"});
     }
     if($(this).children().hasClass("fa-linkedin")){
        $(this).css({"background-color": "#3399CC"});
     }
     if($(this).children().hasClass("fa-stack-overflow")){
        $(this).css({"background-color": "#FE7A15"});
     }
     if($(this).children().hasClass("fa-dribbble")){
        $(this).css({"background-color": "#EA4C89"});
     }
     if($(this).children().hasClass("fa-github")){
        $(this).css({"background-color": "#000"});
     }
     if($(this).children().hasClass("fa-pinterest")){
        $(this).css({"background-color": "#CB2027"});
     }
     if($(this).children().hasClass("fa-reddit")){
        $(this).css({"background-color": "#a4b5c6"});
     }
     if($(this).children().hasClass("fa-wordpress")){
        $(this).css({"background-color": "#21759B"});
     }

});

$("#engaged ul li,#engaged-left-top ul li,#engaged-left-aligned ul li,#engaged-right-aligned ul li").mouseleave(function(){

     
     
     $(this).css({"background-color": "transparent"});

     if($(this).children().hasClass("fa-facebook")){
        $(this).children().css({"color": "#3B5998"});
     }
     if($(this).children().hasClass("fa-google-plus")){
        $(this).children().css({"color": "#D34836"});
     }
     if($(this).children().hasClass("fa-twitter")){
        $(this).children().css({"color": "#4099FF"});
     }
     if($(this).children().hasClass("fa-stumbleupon")){
        $(this).children().css({"color": "#EB4924"});
     }
     if($(this).children().hasClass("fa-digg")){
        $(this).children().css({"color": "#000000"});
     }
     if($(this).children().hasClass("fa-flickr")){
        $(this).children().css({"color": "#0063DC"});
     }
     if($(this).children().hasClass("fa-tumblr")){
        $(this).children().css({"color": "#00225F"});
     }
     if($(this).children().hasClass("fa-youtube-play")){
        $(this).children().css({"color": "#C4302B"});
     }
     if($(this).children().hasClass("fa-linkedin")){
        $(this).children().css({"color": "#3399CC"});
     }
     if($(this).children().hasClass("fa-stack-overflow")){
        $(this).children().css({"color": "#FE7A15"});
     }
     if($(this).children().hasClass("fa-dribbble")){
        $(this).children().css({"color": "#EA4C89"});
     }
     if($(this).children().hasClass("fa-github")){
        $(this).children().css({"color": "#000"});
     }
     if($(this).children().hasClass("fa-pinterest")){
        $(this).children().css({"color": "#CB2027"});
     }
     if($(this).children().hasClass("fa-reddit")){
        $(this).children().css({"color": "#a4b5c6"});
     }
     if($(this).children().hasClass("fa-wordpress")){
        $(this).children().css({"color": "#21759B"});
     }


});




});