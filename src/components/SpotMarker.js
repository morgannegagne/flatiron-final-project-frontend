import React from 'react';
import { connect } from 'react-redux'
import { Marker, InfoWindow } from 'react-google-maps'
import InfoWindowCard from './InfoWindowCard'
import Heart from '../images/heart.png'
import Star from '../images/star.png'
import { updateActiveMarker } from '../actions/map'
class SpotMarker extends React.Component {

  state = {
    hover: false,
    active: false
  }

  componentWillReceiveProps(next){
    if (next.activeSpot){
      if (next.activeSpot.id === this.props.spot.id){
        this.setState({active: true})
      } else {
        this.setState({active: false, hover: false})
      }
    }
  }

  handleMouseOver = () => {
    this.setState({hover: true})
  }

  handleMouseOut = () => {
    this.setState({hover: false})
  }

  handleClick = () => {
    this.props.updateActiveMarker(this.props.spot)
  }

  getIcon = () =>{
    if (this.state.active){
      return null
    } else {
      return this.props.spot.spot_type === 'favorite' ? Heart : Star
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
  activeSpot: state.places.activeSpot
})

export default connect(mapStateToProps, {updateActiveMarker})(SpotMarker)
