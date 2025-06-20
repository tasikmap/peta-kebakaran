
const map = L.map('map').setView([-7.3505, 108.2172], 12);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function getColor(level) {
  return level === 'Tinggi' ? 'red' : level === 'Sedang' ? 'orange' : 'green';
}

dataKebakaran.forEach(item => {
  const marker = L.circleMarker([item.lat, item.lng], {
    radius: 8,
    fillColor: getColor(item.tingkat),
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  }).addTo(map);
  marker.bindPopup(`<b>Lokasi:</b> ${item.lokasi}<br><b>Waktu:</b> ${item.waktu}<br><b>Penyebab:</b> ${item.penyebab}<br><b>Tingkat:</b> ${item.tingkat}`);
});

document.getElementById("locate-btn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      L.marker([latitude, longitude], {
        icon: L.icon({
          iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
          iconSize: [25, 25]
        })
      }).addTo(map).bindPopup("Lokasi Anda").openPopup();
      map.setView([latitude, longitude], 14);
    }, () => alert("Gagal mendapatkan lokasi."));
  } else {
    alert("Browser tidak mendukung geolokasi.");
  }
});
