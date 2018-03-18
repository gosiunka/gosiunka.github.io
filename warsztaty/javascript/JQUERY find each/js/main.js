//metoda find wyszukuje potomkow selektora.W ponizszym przykladzie poszuka paragrafow znajdujacych sie w div.mozna po tagu klasie id atrybucie

$("div").find("p").css({
    fontSize: "60px",
    color: "pink"
});
//metoda each jak for each
$("p").each(function (index, element) {
    console.log(index, element);
    $(this).addClass("new_Class").css({
        fontsize: "40px",
        backgroundColor: "yellow"
    });
});
