var coords = [-6.2805033, 106.6799244]; // the geographic center of our map
var zoomLevel = 15; // the map scale. See: http://wiki.openstreetmap.org/wiki/Zoom_levels

var map = L.map('map').setView(coords, zoomLevel);

// we need to provide the map with some base map tiles. There are few free options.
// we'll use Stamen Acetate, a muted base map good for overlaying data.
var tiles = 'https://{s}.tile.openstreetmap.org/';
// if you'd like to explore other base maps, see: http://developer.mapquest.com/web/products/open/map

// if you use different tiles, be sure to update the attribution :)
L.tileLayer(tiles+'{z}/{x}/{y}.png', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
maxZoom: 20
}).addTo(map);

var circle = L.circle(coords, {
  color: 'blue',
  fillColor: 'blue',
  fillOpacity: 0.2,
  radius: 500
}).addTo(map);

circle.bindPopup("ini menunjukan daerah saya.");

L.marker(coords).addTo(map)
.bindPopup('Alamat ini menuju kantor saya')
.openPopup();
