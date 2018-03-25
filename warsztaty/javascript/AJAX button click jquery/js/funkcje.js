//metoda w jquery

function pobierzDane(event) {
    event.preventDefault();
    $.getJSON(
        "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        wrzucDanedoHtml)
}
function wrzucDanedoHtml(dane){
    $('body').append("<p>userId:" + dane.userId+"</p>");
    $('body').append("<p>userName:" + dane.userName+"</p>");
    $('body').append("<p>userName:" + dane.userName+"</p>");
    
}


//w javascripcie

            //
            //
            //function pobierzDane(event) {
            //    event.preventDefault();
            //
            //    ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", wrzucDaneDoHTML)
            //}
            //
            //function wrzucDaneDoHTML(dane) {
            //    var pUserId = document.createElement("p");
            //    var pUserName = document.createElement("p");
            //    var pUserURL = document.createElement("p");
            //
            //    var pUserIdContent = document.createTextNode(" userId: " + dane.userId);
            //    var pUserNameContent = document.createTextNode(" userName: " + dane.userName);
            //    var pUserURLContent = document.createTextNode(" userURL: " + dane.userURL);
            //
            //    pUserId.appendChild(pUserIdContent);
            //    pUserName.appendChild(pUserNameContent);
            //    pUserURL.appendChild(pUserURLContent);
            //
            //    document.body.appendChild(pUserId);
            //    document.body.appendChild(pUserName);
            //    document.body.appendChild(pUserURL);
            //
            //}
            //
            //function ajax(method, url, callback) {
            //    var httpRequest = new XMLHttpRequest();
            //
            //    httpRequest.open(method, url);
            //
            //    httpRequest.onreadystatechange = function () {
            //        if (httpRequest.readyState == 4) {
            //            if (httpRequest.status == 200) {
            //                var returnData = httpRequest.responseText;
            //
            //                var jsonObj = JSON.parse(returnData);
            //
            //                callback(jsonObj);
            //
            //                httpRequest = null;
            //            }
            //        }
            //    }
            //    httpRequest.send();
            //}
            //
            //
            //
            //
