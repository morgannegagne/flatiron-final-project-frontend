import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import PlacesContainer from './PlacesContainer'
import MapContainer from './MapContainer'
import NavBar from '../components/NavBar'
import withAuth from '../components/withAuth'

class LandingContainer extends React.Component{

  handleClick = () => {
    this.props.logout(this.props.history)
  }

  render(){
    return(
      <div>
        < NavBar />
        <h1>HOME PAGE</h1>
        <button onClick={this.handleClick}>Logout</button>
        < MapContainer />
        < PlacesContainer />
      </div>
    )
  }
}

export default connect(null, { logout })(withAuth(LandingContainer))
