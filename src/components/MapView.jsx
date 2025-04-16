import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  return (
    <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden p-4">
      <h2 className="text-lg font-semibold mb-3"> Map View</h2>
      <MapContainer
        center={[16.0544, 108.2022]}
        zoom={13}
        className="h-80 w-full"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[16.0544, 108.2022]}>
          <Popup>Khu vực giám sát</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
