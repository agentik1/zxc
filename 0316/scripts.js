$(document).ready(function() {
  
   $("#el1").draggable();
    $("#el2").draggable();
    $("#el3").draggable();
   $("#el1").resizable();
   $("#sort1").sortable();
    
    
    $("#el3").draggable({stack:"#drop2"});
   $("#el2").draggable({stack:"#drop2"});
   $("#drop2").droppable({
      accept:"#el3",
over:function(){
         $("#el3").css("background-color","#d7fa99");
         $("#drop2").css("background-color","#d7fa99");
      },
drop:function(){
         $("#el3").css("display","none");
         $("#drop2").css("background-color","#c4f66f");
$("#drop2").html("Готово!");
}
   });


   $("#el3").draggable({stack:"#drop1"});
   $("#el2").draggable({stack:"#drop1"});
   $("#drop1").droppable({
      accept:"#el3",
over:function(){
         $("#el3").css("background-color","#d7fa99");
         $("#drop1").css("background-color","#d7fa99");
         
      },
drop:function(){
         $("#el3").css("display","none");
         $("#drop1").css("background-color","#c4f66f");
$("#drop1").html("Готово!");
}
   });

});

