
window.addEventListener('DOMContentLoaded', function () {
  const userName = prompt("Masukkan nama Anda:");
  const greetingDiv = document.getElementById("greeting");

  if (userName) {
    greetingDiv.textContent = `Selamat datang, ${userName}!`;
  } else {
    greetingDiv.textContent = `Selamat datang!`;
  }
});

const MenuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

MenuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset error messages
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    const nama = document.getElementById('nama').value.trim();
    const tanggal = document.getElementById('tanggal').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const pesan = document.getElementById('pesan').value.trim();

    let isValid = true;

    if (!nama) {
      document.getElementById('error-nama').textContent = 'Nama wajib diisi.';
      isValid = false;
    }

    if (!tanggal) {
      document.getElementById('error-tanggal').textContent = 'Tanggal lahir wajib diisi.';
      isValid = false;
    }

    if (!gender) {
      document.getElementById('error-gender').textContent = 'Pilih jenis kelamin.';
      isValid = false;
    }

    if (!pesan) {
      document.getElementById('error-pesan').textContent = 'Pesan wajib diisi.';
      isValid = false;
    }

    if (isValid) {
      const dateObj = new Date();
    const options = { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
    const waktuSekarang = dateObj.toLocaleDateString('id-ID', options);
      

      // Set output
      document.getElementById('waktu').textContent = waktuSekarang;
      document.getElementById('output-nama').textContent = nama;
      document.getElementById('output-tanggal').textContent = tanggal;
      document.getElementById('output-gender').textContent = gender.value;
      document.getElementById('output-pesan').textContent = pesan;

      // Tampilkan div output
      document.getElementById('output').style.display = 'block';
    }
  });