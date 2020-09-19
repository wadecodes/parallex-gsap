let scene = document.querySelector("#scene");

let parallax = new Parallax(scene, {});

let tl = new gsap.timeline();

function init() {
    tl.from(
        ".logo", {
            duration: 1,
            opacity: 0,
            x: -20,
            ease: Expo.easeInOut
        },
        ".5"
    );

    tl.from(
        ".menu-links ul li,.search,.account ,.cart", {
            duration: 1,
            opacity: 0,
            y: -20,
            ease: Power3.easeInOut,
            stagger: 0.1,
        },
        "<.5"
    );

    tl.from(
        ".juice", {
            duration: 1,
            opacity: 0,
            y: -2000,
            ease: Power3.easeInOut
        },
        "<1"
    );

    tl.from(
        ".layer img ", {
            duration: 1,
            opacity: 0,
            y: -2000,
            ease: Power3.easeInOut,
            stagger: 0.2,
        },
        "<"
    );

    tl.from(
        ".content > *", {
            duration: 1,
            opacity: 0,
            y: 20,
            ease: Power3.easeInOut,
            stagger: 0
        },
        "<.5"
    );

    tl.from(
        ".prev", {
            duration: 1,
            opacity: 0,
            x: -20,
            ease: Power3.easeInOut
        },
        "<.5"
    );
    tl.from(
        ".next", {
            duration: 1,
            opacity: 0,
            x: 20,
            ease: Power3.easeInOut
        },
        "<.5"
    );
}
document.addEventListener("DOMContentLoaded", init, false);