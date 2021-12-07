import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Brand.css'
// import 'leaflet/dist/leaflet.css';

class Brand extends Component {


  render() {
    return (
      <div className="Brand">
        <h1>{this.props.brandName}</h1>
        <MapContainer className="Brand__map" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]} data-testid="marker">
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        map
      </div>
    );
  }
}


export default Brand