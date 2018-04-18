import React from 'react'
import { connect } from 'react-redux'
import { fetchMapSpots } from '../actions/places'
import Map from '../components/Map'

class FriendsMapContainer extends React.Component{

  state = {
    loaded: false
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.spots){
      this.setState({
        loaded: true,
      })
    }
  }

  getSpots(){
    let spots = [];
    if (this.props.selectedFriends.length){
      this.props.selectedFriends.forEach(friend => {
        friend.spots.forEach(spot => spots.push({...spot, username: friend.username}))
      });
    } else {
      this.props.allFriends.forEach(friend => {
        friend.spots.forEach(spot => spots.push({...spot, username: friend.username}))
      });
    }
    return spots
  }

  render(){
    const spots = this.getSpots();
    return(
      <div className="mapItem">
          <Map
            googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyA4Cl1Qf21cnhWLGQxYb3Cx8MGBANcogWg&v=3.exp&libraries=geometry,drawing,places'}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: 800 }} />}
            mapElement={<div style={{ height: `100%` }} />}
            spots={spots}
            friendMap={true}
            />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectedFriends: state.friends.selectedFriends,
  allFriends: state.friends.acceptedFriends,
  currentUser: state.auth.currentUser,
})


export default connect(mapStateToProps, { fetchMapSpots } )(FriendsMapContainer)
