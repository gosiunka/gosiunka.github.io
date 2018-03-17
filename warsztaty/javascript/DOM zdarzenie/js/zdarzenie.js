//var paragraf = document.getElementById('par2');
//sposob 1
//function obsluzZdarzenie(){
//console.log("click");}
//function obsluzZdarzenie(event){
// console.log("click");
//console.log(event.type);}
//paragraf.onclick = obsluzZdarzenie;
//2gi sposob
//paragraf.onclick = function(e){
//console.log( "Do obslugi zdarzenia przypisana funkcja anonimowa")
//}
//var counter=0;
//paragraf.addEventListener("mouseenter", function (event)
//{ counter++;
//console.log(event.type);
//console.log ("zdarzenie wywolane" +counter + "raz");

//});
//var title = document.getElementById("main-header");
//title.addEventListener("mouseenter", function () {
//    title.style.fontSize = "70px";
//});
//title.addEventListener("mouseleave", function () {
//    title.style.fontSize = "20px";
//});

//function bodyColor(){
    //zbadaj event
    //console.log(event);
    //
    //document.body.style.backgroundColor = "red";}
//var title = document.getElementById("main-header");
//title.addEventListener("click", bodyColor);

//usuwanie obslugi zdarzen
//title.removeEventListener("click",bodyColor);

//blokowanie domuslnego dzialania elemenow
document.querySelector('.link1').addEventListener('click',
    function (event) {
event.preventDefault();
    console.log ("kliknalemlink klasy.linki")
    })
