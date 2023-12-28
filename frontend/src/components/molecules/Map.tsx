import React from "react"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import * as L from "leaflet"
import "leaflet-defaulticon-compatibility"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

function Map() {
  const handleTileError = (event: any) => {
    console.error("Erro ao carregar tiles:", event)
  }
  const myShopCoordinates: L.LatLngExpression = [-23.55052, -46.633308]

  return (
    <MapContainer
      center={myShopCoordinates}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "50%", height: "60vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        eventHandlers={{ error: handleTileError }}
      />
      <Marker
        position={myShopCoordinates}
        icon={L.divIcon({
          iconSize: [100, 100],
          iconAnchor: [5 / 2, 5 + 9],
          className: "mymarker",
          html: "🏪",
        })}
      >
        <Popup>
          <h1>Sua Loja Aqui.</h1>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
