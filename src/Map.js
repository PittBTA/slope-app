import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 40.4444,
      lng: -79.9608
    },
    zoom: 16
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%' }} id='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC6A9F8FIGDy-YOWv0hLQyW33wfltkG40Q' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>

      </div>
    );
  }
}

export default Map;
