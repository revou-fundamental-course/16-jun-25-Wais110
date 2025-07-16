
window.addEventListener('DOMContentLoaded', function () {
  const userName = prompt("Masukkan nama Anda:");
  const greetingDiv = document.getElementById("greeting");

  if (userName) {
    greetingDiv.textContent = `Selamat datang, ${userName}!`;
  } else {
    greetingDiv.textContent = `Selamat datang!`;
  }
});

const MenuIcon = document.getElementBySId("menu-icon");
const menuList = document.getElementById("menu-list");

MenuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

    function validasiNama(input) {
      // Hanya huruf dan spasi
      let value = input.value.replace(/[^a-zA-Z\s]/g, '');

      // Kapitalisasi huruf pertama tiap kata
      value = value.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
      });

      input.value = value;
    }

  document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    const output = document.getElementById('output');
    const waktu = new Date();

    // Offset GMT
    const offsetMenit = -waktu.getTimezoneOffset();
    const offsetJam = offsetMenit / 60;
    const gmtString = `GMT${offsetJam >= 0 ? '+' : ''}${offsetJam}`;

    // Format waktu
    const hari = waktu.toLocaleDateString('en-GB', { weekday: 'long' });
    const bulan = waktu.toLocaleDateString('en-GB', { month: 'long' });
    const tanggal = waktu.getDate();
    const tahun = waktu.getFullYear();
    const jam = waktu.toLocaleTimeString('en-GB');

    // Format tanggal lahir dd/mm/yyyy
    const tglLahir = new Date(tanggalLahir);
    const tglFormatted = ('0' + tglLahir.getDate()).slice(-2) + '/' +
                         ('0' + (tglLahir.getMonth() + 1)).slice(-2) + '/' +
                         tglLahir.getFullYear();

    // Tampilkan output
    document.getElementById('waktu').textContent = `${hari} ${bulan} ${tanggal} ${tahun} ${jam} ${gmtString}`;
    document.getElementById('outNama').textContent = nama;
    document.getElementById('outTanggalLahir').textContent = tglFormatted;
    document.getElementById('outGender').textContent = gender;
    document.getElementById('outPesan').textContent = pesan;

    output.style.display = 'block';
  });