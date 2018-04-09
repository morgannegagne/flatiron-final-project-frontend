import React from 'react';
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import SpotMarker from './SpotMarker'

const Map = withScriptjs(withGoogleMap( (props) => {
  const markers = props.spots.map(spot => < SpotMarker spot={spot} key={`marker-${spot.id}`} />)
  return(
    <GoogleMap
      defaultZoom={5}
      defaultCenter={ {  lat:  42.3601, lng: -71.0589  } }
      >
      {markers}
    </GoogleMap>
  )
}))

const mapStateToProps = state => {
  return {
    spots: state.places.userSpots
  }
}

export default connect(mapStateToProps)(Map)
