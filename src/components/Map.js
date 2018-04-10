import React from 'react';
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import SpotMarker from './SpotMarker'
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const Map = withScriptjs(withGoogleMap( (props) => {
  const markers = props.spots.map(spot => < SpotMarker spot={spot} key={`marker-${spot.id}`} />)
  return(
    <GoogleMap
      defaultZoom={5}
      defaultCenter={ {  lat:  42.3601, lng: -71.0589  } }
      >
      <MarkerClusterer
        averageCenter
        gridSize={60}
        maxZoom={11}
        >
        {markers}
      </MarkerClusterer>
    </GoogleMap>
  )
}))

export default connect(null)(Map)
