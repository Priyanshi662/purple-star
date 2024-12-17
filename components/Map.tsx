// components/Map.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

// Fix default icon issue
let DefaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const position: [number, number] = [30.32112, 78.04102]
//, 
export const Map = () => {

  return (
    <MapContainer
      center={position}
      zoom={8}
      style={{ width: '100%', height: '400px', zIndex: '0' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Use the Marker component with the custom icon */}
      <Marker position={position} >
        <Popup>
          <p>
            <b>Brule River Barn</b>
            <br></br>
            4492 S County Highway H
            <br></br>
            Brule, WI 54820
          </p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};