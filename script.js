$("#scrollArrow").on("click", function () {
    $('html, body').animate({
        scrollTop: $("#nav").offset().top
    }, 3000);
});

const controller = new ScrollMagic.Controller();


const surferTween = new TweenMax.to("#surfer", 7, {
    left: "-10%"
});

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#gradient",
    duration: 1000
})
    .setTween(surferTween)
    .addTo(controller)

const thanosTween = new TweenMax.to("#thanos", 7, {
    right: "0"
})

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#gradient",
    duration: 1000
})
    .setTween(thanosTween)
    .addTo(controller)

const navTween = new TweenMax.to("#nav", 7, {
    top: "45%"
})

const scene3 = new ScrollMagic.Scene({
    triggerElement: "#gradient",
    duration: 1000
})
    .setTween(navTween)
    .addTo(controller)