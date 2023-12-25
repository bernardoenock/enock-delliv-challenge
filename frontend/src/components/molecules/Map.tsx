import React from "react"
import { LatLngExpression } from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

function Map() {
  const handleTileError = (event: any) => {
    console.error("Erro ao carregar tiles:", event)
  }
  const myShopCoordinates: LatLngExpression = [-23.55052, -46.633308]

  return (
    <MapContainer
      center={myShopCoordinates}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "95%", height: "60vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        eventHandlers={{ error: handleTileError }}
      />
      <Marker position={myShopCoordinates}>
        <Popup>
          <h1>Sua Loja Aqui.</h1>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
