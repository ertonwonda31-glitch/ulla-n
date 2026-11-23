
// MENU WEBSITE
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
  menuBtn.textContent =
    nav.classList.contains("active") ? "✕" : "☰";
});

// TAHUN OTOMATIS
document.getElementById("year").textContent =
  new Date().getFullYear();

// NOMOR WHATSAPP ADMIN
// GANTI DENGAN NOMOR WHATSAPP ANDA
const nomorAdmin = "6281234567890";

// FORMULIR KONSULTASI
document.getElementById("contactForm")
.addEventListener("submit", function(event) {

  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const jenis = document.getElementById("jenis").value;
  const pesan = document.getElementById("pesan").value;

  if (!nama || !jenis || !pesan) {
    alert("Silakan lengkapi formulir!");
    return;
  }

  const teks =
    "Halo Admin Ulla NewanakC Digital Studio.%0A%0A" +
    "Nama: " + encodeURIComponent(nama) + "%0A" +
    "Jenis Website: " + encodeURIComponent(jenis) + "%0A" +
    "Pesan: " + encodeURIComponent(pesan) +
    "%0A%0ASaya ingin konsultasi pembuatan website.";

  window.open(
    "https://wa.me/" + nomorAdmin + "?text=" + teks,
    "_blank"
  );
});
