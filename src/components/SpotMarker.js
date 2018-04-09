import React from 'react';
import { Marker } from 'react-google-maps';

export default class SpotMarker extends React.Component {

  render(){
    const location = {lat: this.props.spot.place.lat, lng: this.props.spot.place.lng}
    return(
        <Marker
          position={location}
        >
        </Marker>
    );
  }
}
