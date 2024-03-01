let itemsCoordinate;
let marker;


const markerIcon = L.icon({
    iconUrl: 'files/assets/layout_2024/location 1.svg',
    iconSize: [24, 42],
    iconAnchor: [24, 42],

});



const map = L.map('map').setView([50.9159014, 11.5544331], 6);

const carte = L.tileLayer('https://api.mapbox://styles/floriantepelmann/clt718jve003801qs61z8fw4g/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    accessToken: 'pk.eyJ1IjoiZmxvcmlhbnRlcGVsbWFubiIsImEiOiJjbHQ3MmY0MmUwYXY5MmxyeGh3YXVvZmI5In0.oB62ooDYL8OsjoovzIdmuQ'
});
carte.addTo(map);

const memberAll = document.querySelectorAll('.ce_rsce_my_location');
memberAll.forEach(member => {
    itemsCoordinate = {
        lat: member.dataset.coordinatesX,
        lng: member.dataset.coordinatesY
    }
    marker = L.marker(itemsCoordinate, {icon: markerIcon}).addTo(map);
    marker.bindPopup(member.dataset.name);

})

