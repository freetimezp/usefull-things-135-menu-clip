
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".menu");
    const toggleBtn = document.querySelector(".toggle");
    const closeBtn = document.querySelector(".close-btn");

    let isOpen = false;

    const tl = gsap.timeline({ paused: true });

    tl.to(menu, {
        duration: 0.3,
        opacity: 1
    });

    tl.to(menu, {
        duration: 1,
        ease: "power3.inOut",
        clipPath: "polygon(49.75% 0%, 50.25% 0%, 50.25% 100%, 49.75% 100%)"
    }, "-=0.3");

    tl.to(menu, {
        duration: 1,
        ease: "power3.inOut",
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        pointerEvents: "all"
    });

    tl.to(".divider", {
        duration: 1,
        ease: "power4.inOut",
        height: "100%"
    }, "-=0.75");

    toggleBtn.addEventListener("click", function () {
        if (isOpen) {
            tl.reverse();
        } else {
            tl.play();
        }

        isOpen = !isOpen;
    });

    closeBtn.addEventListener("click", function () {
        if (isOpen) {
            tl.reverse();
        } else {
            tl.play();
        }

        isOpen = !isOpen;
    });
});















