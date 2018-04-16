import React from 'react';
import { connect } from 'react-redux'
import defaultUserImage from '../images/default-user-image.png'

class UserDiv extends React.Component {

  render(){
    const { user } = this.props
    const favorites = this.props.user.spots.filter(spot => spot.spot_type === 'favorite')
    const saves = this.props.user.spots.filter(spot => spot.spot_type === 'save')
    return(
      <div className="user-div">
        <div className="user-item">
          <h2>{user.username}</h2>
          <img src={defaultUserImage} className="user-image" alt="default-user-image"/>
        </div>
        <div className="user-saves">
          <h3>{saves.length}</h3>
          <p>Saves</p>
        </div>
        <div className="user-favorites">
          <h3>{favorites.length}</h3>
          <p>Favorites</p>
        </div>
        <div className="user-friends">
          <h3>{this.props.friends.length}</h3>
          <p>Friends</p>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  friends: state.friends.acceptedFriends
})

export default connect(mapStateToProps)(UserDiv);
