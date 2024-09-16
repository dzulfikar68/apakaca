// Fungsi untuk menghitung jarak antara dua titik menggunakan formula Haversine
function haversine(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius bumi dalam kilometer
    var dLat = deg2rad(lat2 - lat1); // Perbedaan lintang dalam radian
    var dLon = deg2rad(lon2 - lon1); // Perbedaan bujur dalam radian
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c; // Jarak dalam kilometer
    return distance;
}

// Fungsi untuk mengubah derajat ke radian
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Daftar koordinat yang akan dihitung (latitude, longitude)
var coordinates = [
    { lat: -6.200000, lon: 106.816666 }, // Jakarta
    { lat: -6.917464, lon: 107.619123 }, // Bandung
    { lat: -7.250445, lon: 112.768845 }, // Surabaya
    { lat: -8.340539, lon: 115.092974 }  // Bali
];

// Koordinat target (misal lokasi pengguna)
var targetLat = -6.175110;  // Monas Jakarta
var targetLon = 106.865039;

// Variabel untuk menyimpan koordinat terdekat
var nearestLocation = null;
var minDistance = Infinity;

// Looping untuk menghitung jarak antara target dan setiap titik
coordinates.forEach(function(coord) {
    var distance = haversine(targetLat, targetLon, coord.lat, coord.lon);
    
    // Jika jarak lebih kecil dari jarak minimum saat ini, update nilai
    if (distance < minDistance) {
        minDistance = distance;
        nearestLocation = coord;
    }
});

// Output hasil
console.log("Koordinat terdekat:", nearestLocation);
console.log("Jarak terdekat:", minDistance, "km");

/**
Penjelasan Kode:
Fungsi haversine:

Fungsi ini menghitung jarak antara dua titik di bumi berdasarkan lintang dan bujur menggunakan rumus Haversine.
Rumus ini mempertimbangkan kelengkungan bumi, sehingga memberikan hasil jarak yang lebih akurat untuk jarak yang lebih jauh.
Fungsi deg2rad:

Fungsi ini digunakan untuk mengonversi sudut dari derajat menjadi radian, karena fungsi trigonometri dalam JavaScript (Math.sin, Math.cos, dll.) bekerja dengan radian.
Looping dan Menghitung Jarak:

Kode melakukan looping pada array coordinates, menghitung jarak antara koordinat target dan setiap koordinat dalam array.
Jika jarak yang dihitung lebih kecil dari jarak minimum yang disimpan, titik tersebut di-set sebagai titik terdekat (nearestLocation), dan jaraknya disimpan di variabel minDistance.
Output:

Koordinat terdekat dari target dan jarak terdekatnya dicetak ke console.

Hasil:
Dengan kode ini, kamu bisa mendapatkan koordinat terdekat dari sekumpulan titik yang kamu miliki.
Jarak juga bisa dihitung dalam kilometer. Jika ingin hasil dalam mil, ganti nilai R di fungsi haversine menjadi 3958.8 (jari-jari bumi dalam mil).

Contoh:
Misalkan koordinat target adalah Monas, Jakarta:

var targetLat = -6.175110;  // Monas
var targetLon = 106.865039; // Jakarta
Dan data koordinat lain adalah:

Jakarta: -6.200000, 106.816666
Bandung: -6.917464, 107.619123
Surabaya: -7.250445, 112.768845
Bali: -8.340539, 115.092974

Hasilnya akan menunjukkan titik Jakarta sebagai koordinat terdekat dari Monas dengan jarak terdekat dalam kilometer.

 */
