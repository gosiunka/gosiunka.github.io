var zmiennaGlobalna = "Tak! Jestem zmienną globalną i jestem widoczna w funkcjach";
function wyswietlZmienna(){
console.log (zmiennaGlobalna);
}
wyswietlZmienna();

var zmienna = "zmienna globalna";
function pokazZmienna(){
    var zmienna = "Zmienna lokalna";
    console.log(zmienna);
}
//pokazZmienna();zalezy od tego gdzie console log tam wyswietli zmienna tutaj w nawiasasie i po
console.log(zmienna);

