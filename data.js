const fireIncidents = [
  {
    zoneName: "Cipedes",
    location: [-7.339, 108.216],
    date: "2025-03-12",
    time: "13:20",
    description: "Kebakaran rumah tinggal akibat korsleting listrik."
  },
  {
    zoneName: "Bungursari",
    location: [-7.319, 108.221],
    date: "2025-04-02",
    time: "15:50",
    description: "Gudang terbakar karena puntung rokok."
  },
  {
    zoneName: "Indihiang",
    location: [-7.325, 108.241],
    date: "2025-05-22",
    time: "09:10",
    description: "Warung semi permanen terbakar."
  },
  {
    zoneName: "Tawang",
    location: [-7.324, 108.227],
    date: "2025-02-18",
    time: "11:30",
    description: "Kebakaran dapur rumah kontrakan."
  },
  {
    zoneName: "Kawalu",
    location: [-7.378, 108.254],
    date: "2025-01-09",
    time: "20:15",
    description: "Kebakaran rumah akibat lilin."
  },
  {
    zoneName: "Cihideung",
    location: [-7.329, 108.216],
    date: "2025-06-03",
    time: "07:40",
    description: "Warung terbakar akibat kebocoran tabung gas."
  },
  {
    zoneName: "Mangkubumi",
    location: [-7.353, 108.227],
    date: "2025-06-18",
    time: "14:25",
    description: "Kebakaran ruko bahan bangunan."
  },
  {
    zoneName: "Tamansari",
    location: [-7.379, 108.241],
    date: "2025-06-24",
    time: "10:00",
    description: "Rumah semi permanen habis terbakar."
  },
  {
    zoneName: "Cibeureum",
    location: [-7.373, 108.213],
    date: "2025-07-01",
    time: "17:45",
    description: "Kebakaran lahan kosong."
  }
];

window.onload = function () {
  const map = L.map('map').setView([-7.35, 108.22], 12);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  fireIncidents.forEach(fire => {
    L.marker(fire.location)
      .addTo(map)
      .bindPopup(`
        <strong>${fire.zoneName}</strong><br>
        ${fire.date} ${fire.time}<br>
        ${fire.description}
      `);
  });
};
