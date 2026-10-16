const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const secretMessage = document.getElementById("secretMessage");

// Tombol musik
musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicBtn.textContent = "♫ Matikan Musik";
    } catch (error) {
      musicBtn.textContent = "Musik tidak tersedia";
      console.error(error);
    }
  } else {
    music.pause();
    musicBtn.textContent = "♫ Musik";
  }
});

// Tombol pesan rahasia
surpriseBtn.addEventListener("click", () => {
  secretMessage.classList.toggle("show");

  if (secretMessage.classList.contains("show")) {
    surpriseBtn.textContent = "Tutup Pesan 💗";
    createHeartBurst();
  } else {
    surpriseBtn.textContent = "Buka Pesan Rahasia 💌";
  }
});

// Animasi hati
const heartsContainer = document.getElementById("hearts");
const heartSymbols = ["💗", "💕", "💖", "♡", "💘"];

function createHeart() {
  const heart = document.createElement("span");

  heart.className = "heart";
  heart.textContent =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 15 + Math.random() * 20 + "px";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  heartsContainer.appendChild(heart);

  heart.addEventListener("animationend", () => {
    heart.remove();
  });
}

function createHeartBurst() {
  for (let i = 0; i < 20; i++) {
    setTimeout(createHeart, i * 100);
  }
}

// Hati muncul secara berkala
let heartInterval = setInterval(createHeart, 700);

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  clearInterval(heartInterval);
}
