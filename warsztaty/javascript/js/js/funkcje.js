//funkcja bez parametrow
function wyswietlWKonsoli(){
    console.log ("Malgorzata Gryniewicz");
}
wyswietlWKonsoli();

//funkcja z parametrami
function wyswietlWKonsoliParam( imie, nazwisko)
{console.log( imie + " " + nazwisko);
}
wyswietlWKonsoliParam("XXX", "XXXX");
wyswietlWKonsoliParam("AAA", "AAA");
wyswietlWKonsoliParam("CCC", "AAA");

//zwracanie wartosci przez funkcję
function obliczPodatek( kwota, procentPodatek ){
 var wynik = kwota * (procentPodatek / 100);
return wynik.toFixed(2);   
}
var obliczenia1 = obliczPodatek(4990, 23);
console.log ("wysokość obliczonego podatku wynosi: "+obliczenia1);

var w = obliczPodatek(1000,10);
var x = obliczPodatek(2500,30);
var z = obliczPodatek(3000,10);
console.log(w,x,z);

//zwracanie wartosci przez funkcję
function obliczPodatek( kwota, procentPodatek ){
 var wynik = kwota * (procentPodatek / 100);
return wynik.toFixed(2);   
}
function wyswietlWynik (wartosc){
    document.write (wartosc);}

var obliczenia= obliczPodatek (1000,10);
wyswietlWynik(obliczenia);