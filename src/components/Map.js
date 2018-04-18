import React from 'react';
import { connect } from 'react-redux'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import SpotMarker from './SpotMarker'
import FriendSpotMarker from './FriendSpotMarker'
import Cluster from '../images/marker-cluster.png'
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");


const Map = withScriptjs(withGoogleMap( (props) => {
  const markers = props.spots.map(spot => {
    return props.currentUser.id !== spot.user_id ? < FriendSpotMarker spot={spot} key={`marker-${spot.id}`} />  : < SpotMarker spot={spot} key={`marker-${spot.id}`} />
  })

  const clusterStyles = [
    {
      textColor: 'black',
      url: Cluster,
      anchorText: [32, 32]
    }
  ]

  const dynamicZoom = () => {
    return props.activeMarker ?
      {center: {
        lat: props.activeMarker.place.lat,
        lng: props.activeMarker.place.lng
      },
        zoom: 12
      }
      :
      {center: {  lat:  8.495752, lng: -16.842289  }, zoom: 2.2}
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
