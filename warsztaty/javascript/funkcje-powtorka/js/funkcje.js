$(document).ready(function(){

//    silnia
//    3! = 1*2*3=6
//    5! = !*2*3*4*5=120
    
    function silnia(n){
//mozna rozwiazac rekurencja        
//        if (n==0){
//            return 1;
//            } else {
//                return n * silnia(n-1)
//            }
//    }
//mozna rozwiazac funkcja       
        
        var wynik = 1;
        for(var i=1; i<=n; ++i){
            wynik*=i; //wynik = wynik * 1;
    }
        return wynik;
    }
        console.log(silnia(4));
    

    
    
    var divBlock = $("#block");
    
    var paragraf = $("#paragraf");
    
    
//    console.log(pargraf.partent().html())

    
}); 