// canvas nilai siswa yg diberikan
let nilaiSiswa = [80, 75, 90, 60, 85, 70];

// ketentuan tugas yg diberikan:
// 1. Tampilkan nilai siswa.
// 2. Hitung rata-rata.
// 3. Tampilkan nilai ≥75.
// 4. Tambah nilai baru.
// 5. Hapus nilai tertentu.
// 6. Tampilkan hasil di console.

// 1. Tampilkan nilai siswa
console.table(nilaiSiswa);

// 2. Hitung rata-rata

// solusi pertama menggunakan looping

// let totalNilai = 0
// for (let i=0; i < nilaiSiswa.length; i++) {
//     totalNilai += nilaiSiswa[i];
// }
// let rataRata = totalNilai / nilaiSiswa.length;
// console.log(`Rata rata nilai siswa: ${rataRata}`)

// solusi kedua menggunakan metode reduce
let totalNilai = nilaiSiswa.reduce(
    (acc, curr)=> {
        return acc + curr
    }, 0
);

let rataRata = totalNilai / nilaiSiswa.length;

//digunakan agar hasil dari totalNilai tidak memiliki banyak angka di belakang koma
let roundedTotal = Math.round(rataRata * 100) / 100;


// 3. tampilkan nilai yg melebihi atau sama dengan 75

// solusi pertama menggunakan if statement dan looping

// let nilaiDiatas75 = [];
// for (let i=0; i < nilaiSiswa.length; i++) {
//     if (nilaiSiswa[i] >= 75) {
//         nilaiDiatas75.push(nilaiSiswa[i]);
//     }
// }

// solusi kedua menggunakan metode filter ada di bawah penambahan nilai baru dan peghapan nilai

// 4. tambah nilai baru
let nilaiBaru = 95;
nilaiSiswa.push(nilaiBaru);
console.log(`Nilai siswa setelah ditambah: ${nilaiSiswa}`);

// 5. hapus nilai tertentu
let nilaiHapus = 60;
let indexHapus = nilaiSiswa.indexOf(nilaiHapus);
if (indexHapus !== -1) {
    nilaiSiswa.splice(indexHapus, 1);
}
console.log(`Nilai siswa setelah dihapus: ${nilaiSiswa}`);


// solusi kedua dari no 3 menggunakan metode filter
// kenapa harus ada di bawah penambahan dan penghapusan nilai?
// karena kita ingin menampilkan nilai diatas 75 dari data nilai siswa yg sudah diupdate,
// bila kita letakkan di atas, maka data yg diambil adalah data sebelum diupdate
let nilaiDiatas75 = nilaiSiswa.filter(
    (nilai) => nilai >= 75
);


// 6. tampilkan hasil di console
console.log("Hasil akhir nilai siswa:");
console.table(nilaiSiswa);
console.log(`Rata rata nilai siswa: ${roundedTotal}`);
console.log(`Nilai diatas atau sama dengan 75: ${nilaiDiatas75}`);