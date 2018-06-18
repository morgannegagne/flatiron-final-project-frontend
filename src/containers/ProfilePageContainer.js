import React from 'react'
import { connect } from 'react-redux'
import MapContainer from './MapContainer'
import SidePanelItem from '../components/SidePanelItem'
import UserDiv from '../components/UserDiv'
import withAuth from '../components/withAuth'
import NavBar from '../components/NavBar'
import { fetchSpots, voidActiveMenu, voidActiveFriendSpot } from '../actions/places'

class ProfilePageContainer extends React.Component {

  componentDidMount(){
    console.log('voiding active friend spot')
    this.props.voidActiveMenu()
    this.props.voidActiveFriendSpot()
  }

  componentWillReceiveProps(next){
    if (next.user){
      this.props.fetchSpots(next.user.id)
    }
  }

  render(){
    return(
      <div>
        {
          this.props.user ?
          <div>
            < NavBar />
            < UserDiv user={this.props.user}/>
            <div className="grid-container">
              < SidePanelItem />
              < MapContainer />
            </div>
          </div>
          :
          'loading...'
        }
      </div>
    )
  }
}

export default connect(null, { fetchSpots, voidActiveMenu, voidActiveFriendSpot })(withAuth(ProfilePageContainer))
