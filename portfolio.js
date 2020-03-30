function loadApp() {
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