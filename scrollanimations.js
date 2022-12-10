gsap.registerPlugin(ScrollTrigger);

//------------------------ SHOW NAVBAR ------------------------------------------------------------

gsap.from("#navbar", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tshowbar",
    markers: true,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "none none reverse none",
    scrub: true,
    snap: {
      snapTo: "#tshowbar",
      duration: 0.5,
      delay: 0,
      directional: true,
    },
  },
  left: "0vw",
});

gsap.from("#container", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tshowbar",
    markers: true,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "none none reverse none",
    scrub: true,
  },
  left: "3vw",
  width: "97vw",
});

//------------------------ SHOW NAVBAR ------------------------------------------------------------
