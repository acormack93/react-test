
import { latLngBounds } from 'leaflet';
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
    let bounds = [];
    const showMap = this.props.brandStores.length > 0;
    if (showMap) {
      const locs = this.props.brandStores
      .filter(s => (s.latitiude && s.longitude))
      .map(s => [
        parseFloat(s.latitude), parseFloat(s.longitude)
      ]);
      bounds = latLngBounds(locs);
    } else {
      bounds= latLngBounds([])
    }
    return (
      <div className="Brand">
        <h1>{this.props.brandName}</h1>
        {
          showMap? <button  onClick={this.toggleExpanded}>See {this.state.expanded ? 'less' : 'more'} ...</button> : <p>No store map data available :(</p>
        }
        {this.state.expanded && showMap ? (
          <div className="Brand__row">
            <MapContainer 
              className="Brand__map"
              zoom={13}
              bounds={bounds}
              scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {
                this.props.brandStores.map(s => 
                  <Marker key={s.id} position={[s.latitiude, s.longitude]} data-testid="marker">
                    <Popup>
                      {s.name}
                    </Popup>
                  </Marker>
                  )
              }
            </MapContainer>
            <div className="Brand__info">
              <a href={this.props.website}>{this.props.website}</a>
            </div>

          </div>
        ) : <a href={this.props.website}>{this.props.website}</a>}
      </div>
    );
  }
}


export default Brand