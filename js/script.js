/* =========================================================
   MENU MOBILE
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* =========================================================
   FERMER LE MENU APRÈS UN CLIC
========================================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* =========================================================
   NAVIGATION ACTIVE
========================================================= */

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   ANIMATION DE LA TIMELINE
========================================================= */

const timelineItems =
    document.querySelectorAll(".timeline-item");


const timelineObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.18
        }

    );


timelineItems.forEach(item => {

    timelineObserver.observe(item);

});


/* =========================================================
   PROGRESSION DE LA LIGNE
========================================================= */

const journeySection =
    document.querySelector(".journey-section");

const progressFill =
    document.querySelector(".progress-fill");


function updateJourneyProgress() {

    if (!journeySection || !progressFill) {
        return;
    }

    const rect =
        journeySection.getBoundingClientRect();

    const sectionHeight =
        journeySection.offsetHeight;

    const viewportHeight =
        window.innerHeight;


    /*
       Début de l'animation lorsque la section
       commence à entrer dans l'écran.
    */

    const start =
        viewportHeight * 0.75;


    const distance =
        start - rect.top;


    const total =
        sectionHeight - viewportHeight * 0.35;


    let progress =
        (distance / total) * 100;


    progress =
        Math.max(
            0,
            Math.min(100, progress)
        );


    progressFill.style.width =
        progress + "%";

}


window.addEventListener(
    "scroll",
    updateJourneyProgress
);

window.addEventListener(
    "resize",
    updateJourneyProgress
);

updateJourneyProgress();


/* =========================================================
   PETIT EFFET SUR LE HERO
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


window.addEventListener("mousemove", (event) => {

    if (!heroVisual) {
        return;
    }

    if (window.innerWidth < 1000) {
        return;
    }

    const x =
        (window.innerWidth / 2 - event.clientX)
        / 80;

    const y =
        (window.innerHeight / 2 - event.clientY)
        / 80;


    heroVisual.style.transform =
        `translateY(-50%) translate(${x}px, ${y}px)`;

});
/* =========================================================
   ANIMATION DES EXPERIENCES
========================================================= */

const experienceCards =
    document.querySelectorAll(".experience-card");


const experienceObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


experienceCards.forEach(card => {

    experienceObserver.observe(card);

});
/* =========================================================
   ANIMATION SECTION CONTACT
========================================================= */

const contactSection =
    document.querySelector(".contact-section");


if (contactSection) {

    const contactObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        contactSection.classList.add(
                            "contact-visible"
                        );

                    }

                });

            },

            {
                threshold: 0.25
            }

        );


    contactObserver.observe(contactSection);

}
/* =========================================================
   ANIMATION COMPETENCES
========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


if (skillCards.length) {

    const skillsObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        skillsObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    skillCards.forEach(card => {

        skillsObserver.observe(card);

    });

}