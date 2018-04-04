function pobierzDane(event) {
    event.preventDefault();
    $.getJSON(
        "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        wrzucDanedoHtml)
}

$('body').append('<div id= dane-programisty></div>');
function wrzucDanedoHtml(dane){
    $('#dane-programisty').append("<p>imie:" + dane.imie+"</p>");
    $('#dane-programisty').append("<p>nazwisko:" + dane.nazwisko+"</p>");
    $('#dane-programisty').append("<p>zawod:" + dane.zawod+"</p>");
    
}