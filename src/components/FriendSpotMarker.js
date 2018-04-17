import React from 'react';
import { connect } from 'react-redux'
import { Marker, InfoWindow } from 'react-google-maps'
import InfoWindowCard from './InfoWindowCard'
import HeartMarker from '../images/heart-marker.png'
import StarMarker from '../images/star-marker.png'
import { showFriendSpot } from '../actions/places'

class FriendSpotMarker extends React.Component {

  state = {
    hover: false,
    active: false
  }


  handleMouseOver = () => {
    this.setState({hover: true})
  }

  handleMouseOut = () => {
    this.setState({hover: false})
  }

  handleClick = () => {
    this.props.showFriendSpot(this.props.spot)
  }

  getIcon = () =>{
    if (this.state.active){
      return null
    } else {
      return this.props.spot.spot_type === 'favorite' ? HeartMarker : StarMarker
    }
  }

  render(){
    const place = this.props.spot.place
    const location = {lat: place.lat, lng: place.lng}
    return(
        <Marker
          position={location}
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
        {
          this.state.hover && !this.state.active ?
          <InfoWindow defaultPosition={location}>
            <InfoWindowCard spot={this.props.spot}/>
          </InfoWindow>
          :
          null
        }
      </Marker>
    );
  }
}

const mapStateToProps = state => ({
  activeSpot: state.places.activeSpot
})

export default connect(mapStateToProps, { showFriendSpot })(FriendSpotMarker)
