//document.ready gwarantuje ze skrypty wywolaja sie w momencie gdy caly model DOM jest juz zaladowany to skrocony zapis document.ready:
$(function (){
   //w css wlasciwosci sa jako obiekt: 3 sposoby:
    
// $(".title").css({color:"red", backgroundColor:"yelow"}); 
// $("h2").css({color:"red", backgroundColor:"yelow"}); 
    //z atrybutem tak
$("[class=title]").css({color:"red", backgroundColor:"yelow"}); 
});