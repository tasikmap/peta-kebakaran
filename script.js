const map = L.map('map').setView([-7.325, 108.215], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

function getColor(tingkat) {
  if (tingkat === "Tinggi") return "red";
  if (tingkat === "Sedang") return "orange";
  return "green";
}

kebakaranData.forEach(data => {
  L.circleMarker([data.lat, data.lng], {
    radius: 8,
    color: getColor(data.tingkat),
    fillColor: getColor(data.tingkat),
    fillOpacity: 0.8
  })
    .bindPopup(
      `<b>Lokasi:</b> ${data.lokasi}<br>
       <b>Tingkat:</b> ${data.tingkat}<br>
       <b>Jenis:</b> ${data.jenis}<br>
       <b>Penyebab:</b> ${data.penyebab}<br>
       <b>Waktu:</b> ${data.waktu}`
    )
    .addTo(map);
});
