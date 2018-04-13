import React from 'react'
import { connect } from 'react-redux'
import MapContainer from './MapContainer'
import SidePanelContainer from './SidePanelContainer'
import withAuth from '../components/withAuth'
import NavBar from '../components/NavBar'
import { fetchSpots } from '../actions/places'

class ProfilePageContainer extends React.Component {

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
            <div className="grid-container">
              < SidePanelContainer />
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

export default connect(null, { fetchSpots })(withAuth(ProfilePageContainer))
