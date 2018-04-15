import React from 'react';
import { connect } from 'react-redux'
import { saveSpot } from '../actions/places'
import { updateActiveMarker } from '../actions/map'
import { List, Image, Rating, Button, Popup } from 'semantic-ui-react'
import BigHeartOutline from '../images/heart-outline.png'
import BigStarOutline from '../images/big-star.png'
import BigStar from '../images/big-star-filled.png'
import BigHeart from '../images/big-heart.png'

class OptionCard extends React.Component {

  state = {
    valid: true,
    type: null,
  }

  handleChange = (e) => {
    this.setState({type: e.target.value})
  }

  checkIfSaved = () => {
    let savedSpot = null
    this.props.savedSpots.forEach(spot => {
      if (spot.place.google_uid === this.props.place.place_id){
        savedSpot = spot
      }
    })
    return savedSpot
  }

  render(){
    console.log(this.state)
    const { place } = this.props
    const saved = this.checkIfSaved()
    return(
      <div className="option-card">
        <div className="option-description">
          <div style={{fontSize: '1.2em'}}>{place.name}</div>
          <div>{place.rating} <Rating disabled maxRating={5} rating={Math.round(place.rating)} /> </div>
          <div>{place.vicinity || place.formatted_address}</div>
          <div>{place.formatted_phone_number}</div>
          {
            saved ?
            <div>
              <a onClick={() => this.props.updateActiveMarker(saved)}>View</a>
            </div> :
            <Button.Group fluid>
              <Button onClick={() => this.props.saveSpot(this.props.place, "save")}>Save</Button>
              <Button onClick={() => this.props.saveSpot(this.props.place, "favorite")}>Favorite</Button>
            </Button.Group>
          }
        </div>
        <img alt="google" src={place.photos[0].getUrl({maxWidth: 100, maxHeight: 100})} className="option-image" />

      </div>
    )
  }
};

const mapStateToProps = state => ({
  savedSpots: state.places.spots
})

export default connect(mapStateToProps, { saveSpot, updateActiveMarker })(OptionCard);
