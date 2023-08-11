var cursor = document.querySelector(".cursor");
var cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    cursorBlur.style.left = dets.x - 200 + "px";
    cursorBlur.style.top = dets.y - 200 + "px";
})

gsap.to(".nav", {
    backgroundColor: '#000',
    height: '110px',
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -20%",
        end: "top -70%",
        scrub: 2
    }
})