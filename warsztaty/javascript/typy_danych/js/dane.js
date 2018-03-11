//typ liczbowy - mozna wykonywac dzialania arytmetyczne
var wyplata = 4500;
var premia = 850;
var suma = wyplata + premia;
//console.log( suma );
console.log( typeof wyplata );

//typ lancuchowy string (znak plus laczy stringi; czyli dziala nieco inaczej niz w przypadku typu liczbowego)//
//var strWyplata = "4550\n";
var strWyplata = "4550";
var strPremia = "850";
//var strPremia = "\"850\"";
var strSuma =strWyplata + strPremia;
//console.log ( typeof strSuma );
console.log ( strSuma );

var czyJestWiosna = false;
if( czyJestWiosna ){
    console.log ("tak, juz jest wiosna");
}else {
    console.log ("Nie, jeszcze trwa zima")
}
//console.log(typeof czyJestWiosna);

// typy specjalne
var zmiennaTylkoZadeklarowana;
console.log ( zmiennaTylkoZadeklarowana);

var zmiennaNull = null;
console.log ( zmiennaNull);