function oblicz() {
    var wplata = parseInt(document.getElementById("wplata").value);
    var iloscLat = parseInt(document.getElementById("ilosc-lat").value);
    var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value);
    var oprocentowanie = parseInt(document.getElementById("oprocentowanie").value) / 100;
    var podatek = document.getElementById('podatek').checked;
    var wynik = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
    document.getElementById("wynik").innerHTML = wynik;
}

function obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
    var kapital;
    var oprocentowanieOpodatkowane;
    if (podatek) {
        oprocentowanieOpodatkowane = oprocentowanie * 0.81;
    } else {
        oprocentowanieOpodatkowane = oprocentowanie;
    }
    kapital = wplata * Math.pow((1 + (oprocentowanieOpodatkowane / okresKapitalizacji)), iloscLat * okresKapitalizacji);
    return kapital.toFixed(2);

}









//skrocony if
//oprocentowanieOpodatkowane = podatek ? oprocentowanie* 0.81: //oprocentowanie;





//function oblicz(){
//    
//var wplata = parseInt(document.getElementById("wplata").value);
//    
//var iloscLat = parseInt(document.getElementById("ilosc-lat").value);
//var okresKapitalizacji = parseInt(document.getElementById("okres-kapitalizacji").value) ; 
//var oprocentowanie = parseInt((document.getElementById("oprocentowanie").value)/100);
//var podatek = document.getElementById('podatek').checked;
//var wynik = obliczZysk (wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
//document.getElementById("wynik").innerHTML=wynik;
////dodanie wyniku w HTML
//}
//
//
//
//function obiczZysk (wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek) {
//if (podatek ==true){
//}
//else {oprocentowanie}
//  //}   






//var wynik = kwota * (procentPodatek / 100);
