const controller = new ScrollMagic.Controller();

const thorTween = new TweenMax.to("#thor", 1, {
    left: "3%"
});

const tonyTween = new TweenMax.to("#iron-man", 1, {
    right: "3%"
});

const steveTween = new TweenMax.to("#captain-america", 1, {
    left: "3%"
})

const scene1 = new ScrollMagic.Scene({
    triggerElement: "#thor",
    duration: 500,
    reverse: false
})
    .setTween(steveTween)
    .addTo(controller);

const bruceTween = new TweenMax.to("#incredible-hulk", 1, {
    right: "5%"
})

const scene2 = new ScrollMagic.Scene({
    triggerElement: "#iron-man",
    duration: 500,
    reverse: false
})
    .setTween(bruceTween)
    .addTo(controller);

// const scene1 = new ScrollMagic.Scene({
//     triggerElement: ".container h1",
//     duration: 10
// })
//     .setTween(tonyTween)
//     .addIndicators("Tony")
//     .addTo(controller)

