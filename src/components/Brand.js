import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './Brand.css'

class Brand extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  

  toggleExpanded() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }


  render() {
    return (
      <div className="Brand">
        <h1>{this.props.brandName}</h1>
        <button  onClick={this.toggleExpanded}>See {this.state.expanded ? 'less' : 'more'} ...</button>
        {this.state.expanded ? (
          <div className="Brand__row">
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
            <div className="Brand__info">
              {this.props.brandDesc}
            </div>

          </div>
        ) : null}
      </div>
    );
  }
}


export default Brand