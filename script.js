$("#scrollArrow").on("click", function () {
    $('html, body').stop().animate({
        scrollTop: $("#nav").offset().top
    }, 4000);
});

const controller = new ScrollMagic.Controller();


const surferTween = new TweenMax.to("#surfer", 1, {
    left: "-10%"
});

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#gradient",
    duration: 1000
})
    .setTween(surferTween)
    .addTo(controller)

const thanosTween = new TweenMax.to("#thanos", 1, {
    right: "0"
})

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#gradient",
    duration: 1000
})
    .setTween(thanosTween)
    .addTo(controller)

const navTween = new TweenMax.to("#nav", 1, {
    top: "45%"
})

const scene3 = new ScrollMagic.Scene({
    triggerElement: "#gradient",
    duration: 1000
})
    .setTween(navTween)
    .addTo(controller)

const controller2 = new ScrollMagic.Controller();

const thorTween = new TweenMax.to()