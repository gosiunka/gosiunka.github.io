var parFirst = document.getElementById("parFirst");
var parFirstNodes = parFirst.childNodes;

for (var i = 0; i<parFirstNodes.lenght; i++){
    if(parFirstNodes[i].nodeType == 1){
    console.log (parFirstNodes[i]);
    }
}



//pobieram rodzica dla elementu #parFirst za pomocą właściwości parentElement
//console.log( parFirst.parentElement);
//wszystkie wezly nawet komentarz
//console.log (parFirst.ChildNodes[0]);
//children pobiera tylko te wezly ktore sa elementami html
//console.log(parFirst.children);

//pobieram pierwsze dziecko
//var pierwszeDziecko = parFirst.children [0];
//console.log (pierwszeDziecko.nextSibling);

//pobieram pierwsze dziecko elementu # parFirst
//var pierwszeDziecko = parFirst.children [0];
//pobieram następny wezel dla pierwszeDziecko ktory jest elementem w relacji rodzenstowo
//console.log (pierwszeDziecko.nextElementSibling);
//pobieram następny węzeł dla pierwszeDziecko niezależnie czy jest elementem html, textem czy komentarzem
//console.log(pierwszeDziecko.nextSibling);
//ostatnie dziecko
//var ostatnieDziecko = parFirst.lastChild);
//var ostatnieDziecko = parFirst.lastElementChild;
//console.log (ostatnieDziecko);






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
//var mojeLinki = document.querySelectorAll(".link");
//mojeLinki.forEach(function(element,index){
//console.log (element);
//});
    