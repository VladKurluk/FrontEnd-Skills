const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    duration: 800,
})
.setTween('#liquid', {
    attr: {
        scale: 500
    }
})
.addTo(controller)

new ScrollMagic.Scene({
    duration: 300,
})
.setTween(['#main-img', '#heading'], {
    css: {
        opacity: 0
    }
})
.addTo(controller)