var tl = gsap.timeline()

// nav 

tl.from(".navbar ", {
    opacity: 0,
    // x: -100,
    scale: 3,
    duretion: 2,
    delay: 1,
    // stagger: 0.3
})

tl.from(".left h1", {
    opacity: 0,
})
tl.to(".left h1", {
    x: 200,
    scale: 1.2,
    duration: 1,
    stagger: 0.5,
})
tl.from(".left p", {
    opacity: 0,
    x: 100,

})
tl.to(".left p", {
    scale:0.8
})
tl.to(".left button", {
    x: 100,
})
tl.from(".left button", {
    opacity: 0,
    // x: 100,
    duration: 1,
    // stagger: 0.5
})

tl.from(".section-1 .card", {
    // x: 500,
    scale:3,
    opacity: 0,
    duration: 0.5
})

tl.to(".section-1 .one", {
    x: -100,
    y: -180,
    duration: 0.5,
    // delay: 1,
    rotate: -10,
    // stagger:1
})
tl.to(".section-1 .two", {
    x: 150,
    y: -50,
    duration: 0.5,
    // delay: 1,
    rotate: 20,
    // stagger:1
})
tl.to(".section-1 .three", {
    x: -80,
    y: 150,
    duration: 0.5,
    // delay: 1,
    rotate: -20,
    // stagger:1
})


// section-2 

gsap.to(".section-2", {
    rotate: -5,

})
gsap.to(".section-2 h2", {
    transform: "translateX(-1000%)",
    fontWeight: "200",
    scrollTrigger: {
        trigger: ".section-2",
        scroller: "body",
        // markers: true,
        start: "top 110%",
        end: "top -50%",
        scrub: 5
    }
})