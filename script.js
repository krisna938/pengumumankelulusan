
function cekKelulusan() {
  const namaInput = document.getElementById('nama').value.trim().toUpperCase();
  const nisnInput = document.getElementById('nisn').value.trim();
  const hasilDiv = document.getElementById('hasil');

  const siswa = dataSiswa.find(s =>
    s.nama === namaInput && s.nisn === nisnInput
  );

  if (siswa) {
    hasilDiv.innerHTML = `
      <p><strong>Nama:</strong> ${siswa.nama}</p>
      <p><strong>NISN:</strong> ${siswa.nisn}</p>
      <p><strong>Tanggal Lahir:</strong> ${siswa.tgl_lahir}</p>
      <p><strong>Status Kelulusan:</strong> ${siswa.status}</p>
    `;
  } else {
    hasilDiv.innerHTML = '<p style="color:red;">Data tidak ditemukan. Periksa kembali nama dan NISN.</p>';
  }
}
