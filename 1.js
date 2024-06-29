document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(" .h ",{        
        scrollTrigger: {
            trigger: "#page1",
            start: "top 10%",
            end: "bottom 30%",
            scrub: true,
            // marker: true
        },
        y: 100,
        opacity: -1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        stagger:0.2,
    })
    gsap.to(" #nav ",{        
        scrollTrigger: {
            trigger: "#page1",
            start: "top -10%",
            end: "bottom 30%",
            scrub: true,
            // marker: true
        },
        // y: 100,
        opacity: -1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        stagger:0.2,
    })
    
    gsap.from("#cont .card", {
        scrollTrigger: {
            trigger: "#cont",
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
        },
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1
    })

    gsap.from("#page3 h1 ",{        
        scrollTrigger: {
            trigger: "#page3",
            start: "top 90%",
            end: "bottom 90%",
            scrub: true,
            // marker: true
        },
        y: 100,
        opacity: -1,
        duration: 0.5,
        delay: 0,
        ease: "power2.out",
        stagger:0,
    })
    gsap.from("#page3 p ",{        
        scrollTrigger: {
            trigger: "#page3",
            start: "top 90%",
            end: "bottom 90%",
            scrub: true,
            // marker: true
        },
        y: 100,
        opacity: -1,
        duration: 0.5,
        delay: 0,
        ease: "power2.out",
        stagger:0,
    })
    gsap.from("#page3 img ",{        
        scrollTrigger: {
            trigger: "#page3",
            start: "top 90%",
            end: "bottom 80%",
            scrub: true,
        },
        scale: 0.8,
        opacity: 0,
        duration: 1
    })
    gsap.from("#page4 h2 ",{        
        scrollTrigger: {
            trigger: "#page4",
            start: "top 90%",
            end: "bottom 90%",
            scrub: true,
            // marker: true
        },
        x: -100,
        opacity: -1,
        duration: 0.5,
        delay: 0,
        ease: "power2.out",
        stagger:0,
    })
    gsap.from("#page4 p ",{        
        scrollTrigger: {
            trigger: "#page4",
            start: "top 90%",
            end: "bottom 90%",
            scrub: true,
            // marker: true
        },
        x: 100,
        opacity: -1,
        duration: 0.5,
        delay: 0,
        ease: "power2.out",
        stagger:0,
    })
    gsap.from("#page4 h3 ",{        
        scrollTrigger: {
            trigger: "#page4",
            start: "top 90%",
            end: "bottom 90%",
            scrub: true,
            // marker: true
        },
        x: -100,
        opacity: -1,
        duration: 0.5,
        delay: 0,
        ease: "power2.out",
        stagger:0,
    })
    gsap.from(".footer ",{        
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%",
            end: "bottom 100%",
            // scrub: true,
        },
        scale: 0.8,
        opacity: 0,
        delay: 0,
        duration: 0.5
    })
    
})
gsap.from("#page1 h1 ",{
    y: 100,
    opacity: 0,
    duration: 5,
    delay: 2,
    ease: "power2.out",
    stagger:0.2,
})
var crsr = document.querySelector(".cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y + 20+"px"
})
document.querySelectorAll(".box").forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        var att =elem.getAttribute("data-img")
           console.log(att);
            crsr.style.width ="470px"
            crsr.style.height ="370px"
            crsr.style.borderRadius="4px"
            crsr.style.backgroundImage= `url(${att})`   
    })
    elem.addEventListener("mouseleave", function(){
        elem.style.backgroundColor ="transparent"
        crsr.style.width ="20px"
        crsr.style.height ="20px"
        crsr.style.borderRadius="50%"
        crsr.style.backgroundImage= `none`  
    })
})
document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".bar", {
        width: "100%",
        duration: 2,
        onComplete: () => {
            gsap.to(".loading", { autoAlpha: 0, duration: 0.5, onComplete: showContent });
        }
    });
});

function showContent() {
    document.getElementById("main-content").style.display = "block";
}

// gsap.from(" #nav ",{
//     y: -100,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//     ease: "power2.out",
//     stagger:0.2,
// })

