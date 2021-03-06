$(function () {
            var slideShow = $(".slide-show");
            var slideCount = $(".single-slide").length;
            var slideWidth = 100 / slideCount;
            var slideIndex = 0;

            // ustawiam szerokosci .slide-show moze byc z klamra{} i :
            slideShow.css(
                "width", slideCount * 100 + "%");

            slideShow.find(".single-slide").each(function (index) {
                $(this).css({
                    "width": slideWidth + "%",
                    "margin-left": index * slideWidth + "%"
                });
            });
            $(".prev-slide").click(function () {
                slide(slideIndex - 1);
            });
    
            $(".next-slide").click(function () {
                slide(slideIndex + 1);
            });




            function slide(newSlideIndex) {
                if (newSlideIndex < 0 || newSlideIndex > slideCount - 1)
                { 
                    return;
                }

            var slideCaption = slideShow.find(".slide-caption").eq(newSlideIndex);
            slideCaption.hide();


            var newMarginLeft = (newSlideIndex * (-100)) + "%";

            slideShow.animate({
                    "margin-left": newMarginLeft
                },
                800,
                function() {
                    slideIndex = newSlideIndex;
                    slideCaption.fadeIn();

                });

        };
});