import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Brand.css'

class Brand extends Component {


  render() {
    return (
      <div className="Brand">
        <h1>{this.props.brandName}</h1>
        <MapContainer className="Brand__map" center={[this.props.location.lat, this.props.location.long]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[this.props.location.lat, this.props.location.long]} data-testid="marker">
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  }
}


export default Brand