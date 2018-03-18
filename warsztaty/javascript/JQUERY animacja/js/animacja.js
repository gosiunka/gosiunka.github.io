$(function(){
    $(".mylink").on("click", function(event){
    event.preventDefault();
    $("body").css({backgroundColor: "green"});
});
    
    
    
//podpiecie kilku zdarzeń po najechaniu myszka podkresla tekst po zdjeciu nie
$("h1").on({
    "mouseenter": function(){
        $(this).css({textDecoration : "underline"});
    },
    "mouseleave" : function() {
        $(this).css({textDecoration : "none"});
    }
    
});
    
});