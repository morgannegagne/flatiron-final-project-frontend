import React from 'react';
import { connect } from 'react-redux'
import { Marker, InfoWindow } from 'react-google-maps'
import InfoWindowCard from './InfoWindowCard'
import HeartMarker from '../images/heart-marker.png'
import StarMarker from '../images/star-marker.png'
import { showFriendSpot, showExploreSpot } from '../actions/places'
import FriendMarker from '../images/friend-marker.png'

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
    if (this.props.activeMenu === "explore"){
      this.props.showExploreSpot(this.props.spot)
    } else{
      this.props.showFriendSpot(this.props.spot)
    }
  }

  getIcon = () =>{
    if (this.state.active){
      return null
    } else {
      return FriendMarker
    }
  }

  render(){
    const place = this.props.spot.place
    const location = {lat: place.lat, lng: place.lng}
    const icon = this.getIcon()
    return(
        <Marker
          position={location}
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
          icon={icon}
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
  activeSpot: state.places.activeSpot,
  activeMenu: state.places.activeMenu
})

export default connect(mapStateToProps, { showFriendSpot, showExploreSpot })(FriendSpotMarker)
