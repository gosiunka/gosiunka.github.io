//jak odwolac sie do 
var name ="Jestem zzzz"
var obiekt = {
    name: "Pierwszy moj obiekt",
    height: 180,
    print: function(){
        console.log(this.name)
    }
    
}
obiekt.print();




obiekt.age = 32;
obiekt.showAge = function (){
console.log (this.age);
}
obiekt.showAge();


