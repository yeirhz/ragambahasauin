const openAboutBtn = document.getElementById("aboutBtn");
const openIntroductionBtn = document.getElementById("IntroductionBtn");
const closeAboutlBtn = document.getElementById("closeAboutBtn");
const closeIntroBtn = document.getElementById("closeIntrolBtn");
const modalAbout = document.getElementById("myModalAbout");
const modalIntroduction = document.getElementById("myModalIntro");
openAboutBtn.addEventListener("click", () => {
  modalAbout.classList.remove("hidden");
});
closeAboutlBtn.addEventListener("click", () => {
  modalAbout.classList.add("hidden");
});

openIntroductionBtn.addEventListener("click", () => {
  modalIntroduction.classList.remove("hidden");
});
closeIntroBtn.addEventListener("click", () => {
  modalIntroduction.classList.add("hidden");
});

// Toggle visibility of the info text
const infoButton = document.getElementById("infoButton");
const infoText = document.getElementById("infoText");

infoButton.addEventListener("click", () => {
  infoText.classList.toggle("hidden"); // Tampilkan atau sembunyikan teks info
});

// Open modal function
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

// Close modal function
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
