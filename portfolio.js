function loadApp() {
    if (window.innerWidth < 450) {
        $("#flipbook").turn({
            width: 335,
            height: 218,
            gradients: true,
            autoCenter: true
        });
        return;
    }

    if (450 < window.innerWidth < 770) {
        $("#flipbook").turn({
            width: 700,
            height: 450,
            gradients: true,
            autoCenter: true
        });
        return;
    }
   
    $("#flipbook").turn({
        width: 922,
        height: 600,
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