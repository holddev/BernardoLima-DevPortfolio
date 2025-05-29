import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollToPlugin);

export const setupScrollAnimations = () => {
  const sections = gsap.utils.toArray("#inicio, #experiencia, #proyectos, #habilidades");

  //scroll horizontal
  const horizontalTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none"
  });

  ScrollTrigger.create({
    id: "mainScroll",
    trigger: ".scroll-container",
    start: "top top",
    end: () => "+=" + document.querySelector("#scroll-sections").offsetWidth,
    pin: true,
    scrub: 2,
    snap: 1 / (sections.length - 1),
    animation: horizontalTween,
  });

  //Menu de Navegacion
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = anchor.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      const sectionIndex = sections.findIndex(sec => sec === targetSection);

      if (sectionIndex !== -1) {
        const progress = sectionIndex / (sections.length - 1);

        gsap.to(horizontalTween, {
          progress,
          duration: 1,
          ease: "power3.inOut",
          onUpdate: () => ScrollTrigger.update(),
        });
      }
    });
  });

  // Definición de las lineas de tiempo
  const tl1 = gsap.timeline()
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#experiencia",
      containerAnimation: horizontalTween,
      start: "start center",
      end: "center 50%",
      scrub: true,
    }
  })
  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#proyectos",
      containerAnimation: horizontalTween,
      start: "start center",
      end: "center 50%",
      scrub: true
    }
  })
  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#habilidades",
      containerAnimation: horizontalTween,
      start: "start center",
      end: "center center",
      scrub: true,
      markers: true
    }
  })


  // Animaciones de la pag. Inicio
  const rolSplit = SplitText.create(".hero__rol", {
    type: "chars, words",
    charsClass: "char"
  });
  const descriptionSplit = SplitText.create(".hero__description", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
  });

  tl1.from("#inicio .hero__badge", {
    duration: 1,
    opacity: 0,
    xPercent: -80,
    ease: "power2.out"
  }, "startTitle")
    .from(".header", {
      yPercent: -110,
      duration: 1
    }, "startTitle")
    .from("#inicio .hero__title", {
      duration: 0.6,
      opacity: 0,
      yPercent: 50,
      ease: "power2.out"
    }, "startTitle")
    .from(descriptionSplit.lines, {
      duration: 1,
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
    }, "startDescription")
    .from(".hero__btn-cv", {
      backgroundColor: "red",
      duration: 0.5,
      opacity: 0,
      y: 25,
      ease: "power2.out"
    }, "startDescription")
    .from(rolSplit.chars, {
      duration: 1,
      opacity: 0,
      scale: 0,
      y: 30,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.05,
    }, "startRRSS")
    .from("#inicio .hero__rrss > *", {
      duration: 1,
      opacity: 0,
      y: 25,
      ease: "power2.out",
      stagger: 0.5
    }, "startRRSS");

  //Animaciones de la pag. Experiencia
  const expDescription = SplitText.create("#experiencia .exp__description", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
  });

  tl2.from("#experiencia .title__h3", {
    opacity: .6,
    xPercent: 40,
    ease: "power2.out"
  }, "exp")
    .from("#experiencia .title__hr", {
      opacity: .6,
      scaleX: 0,
      ease: "power2.out",
    }, "exp")
    .from("#experiencia .exp__dot", {
      y: "32px",
      ease: "power2.out",
    }, "exp")
    .from("#experiencia .exp__position", {
      y: "32px",
      opacity: .6,
      ease: "power2.out",
    }, "exp")
    .from("#experiencia .exp__company", {
      opacity: .6,
      y: "32px",
      ease: "power2.out",
    }, "exp")
    .from("#experiencia .exp__dates", {
      opacity: .6,
      y: "32px",
      ease: "power2.out",
    }, "exp")
    .from(expDescription.lines, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.1,
      ease: "expo.out",
    }, "exp")

  //Animaciones de la pag. Proyectos
  tl3.from("#proyectos .title__h3", {
    opacity: .6,
    xPercent: 40,
    ease: "power2.out"
  }, "proy")
    .from("#proyectos .title__hr", {
      opacity: .6,
      scaleX: 0,
      ease: "power2.out",
    }, "proy")
    .from("#proyectos .proy__card", {
      scale: 0.8,
      x: "50%",
      opacity: .5,
      stagger: 0.1,
      ease: "power2.out",
    }, "proy")

  //Animaciones de la pag. Habilidades
  const skillSplit = SplitText.create("#habilidades .hab__info > p", {
    type: "words, lines",
    charsClass: "line"
  });
  tl4.from("#habilidades .title__h3", {
    opacity: .6,
    x: "50px",
    ease: "power2.out"
  }, "habi")
    .from("#habilidades .title__hr", {
      opacity: .6,
      scaleX: 0,
      ease: "power2.out",
    }, "habi")
    .from(skillSplit.lines, {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      ease: "power2.out",
    }, "habi")
    .from("#habilidades .hab__tech", {
      yPercent: 100,
    }, "habi")
}
