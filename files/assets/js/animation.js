gsap.registerPlugin(ScrollTrigger);


/*gsap.from( ".link-header",{
    duration: 4,
    scale: 0.5,
    scrollTrigger: {
        trigger: ".link-header",
        start: "center bottom",
        end: "bottom top",
        toggleActions: "restart pause restart restart",
    }
})*/

gsap.to('#header .link-header', {
    duration: 0.25,
 /*   width: "35%",*/
    scale: 0.6,
    scrollTrigger: {
        trigger: ".header-image",
        start: "bottom center",
        end: "bottom center",
        toggleActions: "play none reverse none",
    },
})


