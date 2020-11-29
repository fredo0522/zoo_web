import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const location = {
  address: "Cra. 2a Oe., Cali, Valle del Cauca",
  center: {
    lat: 3.4481076,
    lng: -76.5590259,
  },
  zoom: 16,
};

const mapStyles = {
  height: "55vh",
  width: "100%",
};

class Map extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">¿Dónde nos pueden encontrar?</h1>

        <div className="mb-4">
          <LoadScript googleMapsApiKey="AIzaSyCdkeideVwU7U5YIqysEwwMrIL_eB-T-n4">
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={location.zoom}
              center={location.center}
            >
              <Marker key={location.address} position={location.center} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    );
  }
}

export default Map;