import React from 'react'
import { connect } from 'react-redux'
import MapContainer from './MapContainer'
import withAuth from '../components/withAuth'
import NavBar from '../components/NavBar'
import { fetchSpots } from '../actions/places'

class ProfilePageContainer extends React.Component {

  state = {
    loaded: false
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
            <h1> {this.props.user.username} PROFILE PAGE!</h1>
            <MapContainer />
          </div> :
          'loading...'
        }
      </div>
    )
  }
}

export default connect(null, { fetchSpots })(withAuth(ProfilePageContainer))
