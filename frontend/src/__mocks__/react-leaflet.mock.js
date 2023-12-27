const React = require("react")

const MapContainer = jest
  .fn()
  .mockImplementation(() =>
    React.createElement("div", null, "MapContainer Mock"),
  )
const Marker = jest
  .fn()
  .mockImplementation(() => React.createElement("div", null, "Marker Mock"))
const Popup = jest
  .fn()
  .mockImplementation(() => React.createElement("div", null, "Popup Mock"))
const TileLayer = jest
  .fn()
  .mockImplementation(() => React.createElement("div", null, "TileLayer Mock"))

module.exports = { MapContainer, Marker, Popup, TileLayer }
