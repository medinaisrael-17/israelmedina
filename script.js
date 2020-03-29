$("#scrollArrow").on("click", function () {
    $('html, body').animate({
        scrollTop: $("#nav").offset().top
    }, 3000);
});
