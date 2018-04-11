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

  render(){
    let spots = []
    this.props.spots.forEach(collection => {
      collection.forEach(spot => spots.push(spot))
    })
    return(
      <div className="mapItem">

          <Map
            className="mapItem"
            googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyAJ33Uqce6yl_qY19v4fzrj4G4cmQHFkFs&v=3.exp&libraries=geometry,drawing,places'}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: 600 }} />}
            mapElement={<div style={{ height: `100%` }} />}
            spots={spots}
            />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  spots: state.friends.selectedFriends.map(friend => friend.spots),
  currentUser: state.auth.currentUser,
})


export default connect(mapStateToProps, { fetchMapSpots } )(FriendsMapContainer)
