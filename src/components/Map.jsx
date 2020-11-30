import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mapStyles: {
        height: "55vh",
        width: "100%",
      },
      location: {
        address: "Cra. 2a Oe., Cali, Valle del Cauca",
        center: {
          lat: 3.4481076,
          lng: -76.5590259,
        },
        zoom: 16,
      },
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-center">¿Dónde nos pueden encontrar?</h1>

        <div className="mb-4">
          <LoadScript googleMapsApiKey="AIzaSyCdkeideVwU7U5YIqysEwwMrIL_eB-T-n4">
            <GoogleMap
              mapContainerStyle={this.state.mapStyles}
              zoom={this.state.location.zoom}
              center={this.state.location.center}
            >
              <Marker
                key={this.state.location.address}
                position={this.state.location.center}
              />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    );
  }
}

export default Map;
