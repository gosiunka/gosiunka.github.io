

class Ogloszenia {
    
constructor( tytul, tresc, cena, kategoria ){
    this.tytul = tytul;
    this.tresc = tresc;
    this.cena = cena;
    this.kategoria = kategoria;
} 
    
wyswietl() {
var ogloszenie = "Tytul ogloszenia:" + this.tytul + "Treść: " +
this.tresc + "cena:" + this.cena + "kategoria" + this.kategoria;
return ogloszenie;
}
}
var ogloszenie1 = new Ogloszenia( "sprzedam Opla", "Niemiec płakał jak sprzedawał", "500",)
//console.log(ogloszenie1);

var ogloszenieDoWyswietlenia = ogloszenie1.wyswietl();
console.log( ogloszenieDoWyswietlenia );