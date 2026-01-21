/* ======================================================
   DevCodeJs – Animaciones fluidas y elegantes
   ====================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       1. Configuración base
       ========================= */
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    /* =========================
       2. HERO – Animación de entrada
       ========================= */
    const heroText = document.querySelector(".hero__text");
    const heroImage = document.querySelector(".hero__image");

    if (heroText && heroImage) {
        // Estado inicial
        heroText.style.opacity = "0";
        heroText.style.transform = "translateX(-80px)";
        heroText.style.transition = "opacity 1s ease, transform 1s cubic-bezier(0.22, 1, 0.36, 1)";

        heroImage.style.opacity = "0";
        heroImage.style.transform = "translateX(80px)";
        heroImage.style.transition = "opacity 1.1s ease, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)";

        // Trigger animación
        requestAnimationFrame(() => {
            heroText.style.opacity = "1";
            heroText.style.transform = "translateX(0)";

            heroImage.style.opacity = "1";
            heroImage.style.transform = "translateX(0)";
        });
    }

    /* =========================
       3. Animaciones on scroll
       ========================= */
    const animatedElements = document.querySelectorAll(`
        .webdev__card,
        .appdev__text,
        .appdev__image,
        .tech__card,
        .tech__category,
        .impulse__content,
        .trust__item
    `);

    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${index * 80}ms`;
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));

    /* =========================
       4. Stagger especial cards
       ========================= */
    const staggerGroups = [
        ".webdev__card",
        ".tech__card",
        ".trust__item"
    ];

    staggerGroups.forEach(selector => {
        const items = document.querySelectorAll(selector);
        items.forEach((item, i) => {
            item.style.transitionDelay = `${i * 120}ms`;
        });
    });


    /* =========================
       6. Parallax sutil HERO
       ========================= */
    const heroImg = document.querySelector(".hero__image img");
    if (heroImg) {
        let lastScroll = 0;

        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            if (Math.abs(scrollY - lastScroll) < 5) return;

            lastScroll = scrollY;
            heroImg.style.transform = `translateY(${scrollY * 0.08}px)`;
        }, { passive: true });
    }


    /* =========================
       8. Entrada elegante header
       ========================= */
    const header = document.querySelector(".header");
    if (header) {
        header.style.transform = "translateY(-100%)";
        header.style.opacity = "0";

        requestAnimationFrame(() => {
            header.style.transition = "all .9s cubic-bezier(0.22, 1, 0.36, 1)";
            header.style.transform = "translateY(0)";
            header.style.opacity = "1";
        });
    }

});
