$(document).ready(function(){



   if($(window).outerWidth(true)<600)
   {
       $("#different-colors").hide();
   }

   else{
       $("#different-colors").show();
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
       $("#different-colors").hide();
   }

   else{
       $("#different-colors").show();
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