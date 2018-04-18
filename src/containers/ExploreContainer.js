import React from 'react'
import { connect } from 'react-redux'
import { voidActiveSpot, voidActiveFriendSpot } from '../actions/places'
import FriendSearchBar from '../components/FriendSearchBar'
import FriendSpotPage from '../components/FriendSpotPage'

class ExploreContainer extends React.Component{

  componentDidMount(){
    this.props.voidActiveSpot()
    this.props.voidActiveFriendSpot()
  }

  render(){
    const { activeSpot } = this.props

    return(
      <div className="side-panel-item">
        <div className="side-panel-subheader">
          <h3>Explore</h3>
        </div>
        < FriendSearchBar style={{paddingTop: 10}}/>
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

export default connect(mapStateToProps, { voidActiveSpot, voidActiveFriendSpot })(ExploreContainer);
