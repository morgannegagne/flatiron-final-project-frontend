import React from 'react';
import { connect } from 'react-redux'
import { saveSpot } from '../actions/places'
import { updateActiveMarker } from '../actions/map'
import defaultUserImage from '../images/default-user-image.png'

class UserDiv extends React.Component {

  render(){
    const { user } = this.props
    const favorites = this.props.user.spots.filter(spot => spot.spot_type === 'favorite')
    const saves = this.props.user.spots.filter(spot => spot.spot_type === 'save')
    return(
      <div className="flex-container">
        <img src={defaultUserImage} className="user-image" height="150" alt="default-user-image"/>
        <h2>{user.username}</h2>
        <h3>Saves: {saves.length}</h3>
        <h3>Favorites: {favorites.length}</h3>
        <h3>Friends: </h3>
      </div>
    )
  }
};

export default connect(null)(UserDiv);
