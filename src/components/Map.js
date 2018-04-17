import React from 'react';
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import SpotMarker from './SpotMarker'
import FriendSpotMarker from './FriendSpotMarker'
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const Map = withScriptjs(withGoogleMap( (props) => {
  const markers = props.spots.map(spot => {
    return props.currentUser.id !== spot.user_id ? < FriendSpotMarker spot={spot} key={`marker-${spot.id}`} />  : < SpotMarker spot={spot} key={`marker-${spot.id}`} />
  })

  const dynamicZoom = () => {
    return props.activeMarker ?
      {center: {
        lat: props.activeMarker.place.lat,
        lng: props.activeMarker.place.lng
      },
        zoom: 12
      }
      :
      {center: {  lat:  42.3601, lng: -71.0589  }, zoom: 5}
  }
  return(
    <GoogleMap
      zoom={dynamicZoom().zoom}
      center={ dynamicZoom().center}
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
  currentUser: state.auth.currentUser,
  activeMarker: state.places.activeSpot
})


export default connect(mapStateToProps)(Map)
