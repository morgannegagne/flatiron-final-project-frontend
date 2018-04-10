import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import { fetchSpots } from '../actions/places'
import PlacesContainer from './PlacesContainer'
import MapContainer from './MapContainer'
import NavBar from '../components/NavBar'
import withAuth from '../components/withAuth'

class LandingContainer extends React.Component{

  componentDidMount(){
    this.props.fetchSpots(this.props.currentUser.id);
  }

  handleClick = () => {
    this.props.logout(this.props.history);
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
    );
  }
}

const mapStateToProps = state => {
  return {
    spots: state.places.spots,
  }
}

export default connect(mapStateToProps, { fetchSpots, logout })(withAuth(LandingContainer));
