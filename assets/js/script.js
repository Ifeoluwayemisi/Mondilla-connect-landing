document.addEventListener("DOMContentLoaded", () => {
    // ========== MOBILE MENU ==========
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            const isHidden = mobileMenu.classList.contains("hidden");
            if (isHidden) {
                mobileMenu.classList.remove("hidden");
                setTimeout(() => mobileMenu.classList.replace("opacity-0", "opacity-100"), 10);
                mobileMenu.classList.remove("-translate-y-4");
                mobileMenu.classList.add("translate-y-0");
            } else {
                mobileMenu.classList.add("opacity-0", "-translate-y-4");
                mobileMenu.classList.remove("opacity-100", "translate-y-0");
                setTimeout(() => mobileMenu.classList.add("hidden"), 300);
            }
        });
    }

    // ========== SMOOTH SCROLL & CLOSE MENU ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth" });

            if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
                mobileMenu.classList.add("opacity-0", "-translate-y-4");
                mobileMenu.classList.remove("opacity-100", "translate-y-0");
                setTimeout(() => mobileMenu.classList.add("hidden"), 300);
            }
        });
    });

    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", e => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            if (!name || !email || !message) return alert("Please fill in all fields.");
            alert("Form submitted successfully! (Demo only)");
            contactForm.reset();
        });
    }

    // ========== DARK MODE ==========
    const darkToggle = document.getElementById("darkToggle");
    const darkIcon = document.getElementById("darkIcon");
    const html = document.documentElement;
    if (darkToggle && darkIcon) {
        if (localStorage.getItem("theme") === "dark") html.classList.add("dark");
        darkToggle.addEventListener("click", () => {
            html.classList.toggle("dark");
            const isDark = html.classList.contains("dark");
            localStorage.setItem("theme", isDark ? "dark" : "light");
            darkIcon.classList.replace(isDark ? "bx-moon" : "bx-star", isDark ? "bx-star" : "bx-moon");
        });
    }

    // ========== GSAP ANIMATIONS (DEFERRED ON MOBILE) ==========
    if (typeof gsap !== "undefined") {
        const isDesktop = window.innerWidth > 768; // Only heavy animations on desktop
        if (!isDesktop) return; // skip GSAP for mobile

        if (typeof ScrollTrigger !== "undefined") gsap.registerPlugin(ScrollTrigger);

        // Hero
        const heroText = document.getElementById("hero-text");
        const heroImg = document.getElementById("hero-img");
        if (heroText) gsap.from(heroText, { duration: 1, x: -50, opacity: 0, ease: "power3.out" });
        if (heroImg) gsap.from(heroImg, { duration: 1, x: 50, opacity: 0, delay: 0.3, ease: "power3.out" });

        // Sections / Cards
        const fadeInElements = ["section", ".pricing-card", ".feature-card"];
        fadeInElements.forEach(sel => {
            gsap.utils.toArray(sel).forEach((el, i) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                    opacity: 0,
                    y: 50 + (i * 10),
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "power2.out",
                });
            });
        });

        // Footer
        gsap.from("footer", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: { trigger: "footer", start: "top 90%" }
        });

        // Social icon hover
        document.querySelectorAll(".social-icon").forEach(icon => {
            icon.addEventListener("mouseenter", () => gsap.to(icon, { scale: 1.3, duration: 0.3, ease: "bounce.out" }));
            icon.addEventListener("mouseleave", () => gsap.to(icon, { scale: 1, duration: 0.3, ease: "power1.out" }));
        });
    }
});
