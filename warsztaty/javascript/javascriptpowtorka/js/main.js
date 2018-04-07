//bardzo uniwersalne rozwiazanie do sumy wyplat
function sumaWyplat(selektor){
    var elementy = document.querySelectorAll(selektor);
    var iloscElementow = elementy.length;
    var suma=0;
    for(var i=0; i<iloscElementow; i++){
    var val = elementy[i].innerHTML; 
    suma += parseInt(val);
    }
    return suma;
}
function wyswietlWynik(wynikDoWyswietlenia){
var div = document.createElement("div");
var txt = document.createTextNode(wynikDoWyswietlenia);
div.appendChild(txt);   
document.body.appendChild(div);    
}

var wynikObliczenia = sumaWyplat("p");
wyswietlWynik ( wynikObliczenia);