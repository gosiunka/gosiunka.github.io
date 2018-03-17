//pobranie elementu po id
//var parFirst = document.getElementById("parFirst");
//console.log(parFirst);

//pobranie elementu po klasie - kolekcja elementow
//parametr w getElementsByClassName bez.

//var elementLink = document.getElementsByClassName("link");
//console.log(elementLink);
//var elementTag = document.getElementsByTagName("p")
//console.log(elementTag);

//pobranie elementow po selektorze.superlink
//var elementSuperlink = //document.querySelectorAll(".superlink");
//console.log ( elementSuperlink);

//pobranie pojedynczego elementu po selektorze id
//var parSecond = document.querySelector("#parSecond");
//console.log (parSecond);

//odwolujemy sie do tablicy
//var mojeLinki = document.getElementsByClassName("link")
//console.log (mojeLinki[1]);

//petla for
//for (var i=0; i< mojeLinki.lenght; i++){
//console.log ("To moj link nr" + (i+1)); 
    //console.log(mojeLinki[i]);
    //console.log("________");}

//petla forEach
var mojeLinki = document.querySelectorAll(".link");
mojeLinki.forEach(function(element,index){
    console.log (element);
});
    