// components/Map.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
// import L from 'leaflet'

const position: [number, number] = [51.505, -0.09]

export default function Map() {
  return (
    <MapContainer
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         {/* <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      */}
      <Marker position={position}>
        <Popup>
          Our Location
        </Popup>
      </Marker>
    </MapContainer>
  )
}