var imiona = ['Malgosia', 'Agnieszka', 'Marta', 'Sandra', 'Joanna', 'Anna'];
console.log( imiona[0], imiona[3] );

//DODAWANIE  ELEMENTOW TABLICY NA KONCU 
//imiona[6] = "Mikolaj";
//imiona[7] = "Kinga";
//console.log( imiona );
imiona.push("Kamil","Leon");
imiona.push("Marcin");

//usuwanie elemntow  TABLICY z koncua 
imiona.pop();
imiona.pop();

//DODAWANIE ELEMENTOW  NA POCZATKU
imiona.unshift("Sebastian");
imiona.unshift("Piotrek");

//USUWANIE ELEMENTOW z poczatku TABLICY
imiona.shift();
//sprawdza ktory element usunelismy
//var usunietyElement = imiona.shit();
//console.log ( usunietyElement );
console.log( imiona );

// sprawdzenie "dlugosci" tablicy 
var iloscElementowTablicy = imiona.length;
console.log( iloscElementowTablicy);

//rozbijanie TABLICY na ciag tekstowy
var elementyTablicyString = imiona.join(", ");
console.log (elementyTablicyString);

//odwrocenie TABLICY
//imiona.reverse();
//console.log( imiona);

//sortowanie TABLICY"
imiona.sort();
console.log(imiona);

//SPRAWDZENIE czy wartość w TABLICY istnieje
console.log (imiona.indexOf( "Sandra" ));

//USUWANIE
imiona.splice (5,1);
console.log (imiona);


