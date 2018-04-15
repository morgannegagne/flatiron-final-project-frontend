import React from 'react';
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import SpotMarker from './SpotMarker'
import FriendSpotMarker from './FriendSpotMarker'
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const Map = withScriptjs(withGoogleMap( (props) => {
  console.log(props)
  const markers = props.spots.map(spot => {
    return props.currentUser.id !== spot.user_id ? < FriendSpotMarker spot={spot} key={`marker-${spot.id}`} />  : < SpotMarker spot={spot} key={`marker-${spot.id}`} />
  })
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

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
})


export default connect(mapStateToProps)(Map)
