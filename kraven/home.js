gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
  smooth: 2,
  normalizeScroll: true,
});

ScrollTrigger.create({
  trigger: ".div1",
  start: "top top",
  end: "+=100%",
  pin: true,
  pinSpacing: false,
});


ScrollTrigger.create({
  trigger: ".div2",
  start: "top top",
  end: "+=100%",
  pin: true,
  pinSpacing: false,
});


gsap.fromTo(".div1", { scale: 1.3 }, {
  scale: 1,
  duration: 1,
  ease: "power2.in",
});


gsap.fromTo(".s1", { y: "-20rem" }, {
  y: "0",
  ease: "bounce.out",
  duration: 4,
  rotateZ: 0,
  force3D: true,
});

gsap.fromTo(".p1", { x: "80rem" }, {
  x: 0,
  duration: 4,
  ease: "power4.in",
   force3D: true,
});




gsap.to(".front_image", {
  scale: 1.4,
  z:450,
  scrollTrigger: {
    trigger: ".front_image",
    start: "top top",
    end: "+=20%",
    scrub: 3,
    
    
  },
  transformOrigin: "center center",
  ease: "power1.inOut",
});

gsap.to(".background", {
  scale: 1,
  scrollTrigger: {
    trigger: ".background",
    start: "top bottom",
    end: "top center",
    scrub: 3,
  },
  transformOrigin: "center center",
  ease: "power2.inOut",
});

gsap.from(".b1", {
  x: "-50rem",
 
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".front_image",         
    start: "bottom bottom",          
    end: "+=100",                    
    toggleActions: "play none none reverse", 
    scrub: false,
                     
  }
});

gsap.from(".b2", {
  x: "50rem",
 
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".front_image",         
    start: "bottom bottom",         
    end: "+=100",                    
    toggleActions: "play none none reverse", 
    scrub: false,
               
  }
});


gsap.from(".b3", {
  x: "-50rem",
 
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".front_image",        
    start: "bottom bottom",         
    end: "+=100",                    
    toggleActions: "play none none reverse", 
    scrub: false,
                        
  }
});

gsap.from(".b4", {
  x: "-50rem",
 
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".front_image",         
    start: "bottom bottom",          
    end: "+=100",                    
    toggleActions: "play none none reverse",
    scrub: false,
                    
  }
});

gsap.from(".a3", {
    x: "-36rem",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".div3",
      start: "top top",      
      end: "bottom 120%",    
      scrub: 3,
    
    }
  }
);








gsap.from(".b3_1", {
    x: "46rem",
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".div3",
      start: "top top",      
      end: "bottom 120%",    
      scrub: 3,
     
    }
  }
);

gsap.from(".s3", {
  y: "-20rem",
  duration: 2,
  ease: "bounce.out",
  scrollTrigger: {
    trigger: ".div3",
    start: "top top",
    end: "bottom 120%",
    toggleActions: "play none none reverse",
    markers:false
  
  }
});





ScrollTrigger.create({
  trigger: ".div3",
  start: "top top",
  end: "+=120%", 
  pin: true,
  scrub: true, 
  pinSpacing:false,
  
});

ScrollTrigger.create({
  trigger: ".div4",
  start: "top top",
  end: "+=100%", 
  pin: true,
  scrub: true, 
  pinSpacing:false,

});


gsap.fromTo(
  [".a5_1", ".a5_2", ".a5_3", ".a5_4"], 
  {
    y: 200,
    opacity: 0
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: {
      amount:1,
      from: "start"
    },
    scrollTrigger: {
      trigger: ".div5",
      start: "top 20%",
      end:"+50%",
      toggleActions: "play none none reverse",
     
    }
  }
);

ScrollTrigger.create({
  trigger:".div5",
  pin:true,
  scrub:true,
  pinSpacing:false,
  start:"top -25%",
  end:"bottom top",
 
})


gsap.to(".zoom", {
  scale: 1.5,
  z:500,
  
  scrollTrigger: {
    trigger: ".zoom",
    start: "top 30%",
    end: "top 3%",
    scrub: 4,
  
    
  },
  transformOrigin: "center",
  ease: "power4.in",
});

gsap.to(".z2", {
  scale: 1,
  
  scrollTrigger: {
    trigger: ".zoom",
    start: "top bottom",
    end: "top 5%",
    scrub: 3,
    
  },
  transformOrigin: "center center",
  ease: "power4.inOut",
});




ScrollTrigger.create({
  trigger: ".div6",
  start: "top top",
  end: "+=110%", 
  pin: true,
  scrub: true, 
  pinSpacing:false,
  
});

ScrollTrigger.create({
  trigger: ".section",
  start: "top top",
  end: "+=100%", 
  pin: true,
  scrub: true, 
  pinSpacing:false,

});


    gsap.to(".text", {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".section",
        start: "top 30%",
        end: "top 20%",
        scrub: true,
       
      }
    });