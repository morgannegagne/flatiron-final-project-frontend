import React from 'react'
import { connect } from 'react-redux'
import FriendSearchBar from '../components/FriendSearchBar'
import FriendSpotPage from '../components/FriendSpotPage'

class ExploreContainer extends React.Component{

  render(){
    const { activeSpot } = this.props

    return(
      <div className="side-panel-item">
        < FriendSearchBar />
      {
        activeSpot ?
        < FriendSpotPage {...activeSpot} />
      :
        null
      }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeSpot: state.places.activeFriendSpot
})

export default connect(mapStateToProps)(ExploreContainer);
