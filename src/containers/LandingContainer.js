import React from 'react'
import { connect } from 'react-redux'
import { fetchSpots } from '../actions/places'
import MapContainer from './MapContainer'
import SidePanelContainer from './SidePanelContainer'
import NavBar from '../components/NavBar'
import withAuth from '../components/withAuth'
import '../App.css'

class LandingContainer extends React.Component{

  componentDidMount(){
    this.props.fetchSpots(this.props.currentUser.id);
  }

  render(){
    return(
      <div>
        < NavBar />
        <div className="grid-container">
          < SidePanelContainer />
          < MapContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spots: state.places.spots,
  }
}

export default connect(mapStateToProps, { fetchSpots })(withAuth(LandingContainer));
