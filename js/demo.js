$(document).ready(function(){

   var $all = $("#engaged ul li,#engaged-left-top ul li,#engaged-left-aligned ul li,#engaged-right-aligned ul li");
  
    $all.mouseenter(function(){
        $(this).addClass("magictime");
    });
    $all.mouseleave(function(){
           $(this).removeClass("magictime");
    });

   $('#choose-animation #second select').on("change",function() {

    if($(this).val()=="Open Down Left"){

    $all.mouseenter(function(){
           $(this).addClass("openDownLeft");
    });
    $all.mouseleave(function(){
           $(this).removeClass("openDownLeft");
    });

    }
    else if($(this).val()=="Open Down Right"){
    
    $all.mouseenter(function(){
           $(this).addClass("openDownRight");
    });
    $all.mouseleave(function(){
           $(this).removeClass("openDownRight");
    });

    }
    else if($(this).val()=="Open Up Left"){
    
    $all.mouseenter(function(){
           $(this).addClass("openUpLeft");
    });
    $all.mouseleave(function(){
           $(this).removeClass("openUpLeft");
    });
    
    }
    else if($(this).val()=="Open Up Right"){
    
    $all.mouseenter(function(){
           $(this).addClass("openUpRight");
    });
    $all.mouseleave(function(){
           $(this).removeClass("openUpRight");
    });
    
    }
    else if($(this).val()=="Twister In Down"){
    
    $all.mouseenter(function(){
           $(this).addClass("twisterInDown");
    });
    $all.mouseleave(function(){
           $(this).removeClass("twisterInDown");
    });
    
    }
    else if($(this).val()=="Twister In Up"){
    
    $all.mouseenter(function(){
           $(this).addClass("twisterInUp");
    });
    $all.mouseleave(function(){
           $(this).removeClass("twisterInUp");
    });
    
    }
    else if($(this).val()=="Swap"){
    
    $all.mouseenter(function(){
           $(this).addClass("swap");
    });
    $all.mouseleave(function(){
           $(this).removeClass("swap");
    });
    
    }
    else if($(this).val()=="Puff In"){
    
    $all.mouseenter(function(){
           $(this).addClass("puffIn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("puffIn");
    });
    
    }
    else if($(this).val()=="Vanish In"){
    
    $all.mouseenter(function(){
           $(this).addClass("vanishIn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("vanishIn");
    });
    
    }
    else if($(this).val()=="Open Down Left Retourn"){
    
    $all.mouseenter(function(){
           $(this).addClass("openDownLeftRetourn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("openDownLeftRetourn");
    });
    
    }
    else if($(this).val()=="Open Down Right Retourn"){
    
    $all.mouseenter(function(){
           $(this).addClass("openDownRightRetourn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("openDownRightRetourn");
    });
    
    }

    else if($(this).val()=="Perspective Down Retourn"){
    
    $all.mouseenter(function(){
           $(this).addClass("perspectiveDownRetourn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("perspectiveDownRetourn");
    });
    
    }
    else if($(this).val()=="Perspective Up Retourn"){
    
    $all.mouseenter(function(){
           $(this).addClass("perspectiveUpRetourn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("perspectiveUpRetourn");
    });
    
    }
    else if($(this).val()=="Perspective Left Retourn"){
    
    $all.mouseenter(function(){
           $(this).addClass("perspectiveLeftRetourn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("perspectiveLeftRetourn");
    });
    
    }
    else if($(this).val()=="Perspective Right Retourn"){
    
    $all.mouseenter(function(){
           $(this).addClass("perspectiveRightRetourn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("perspectiveRightRetourn");
    });
    
    }
    else if($(this).val()=="slide Down"){
    
    $all.mouseenter(function(){
           $(this).addClass("slideDown");
    });
    $all.mouseleave(function(){
           $(this).removeClass("slideDown");
    });
    
    }
    else if($(this).val()=="slide Left"){
    
    $all.mouseenter(function(){
           $(this).addClass("slideLeft");
    });
    $all.mouseleave(function(){
           $(this).removeClass("slideLeft");
    });
    
    }
    else if($(this).val()=="slide Right"){
    
    $all.mouseenter(function(){
           $(this).addClass("slideRight");
    });
    $all.mouseleave(function(){
           $(this).removeClass("slideRight");
    });
    
    }
    else if($(this).val()=="Tin Right In"){
    
    $all.mouseenter(function(){
           $(this).addClass("tinRightIn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("tinRightIn");
    });
    
    }
    else if($(this).val()=="Tin Left In"){
    
    $all.mouseenter(function(){
           $(this).addClass("tinLeftIn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("tinLeftIn");
    });
    
    }
    else if($(this).val()=="Tin Up In"){
    
    $all.mouseenter(function(){
           $(this).addClass("tinUpIn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("tinUpIn");
    });
    
    }
    else if($(this).val()=="Tin Down In"){
    
    $all.mouseenter(function(){
           $(this).addClass("tinDownIn");
    });
    $all.mouseleave(function(){
           $(this).removeClass("tinDownIn");
    });
    
    }

   });




   if($(window).outerWidth(true)<600)
   {
       $("#different-colors,#user-direction-to-menu").hide();
   }

   else{
       $("#different-colors,#user-direction-to-menu").show();
   }

   if($(window).outerWidth(true)<400)
   {
       $("#select-width").hide();
   }
   else{
       $("#select-width").show();
   }

   if($(window).outerWidth(true)<380)
   {
       $(".fa-wordpress,.fa-reddit,.fa-pinterest,.fa-github").hide();
   }
   else{
       $(".fa-wordpress,.fa-reddit,.fa-pinterest,.fa-github").show();
   }

$( window ).resize(function() {
   


   if($(window).outerWidth(true)<600)
   {
       $("#different-colors,#user-direction-to-menu").hide();
   }

   else{
       $("#different-colors,#user-direction-to-menu").show();
   }

   if($(window).outerWidth(true)<400)
   {
       $("#select-width").hide();
   }
   else{
       $("#select-width").show();
   }
   if($(window).outerWidth(true)<380)
   {
       $(".fa-wordpress,.fa-reddit,.fa-pinterest,.fa-github,#select-width").hide();
   }
   else{
       $(".fa-wordpress,.fa-reddit,.fa-pinterest,.fa-github,#select-width").show();
   }
});

     
     $("#purple").click(function(){

          $("#engaged,#engaged-left-top,#engaged-right-aligned,#engaged-left-aligned").css({"background-color": "#9061C2"});

     });
     $("#blue").click(function(){

          $("#engaged,#engaged-left-top,#engaged-right-aligned,#engaged-left-aligned").css({"background-color": "#7FB9E9"});

     });
     $("#dark-blue").click(function(){

          $("#engaged,#engaged-left-top,#engaged-right-aligned,#engaged-left-aligned").css({"background-color": "#056"});

     });
     $("#yellow").click(function(){

          $("#engaged,#engaged-left-top,#engaged-right-aligned,#engaged-left-aligned").css({"background-color": "#fa0"});

     });
     $("#white").click(function(){

          $("#engaged,#engaged-left-top,#engaged-right-aligned,#engaged-left-aligned").css({"background-color": "#dddddd"});

     });
     $("#black").click(function(){

          $("#engaged,#engaged-left-top,#engaged-right-aligned,#engaged-left-aligned").css({"background-color": "#161616"});

     });




    $("#select-width #black").click(function(){
        
        $("#engaged").css({"min-width":"100%"});
        $("#engaged-left-top").hide();

    });
    $("#select-width #dark-blue").click(function(){
        
        $("#engaged").css({"min-width":"200px"});
        $("#engaged-left-top").show();

    });




});
