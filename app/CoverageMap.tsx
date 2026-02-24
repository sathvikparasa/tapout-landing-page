'use client';

import { lots } from './lots';

const centerLat = lots.reduce((s, l) => s + l.lat, 0) / lots.length;
const centerLng = lots.reduce((s, l) => s + l.lng, 0) / lots.length;

const mapHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body, #map { width: 100%; height: 100%; }
  </style>
</head>
<body>
  <div id="map"></div>
  <script>
    const map = L.map('map', {
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        attributionControl: false,
      }).setView([${centerLat}, ${centerLng}], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const lots = ${JSON.stringify(lots)};

    lots.forEach(lot => {
      const icon = L.divIcon({
        className: '',
        html: \`<div style="
          width: 14px; height: 14px;
          background: #9CAF88;
          border: 2.5px solid #0a0a0a;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.25);
        "></div>\`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });

      L.marker([lot.lat, lot.lng], { icon })
        .addTo(map)
        .bindTooltip(lot.name, {
          permanent: true,
          direction: 'top',
          offset: [0, -10],
          className: 'lot-label',
        });
    });
  </script>
  <style>
    .lot-label {
      background: #0a0a0a !important;
      color: #fff !important;
      border: none !important;
      border-radius: 0 !important;
      padding: 3px 8px !important;
      font-size: 10px !important;
      font-weight: 600 !important;
      letter-spacing: 0.05em !important;
      text-transform: uppercase !important;
      box-shadow: none !important;
      white-space: nowrap !important;
    }
    .lot-label::before { display: none !important; }
    .leaflet-attribution-flag { display: none !important; }
  </style>
</body>
</html>`;

export default function CoverageMap() {
  return (
    <iframe
      srcDoc={mapHtml}
      style={{ width: '100%', height: '100%', border: 'none', display: 'block', minHeight: 500, pointerEvents: 'none' }}
      title="TapOut Coverage Map"
    />
  );
}
