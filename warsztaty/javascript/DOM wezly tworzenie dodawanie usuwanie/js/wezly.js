//pobieram istniejacy wezel o id output
var istniejacyWezel = document.getElementById("output");
//sprawdzam czy udalo sie go pobrac
//console.log ( istniejacyWezel);

//tworze nowy element html
var newElement = document.createElement("p");

//tworze tresc do paragrafu
var newElementContent = document.createTextNode("tutaj tekst");
//wstawiam nowoutworzony tekst do nowoutworzonego paragrafu
newElement.appendChild(newElementContent);

//dodaje do paragrafu atrybut clas'textpar'
newElement.setAttribute('class','tekstpar');

//console.log (newElement);
// wstawiam nasz przygotowany paragraf do div#output

istniejacyWezel.appendChild(newElement);

//usuwanie elementow z dokumentu 2 opcje
//istniejacyWezel.parentElement.removeChild(istniejacyWezel);
document.getElementById("parFirst").removeChild(istniejacyWezel);

//insertBefore

var link = document.getElementsByClassName('superlink')[0];
var br = document.createElement("br");
link.parentElement.insertBefore(br, link);

//usuwanieatrybutow
link.removeAttribute('class');












//var parFirst = document.getElementById("parFirst");
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
    