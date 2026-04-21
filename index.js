function toggleMusic() {
    const music = document.getElementById("bgMusic");

    music.paused ? music.play() : music.pause();
}

/* COUNTDOWN */
let count = 5;
const countdownNumber = document.getElementById("countdown-number");
const countdownScreen = document.getElementById("countdown-screen");

const interval = setInterval(() => {
    count--;
    countdownNumber.textContent = count;

    if (count === 0) {
        clearInterval(interval);
        countdownScreen.style.display = "none";
        revealContent();

        // 🎆 CONFETTI ON START
        confetti({ particleCount: 200, spread: 100 });
    }
}, 1000);

/* REVEAL */
function revealContent() {
    const elements = document.querySelectorAll(
        ".title, .profile, .glass, .gift-card, .footer"
    );

    elements.forEach((el, i) => {
        setTimeout(() => el.classList.add("show"), i * 300);
    });
}

/* ⌨ TYPING EFFECT */
window.addEventListener("load", () => {
    const title = document.querySelector(".title");
    const text = title.textContent;
    title.textContent = "";

    let i = 0;
    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
});

/* 🎆 FIREWORKS ON FOOTER */
let fired = false;

window.addEventListener("scroll", () => {
    const footer = document.querySelector(".footer");
    const pos = footer.getBoundingClientRect().top;

    if (pos < window.innerHeight && !fired) {
        confetti({ particleCount: 180, spread: 120 });
        fired = true;
    }
});

/* 💖 AMHARIC RAIN */
setTimeout(() => {
    setInterval(() => {
        const el = document.createElement("div");
        el.textContent = "እወድሻለው የኔ ውድ እህት";
        el.style.position = "fixed";
        el.style.left = Math.random() * 100 + "vw";
        el.style.top = "-20px";
        el.style.fontSize = "14px";
        el.style.color = "white";
        el.style.animation = "fall 4s linear";
        document.body.appendChild(el);

        setTimeout(() => el.remove(), 4000);
    }, 500);
}, 10000);