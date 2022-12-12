gsap.registerPlugin(ScrollTrigger);

gsap.from("#container", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#snapper",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    snap: {
      snapTo: [0, 0.33, 0.66, 1],
      duration: { min: 0.1, max: 1 },
    },
  },
});

//------------------------ SHOW NAVBAR ------------------------------------------------------------

gsap.from("#navbar", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tshowbar",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "none none reverse none",
    scrub: true,
  },
  left: "0vw",
});

gsap.from("#container", {
  scrollTrigger: {
    scroller: "#container",
    trigger: "#tshowbar",
    markers: false,
    start: "top bottom",
    end: "bottom bottom",
    toggleActions: "none none reverse none",
    scrub: true,
  },
  left: "3vw",
  width: "97vw",
});

//------------------------ SCROLLITELLING ------------------------------------------------------------

let atxt1 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tsecondpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "none none play none",
      scrub: false,
    },
  })
  .to("#atxt1", 0, {
    top: "0vh",
    duration: 0.7,
  })
  .to("#atxt2", 0.1, {
    top: "0vh",
    duration: 0.7,
  })
  .to("#atxt3", 0.2, {
    top: "0vh",
    duration: 0.7,
  })
  .to("#atxt4", 0.3, {
    top: "0vh",
    duration: 0.7,
  });

let atxt2 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tthirdpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "none none play none",
      scrub: false,
    },
  })
  .to("#human", { top: "0vh", duration: 0.7 })
  .to("#a1txt1", { top: "0vh", duration: 0.7 }, "<")
  .to("#human", { color: "#2aa948", duration: 0.7 }, "<1")
  .to("#a1txt1", { top: "-10vh", duration: 0.7 }, "<1")
  .to("#a2txt1", { top: "0vh", duration: 0.7 }, "<0.5")
  .to("#a2txt1", { top: "-10vh", duration: 0.7 }, "<2")
  .to("#a3txt1", { top: "0vh", duration: 0.7 }, "<")
  .to("#a3txt1", { top: "-10vh", duration: 0.7 }, "<2")
  .to("#a4txt1", { top: "0vh", duration: 0.7 }, "<")
  .to("#a4txt1", { top: "-20vh", duration: 0.7 }, "<2")
  .to("#human", { top: "-10vh", duration: 0.7 }, "<0.5")
  .to("#a5txt1", { top: "0vh", duration: 0.7 }, "<0.5");

let atxt3 = gsap
  .timeline({
    scrollTrigger: {
      scroller: "#container",
      trigger: "#tfourthpage",
      markers: false,
      start: "top bottom",
      end: "bottom bottom",
      toggleActions: "none none play none",
      scrub: false,
    },
  })
  .to("#atxt5", 0, {
    top: "0vh",
    duration: 0.7,
  })
  .to("#atxt6", 0.1, {
    top: "0vh",
    duration: 0.7,
  })
  .to("#atxt7", 0.2, {
    top: "0vh",
    duration: 0.7,
  });
