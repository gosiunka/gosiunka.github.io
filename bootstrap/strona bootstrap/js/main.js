//$("a[href^='#']").on("click", function(e){
//    e.preventDefault();
//    $("html,body").animate(
//    {scrollTop: $(this.hash).offset().top},
//        600
//        );
//    
//});
//
//
//$("a[href='#services']").on("click", function(e){
//    e.preventDefault();
//    var target = $(this).attr('href');
//    
//    $("html,body").animate(
//    {scrollTop: $(target).offset().top},
//        600
//        );
//    
//});
//z elementem z htmla data costam 
//$("a[href='#services']").on("click", function(e){
//    e.preventDefault();
//    var target = $(this).attr('data-section');
//    
//    $("html,body").animate(
//    {scrollTop: $(target).offset().top},
//        600
//        );
//    
//});
$("button[data-scrollto]").on('click', function(){
    var target = $(this).attr("data-scrollto");
    var topPosition = $(target).offset().top;
    $("html,body").animate({scrollTop: TopPosition},700);
});


