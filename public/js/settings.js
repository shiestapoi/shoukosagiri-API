const fileInput = document.getElementById("fileInput");
const currentProfilePic = document.getElementById("currentProfilePic");

fileInput.addEventListener("change", function (e) {
  const file = e.target.files[0];

  // Daftar tipe konten yang diperbolehkan (semua gambar kecuali GIF)
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/bmp",
    "image/webp",
    "image/tiff",
  ];

  // Memeriksa apakah file yang diunggah adalah gambar yang diizinkan
  if (!file || !allowedTypes.includes(file.type)) {
    alert("Mohon unggah file gambar (jpeg, png, jpg, bmp, webp, tiff).");
    fileInput.value = ""; // Membersihkan nilai input file
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const newProfilePic = reader.result;
    currentProfilePic.src = newProfilePic;
  };

  reader.readAsDataURL(file);
});

function validateFile(input) {
  const file = input.files[0];
  const maxSizeInBytes = 2 * 1024 * 1024; // 2MB

  if (file && file.size > maxSizeInBytes) {
    alert("Ukuran file terlalu besar. Maksimal 2MB.");
    input.value = ""; // Reset nilai input file jika melebihi batasan
  }
}
