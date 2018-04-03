//$(window).scroll(function() {
//   if($(window).scrollTop() + $(window).height() == $(document).height()) {
//       alert("bottom!");
//   }
//});


window.onscroll = function (e) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        ajax("GET", "https://jsonplaceholder.typicode.com/users", wrzucDaneDoHTML)
    }
    }

    function wrzucDaneDoHTML(dane) {
        for (var i = 0; i < dane.length; i++) {

            var pUserId = document.createElement("p");
            var pUserName = document.createElement("p");
            var pUserURL = document.createElement("p");

            var pUserIdContent = document.createTextNode(" userId: " + dane[i].id);
            var pUserNameContent = document.createTextNode(" userName: " + dane[i].username);
            var pUserURLContent = document.createTextNode(" userURL: " + dane[i].website);

            pUserId.appendChild(pUserIdContent);
            pUserName.appendChild(pUserNameContent);
            pUserURL.appendChild(pUserURLContent);
            document.body.appendChild(pUserId);
            document.body.appendChild(pUserName);
            document.body.appendChild(pUserURL);
        }
         }

        function ajax(method, url, callback) {
            var httpRequest = new XMLHttpRequest();

            httpRequest.open(method, url);

            httpRequest.onreadystatechange = function () {
                if (httpRequest.readyState == 4) {
                    if (httpRequest.status == 200) {
                        var returnData = httpRequest.responseText;

                        var jsonObj = JSON.parse(returnData);

                        callback(jsonObj);

                        httpRequest = null;
                   
                }
            }
        }
            httpRequest.send();
    };










////ajax(„GET”, "http:echo.json.com/userId/108/userName/Akademia108/userURL/akademia108.pl”, function(data{console.log(data);})
////
////        function ajax(method, url, callback) {
////            var httpRequest = new XMLHttpRequest();
////
////            http.open(method, url);
////
////            httpRequest.onreadystatechange = function () {
////                if (httpRequest.radyState == 4) {
////                    if(httpRequest.status == 200) {
////                        
////var returnData = httpRequest.responseText;
////            returnData.userId//undefined
////                        
////                        var jsonObj = JSON.parse(returnData);
////                        jsonObj.userId //== 108;
////                        callback(returnData);
////
////                        httpRequest = null;
////                    }
////                }
////            }
////
////            httpRequest.send();
////        }
////
//
////1sza opcja na funkcje pobierajaca dane funkcja anonimowa
//
//function pobierzDane(event){
//    event.preventDefault();
//
//ajax("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", 
//
//function(costam){
//    
//var pUserId = document.createElement("p");
//var pUserIdContent = document.createTextNode("userId: " + costam.userId);
//pUserId.appendChild(pUserIdContent);
//document.body.appendChild(pUserId);
//    
//var pUserURL = document.createElement("p");
//var pUserURLContent = document.createTextNode("userUrl: " + costam.userURL);
//pUserURL.appendChild(pUserURLContent);
//document.body.appendChild(pUserURL);
//    
//var pUserName = document.createElement("p");
//var pUserNameContent = document.createTextNode("userName: " + costam.userName);
//pUserName.appendChild(pUserNameContent);
//document.body.appendChild(pUserName);
//}
//    )
//}
//
//
//function ajax(method, url, callback) {
//var httpRequest = new XMLHttpRequest();
//httpRequest.open(method, url);
//httpRequest.onreadystatechange = function () {
//if(httpRequest.readyState == 4) {
//                    if(httpRequest.status == 200) {
//                        var returnData = httpRequest.responseText;
//                        
//                        var jsonObj = JSON.parse(returnData);
//
//                        callback(jsonObj);
//
//                        httpRequest = null;
//                        
//                        
//                        
//                        
//                    }
//        
//
//
//                }
//            }
//            httpRequest.send();
//        }





//2ga opcja na funkcje pobierajaca dane (lepsza czystsza metoda mozna jej uzyc jeszcze raz)

//?
