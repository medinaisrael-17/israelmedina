function loadApp() {
    if (window.innerWidth < 450) {
        $("#flipbook").turn({
            width: 600,
            height: 389,
            gradients: true,
            autoCenter: true
        });
        return;
    }

    if (window.innerWidth < 770) {
        $("#flipbook").turn({
            width: 700,
            height: 450,
            gradients: true,
            autoCenter: true
        });
        return;
    }

    if (window.innerWidth < 1030) {
        $("#flipbook").turn({
            width: 900,
            height: 580,
            gradients: true,
            autoCenter: true
        });
        return;
    }
    
    if (window.innerWidth < 1450) {
        $("#flipbook").turn({
            width: 1100,
            height: 710,
            gradients: true,
            autoCenter: true
        });
        return;
    }

    $("#flipbook").turn({
        width: 1400,
        height: 900,
        gradients: true,
        autoCenter: true
    });
}

yepnope({
    test: Modernizr.csstransforms,
    yep: ["./lib/turn.js"],
    nope: ["./lib/turn.html4.min.js"],
    both: ["./portfolio.css"],
    complete: loadApp
})

$("#scrollArrow").on("click", function () {
    $('html, body').stop().animate({
        scrollTop: $("#myNav").offset().top
    }, 1000);
    return;
});