$(document).ready(function(){

var $all = $("#engaged ul li,#engaged-left-top ul li,#engaged-left-aligned ul li,#engaged-right-aligned ul li");
   $all.mouseenter(function(){
        $(this).addClass("magictime openDownLeft");
    });
    $all.mouseleave(function(){
           $(this).removeClass("magictime openDownLeft");
    });


});
