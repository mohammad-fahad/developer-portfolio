"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    let cancelled = false;
    let context;
    let removeInteractions = () => {};

    (async () => {
      try {
        const [{ gsap }, scrollTriggerModule] = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
        ]);
        if (cancelled) return;

        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        context = gsap.context(() => {
          const progress = document.querySelector("[data-scroll-progress]");
          if (progress) {
            ScrollTrigger.create({
              start: 0,
              end: () => ScrollTrigger.maxScroll(window),
              onUpdate: (self) => gsap.set(progress, { scaleX: self.progress }),
            });
          }

          const hero = gsap.utils.toArray("[data-hero-reveal]");
          if (hero.length) {
            gsap.from(hero, {
              autoAlpha: 0,
              y: 28,
              filter: "blur(8px)",
              duration: 1,
              stagger: 0.09,
              ease: "power3.out",
              clearProps: "all",
            });
          }

          gsap.utils.toArray("[data-hero-parallax]").forEach((element) => {
            gsap.to(element, {
              yPercent: Number(element.dataset.parallaxSpeed || -12),
              ease: "none",
              scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            });
          });

          gsap.utils.toArray("[data-reveal]").forEach((element) => {
            gsap.from(element, {
              autoAlpha: 0,
              y: 26,
              filter: "blur(6px)",
              clipPath: "inset(0 0 100% 0)",
              duration: 0.9,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: { trigger: element, start: "top 88%", once: true },
            });
          });

          gsap.utils.toArray("[data-project-card]").forEach((element, index) => {
            gsap.from(element, {
              autoAlpha: 0,
              y: 30,
              scale: 0.97,
              rotateX: 6,
              duration: 0.8,
              delay: (index % 3) * 0.09,
              ease: "power3.out",
              clearProps: "all",
              scrollTrigger: { trigger: element, start: "top 92%", once: true },
            });
          });

          gsap.utils.toArray("[data-count]").forEach((element) => {
            const target = Number(element.dataset.count);
            if (!Number.isFinite(target)) return;
            const suffix = element.dataset.suffix || "";
            const counter = { value: 0 };
            gsap.to(counter, {
              value: target,
              duration: 1.5,
              ease: "power2.out",
              snap: { value: 1 },
              onUpdate: () => {
                element.textContent = `${Math.round(counter.value)}${suffix}`;
              },
              scrollTrigger: { trigger: element, start: "top 92%", once: true },
            });
          });

          gsap.utils.toArray("[data-marquee]").forEach((element) => {
            gsap.to(element, {
              xPercent: -50,
              duration: 26,
              ease: "none",
              repeat: -1,
            });
          });
        });

        const teardown = [];

        gsap.utils.toArray("[data-magnetic]").forEach((element) => {
          const moveX = gsap.quickTo(element, "x", { duration: 0.35, ease: "power3.out" });
          const moveY = gsap.quickTo(element, "y", { duration: 0.35, ease: "power3.out" });
          const onMove = (event) => {
            const bounds = element.getBoundingClientRect();
            moveX((event.clientX - bounds.left - bounds.width / 2) * 0.18);
            moveY((event.clientY - bounds.top - bounds.height / 2) * 0.18);
          };
          const onLeave = () => {
            moveX(0);
            moveY(0);
          };
          element.addEventListener("mousemove", onMove);
          element.addEventListener("mouseleave", onLeave);
          teardown.push(() => {
            element.removeEventListener("mousemove", onMove);
            element.removeEventListener("mouseleave", onLeave);
            gsap.set(element, { x: 0, y: 0 });
          });
        });

        gsap.utils.toArray("[data-tilt]").forEach((element) => {
          const rotateX = gsap.quickTo(element, "rotationX", { duration: 0.4, ease: "power3.out" });
          const rotateY = gsap.quickTo(element, "rotationY", { duration: 0.4, ease: "power3.out" });
          const onMove = (event) => {
            const bounds = element.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            rotateY(x * 8);
            rotateX(-y * 8);
          };
          const onLeave = () => {
            rotateX(0);
            rotateY(0);
          };
          element.addEventListener("mousemove", onMove);
          element.addEventListener("mouseleave", onLeave);
          teardown.push(() => {
            element.removeEventListener("mousemove", onMove);
            element.removeEventListener("mouseleave", onLeave);
            gsap.set(element, { rotationX: 0, rotationY: 0 });
          });
        });

        removeInteractions = () => teardown.forEach((fn) => fn());
        ScrollTrigger.refresh();
      } catch (error) {
        console.warn("Animations unavailable:", error?.message || "unknown error");
      }
    })();

    return () => {
      cancelled = true;
      removeInteractions();
      context?.revert();
    };
  }, []);

  return <div className="scroll-progress" data-scroll-progress aria-hidden="true" />;
}
