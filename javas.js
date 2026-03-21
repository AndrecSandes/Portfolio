/* ===========================
   BLUR CURSOR (desktop only)
=========================== */

const cursorBlur = document.querySelector(".blur-cursor");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let posX = mouseX;
let posY = mouseY;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateBlur() {
    posX += (mouseX - posX) * 0.08;
    posY += (mouseY - posY) * 0.08;
    cursorBlur.style.transform = `translate(${posX - 175}px, ${posY - 175}px)`;
    requestAnimationFrame(animateBlur);
}

animateBlur();

/* ===========================
   MENU BAR DESLIZANTE (desktop)
=========================== */

const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
const bar = document.querySelector(".menu-bar");

menuLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const rect = link.getBoundingClientRect();
        const parentRect = menu.getBoundingClientRect();
        bar.style.left = rect.left - parentRect.left + "px";
        bar.style.width = rect.width + "px";
    });
});

/* ===========================
   HAMBURGER MENU (mobile)
=========================== */

const hamburger = document.getElementById("hamburger");
const floatingHeader = document.querySelector(".floating-header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    floatingHeader.classList.toggle("mobile-open");
});

// Fecha o menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        floatingHeader.classList.remove("mobile-open");
    });
});

/* ===========================
   HERO IMAGE SCROLL (desktop only)
=========================== */

const heroImg = document.querySelector(".hero-image img");

function isMobile() {
    return window.innerWidth <= 768;
}

window.addEventListener("scroll", () => {
    if (isMobile()) {
        // No mobile a imagem não some
        heroImg.style.opacity = "1";
        heroImg.style.transform = "translateY(0)";
        return;
    }

    const scrollY = window.scrollY;
    if (scrollY > 32) {
        heroImg.style.opacity = "0";
        heroImg.style.transform = "translateY(40px)";
    } else {
        heroImg.style.opacity = "1";
        heroImg.style.transform = "translateY(0)";
    }
});

/* ===========================
   REVEAL ON SCROLL
=========================== */

const revealElements = document.querySelectorAll(
    'section, .project-card, .certificate-card, .skill-box, .contact-item'
);

revealElements.forEach(el => {
    el.classList.add('reveal');
});

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 80) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* ===========================
   HEADER SCROLL STYLE
=========================== */

const header = document.querySelector('.floating-header');

window.addEventListener('scroll', () => {
    if (isMobile()) return; // no mobile o header é fixo no topo

    if (window.scrollY > 50) {
        header.style.background = "rgba(0, 0, 0, 0.6)";
        header.style.border = "1px solid rgba(255, 255, 255, 0.2)";
        header.style.backdropFilter = "blur(16px)";
    } else {
        header.style.background = "rgba(255, 255, 255, 0.05)";
        header.style.border = "1px solid rgba(255, 255, 255, 0.1)";
        header.style.backdropFilter = "blur(12px)";
    }
});