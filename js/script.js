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
/* =========================================================
   ANIMATION REALISATIONS
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


if (projectCards.length) {

    const projectsObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        projectsObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    projectCards.forEach(card => {

        projectsObserver.observe(card);

    });

}
/* =========================================================
   GLOBAL DIGITAL DATA FLOW
========================================================= */

const canvas =
    document.getElementById("global-background");

const ctx =
    canvas.getContext("2d");


/* =========================================================
   CONFIGURATION
========================================================= */

const backgroundConfig = {

    particleCount: 95,

    maxDistance: 145,

    particleSpeed: 0.25,

    mouseRadius: 180,

    mouseForce: 0.035,

    connectionOpacity: 0.18,

    particleOpacity: 0.65

};


/* =========================================================
   CANVAS
========================================================= */

let width;
let height;
let dpr;


function resizeCanvas() {

    dpr =
        Math.min(
            window.devicePixelRatio || 1,
            2
        );

    width =
        window.innerWidth;

    height =
        window.innerHeight;


    canvas.width =
        width * dpr;

    canvas.height =
        height * dpr;


    canvas.style.width =
        width + "px";

    canvas.style.height =
        height + "px";


    ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
    );

}


resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


/* =========================================================
   MOUSE
========================================================= */

const mouse = {

    x: null,

    y: null,

    active: false

};


window.addEventListener(
    "mousemove",
    (event) => {

        mouse.x =
            event.clientX;

        mouse.y =
            event.clientY;

        mouse.active =
            true;

    }
);


window.addEventListener(
    "mouseleave",
    () => {

        mouse.active =
            false;

    }
);


/* =========================================================
   PARTICULES
========================================================= */

class Particle {

    constructor() {

        this.x =
            Math.random() * width;

        this.y =
            Math.random() * height;


        this.vx =
            (Math.random() - 0.5)
            * backgroundConfig.particleSpeed;


        this.vy =
            (Math.random() - 0.5)
            * backgroundConfig.particleSpeed;


        this.radius =
            Math.random() * 1.7 + 0.5;


        this.baseRadius =
            this.radius;


        this.opacity =
            Math.random() *
            backgroundConfig.particleOpacity
            + 0.15;


        this.phase =
            Math.random() * Math.PI * 2;


        this.phaseSpeed =
            Math.random() * 0.015 + 0.005;

    }


    update() {

        /* -----------------------------------------
           Mouvement naturel
        ----------------------------------------- */

        this.x += this.vx;

        this.y += this.vy;


        /* -----------------------------------------
           Léger mouvement organique
        ----------------------------------------- */

        this.phase +=
            this.phaseSpeed;


        this.x +=
            Math.sin(this.phase) * 0.08;

        this.y +=
            Math.cos(this.phase) * 0.08;


        /* -----------------------------------------
           Interaction avec la souris
        ----------------------------------------- */

        if (
            mouse.active &&
            mouse.x !== null &&
            mouse.y !== null
        ) {

            const dx =
                this.x - mouse.x;

            const dy =
                this.y - mouse.y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                backgroundConfig.mouseRadius
            ) {

                const force =
                    (
                        backgroundConfig.mouseRadius
                        - distance
                    )
                    /
                    backgroundConfig.mouseRadius;


                const angle =
                    Math.atan2(dy, dx);


                this.vx +=
                    Math.cos(angle)
                    *
                    force
                    *
                    backgroundConfig.mouseForce;


                this.vy +=
                    Math.sin(angle)
                    *
                    force
                    *
                    backgroundConfig.mouseForce;

            }

        }


        /* -----------------------------------------
           Limitation de vitesse
        ----------------------------------------- */

        const maxSpeed = 0.75;


        this.vx =
            Math.max(
                -maxSpeed,
                Math.min(
                    maxSpeed,
                    this.vx
                )
            );


        this.vy =
            Math.max(
                -maxSpeed,
                Math.min(
                    maxSpeed,
                    this.vy
                )
            );


        /* -----------------------------------------
           Retour aux bords
        ----------------------------------------- */

        if (this.x < -20)
            this.x = width + 20;

        if (this.x > width + 20)
            this.x = -20;


        if (this.y < -20)
            this.y = height + 20;

        if (this.y > height + 20)
            this.y = -20;


        /* -----------------------------------------
           Pulsation
        ----------------------------------------- */

        this.radius =
            this.baseRadius
            +
            Math.sin(this.phase) * 0.25;

    }


    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );


        ctx.fillStyle =
            `rgba(56, 189, 248, ${this.opacity})`;


        ctx.fill();


        /* -----------------------------------------
           Halo subtil
        ----------------------------------------- */

        if (this.radius > 1.4) {

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.radius * 3,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                `rgba(37, 99, 235, 0.025)`;


            ctx.fill();

        }

    }

}


/* =========================================================
   CREATION DES PARTICULES
========================================================= */

let particles = [];


function createParticles() {

    particles = [];


    const density =
        window.innerWidth < 700
            ? 0.65
            : 1;


    const count =
        Math.floor(
            backgroundConfig.particleCount
            * density
        );


    for (
        let i = 0;
        i < count;
        i++
    ) {

        particles.push(
            new Particle()
        );

    }

}


createParticles();


window.addEventListener(
    "resize",
    createParticles
);


/* =========================================================
   CONNEXIONS
========================================================= */

function drawConnections() {

    for (
        let i = 0;
        i < particles.length;
        i++
    ) {

        for (
            let j = i + 1;
            j < particles.length;
            j++
        ) {

            const p1 =
                particles[i];

            const p2 =
                particles[j];


            const dx =
                p1.x - p2.x;

            const dy =
                p1.y - p2.y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                backgroundConfig.maxDistance
            ) {

                const opacity =
                    (
                        1 -
                        distance /
                        backgroundConfig.maxDistance
                    )
                    *
                    backgroundConfig.connectionOpacity;


                ctx.beginPath();

                ctx.moveTo(
                    p1.x,
                    p1.y
                );

                ctx.lineTo(
                    p2.x,
                    p2.y
                );


                ctx.strokeStyle =
                    `rgba(56, 189, 248, ${opacity})`;


                ctx.lineWidth =
                    0.6;


                ctx.stroke();

            }

        }

    }

}


/* =========================================================
   CONNEXION SOURIS
========================================================= */

function drawMouseConnections() {

    if (!mouse.active)
        return;


    particles.forEach(
        particle => {

            const dx =
                particle.x -
                mouse.x;

            const dy =
                particle.y -
                mouse.y;


            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                backgroundConfig.mouseRadius
            ) {

                const opacity =
                    (
                        1 -
                        distance /
                        backgroundConfig.mouseRadius
                    )
                    * 0.35;


                ctx.beginPath();

                ctx.moveTo(
                    particle.x,
                    particle.y
                );

                ctx.lineTo(
                    mouse.x,
                    mouse.y
                );


                ctx.strokeStyle =
                    `rgba(56, 189, 248, ${opacity})`;


                ctx.lineWidth =
                    0.7;


                ctx.stroke();

            }

        }
    );

}


/* =========================================================
   MOUSE GLOW
========================================================= */

function drawMouseGlow() {

    if (!mouse.active)
        return;


    const gradient =
        ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,
            mouse.x,
            mouse.y,
            180
        );


    gradient.addColorStop(
        0,
        "rgba(37, 99, 235, 0.08)"
    );


    gradient.addColorStop(
        1,
        "rgba(37, 99, 235, 0)"
    );


    ctx.fillStyle =
        gradient;


    ctx.fillRect(
        mouse.x - 180,
        mouse.y - 180,
        360,
        360
    );

}


/* =========================================================
   SCROLL
========================================================= */

let scrollVelocity = 0;

let lastScroll =
    window.scrollY;


window.addEventListener(
    "scroll",
    () => {

        const current =
            window.scrollY;


        scrollVelocity =
            current -
            lastScroll;


        lastScroll =
            current;

    },
    {
        passive: true
    }
);


/* =========================================================
   ANIMATION
========================================================= */

let animationTime = 0;


function animate() {

    animationTime += 0.01;


    /* -----------------------------------------
       Effacement
    ----------------------------------------- */

    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    /* -----------------------------------------
       Particules
    ----------------------------------------- */

    particles.forEach(
        particle => {

            particle.update();

        }
    );


    /* -----------------------------------------
       Connexions
    ----------------------------------------- */

    drawConnections();


    /* -----------------------------------------
       Connexions souris
    ----------------------------------------- */

    drawMouseConnections();


    /* -----------------------------------------
       Particules
    ----------------------------------------- */

    particles.forEach(
        particle => {

            particle.draw();

        }
    );


    /* -----------------------------------------
       Glow souris
    ----------------------------------------- */

    drawMouseGlow();


    /* -----------------------------------------
       Décélération du scroll
    ----------------------------------------- */

    scrollVelocity *= 0.92;


    requestAnimationFrame(
        animate
    );

}


animate();

/* -----------------------------------------
       Javascript pour les langues
    ----------------------------------------- */

