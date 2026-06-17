// =============================
// SCROLL REVEAL ANIMATION
// =============================

const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);


// =============================
// ACTIVE NAVIGATION LINK
// =============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


// =============================
// TYPING EFFECT
// =============================

const typingText = [
    "Java Backend Developer",
    "Spring Boot Developer",
    "REST API Developer",
    "Problem Solver",
    "Computer Science Student"
];

const heroHeading = document.querySelector(".hero h1");

if (heroHeading) {

    const typingElement = document.createElement("div");

    typingElement.style.marginTop = "20px";
    typingElement.style.fontSize = "1.4rem";
    typingElement.style.fontWeight = "600";
    typingElement.style.color = "#06b6d4";

    heroHeading.insertAdjacentElement("afterend", typingElement);

    let textIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentText = typingText[textIndex];

        if (!deleting) {

            typingElement.textContent =
                currentText.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentText.length) {

                deleting = true;

                setTimeout(typeEffect, 1500);

                return;
            }

        } else {

            typingElement.textContent =
                currentText.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                textIndex++;

                if (textIndex >= typingText.length) {
                    textIndex = 0;
                }
            }
        }

        setTimeout(typeEffect, deleting ? 50 : 100);
    }

    typeEffect();
}


// =============================
// NAVBAR SHADOW ON SCROLL
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";
    }
});


// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =============================
// HERO BUTTON ANIMATION
// =============================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-5px) scale(1.03)";
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0) scale(1)";
    });
});


// =============================
// PROJECT CARD EFFECT
// =============================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 25;
        const rotateY = (x - centerX) / 25;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";
    });
});


// =============================
// COUNTER ANIMATION
// =============================

function animateCounter(element, target) {

    let count = 0;

    const speed = target / 80;

    const updateCounter = () => {

        if (count < target) {

            count += speed;

            element.innerText = Math.floor(count);

            requestAnimationFrame(updateCounter);

        } else {

            element.innerText = target;
        }
    };

    updateCounter();
}

document.querySelectorAll(".counter").forEach(counter => {

    const target =
        parseInt(counter.getAttribute("data-target"));

    animateCounter(counter, target);
});


// =============================
// PRELOADER FADE
// =============================

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);
    }
});


// =============================
// CONSOLE SIGNATURE
// =============================

console.log(
`
===================================
 Portfolio Developed By
 Himanshu Singh
 Java Backend Developer
===================================
`
);
