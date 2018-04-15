import React from 'react'
import { connect } from 'react-redux'
import { fetchSpots } from '../actions/places'
import MapContainer from './MapContainer'
import FriendsMapContainer from './FriendsMapContainer'
import SidePanelContainer from './SidePanelContainer'
import NavBar from '../components/NavBar'
import UserDiv from '../components/UserDiv'
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
        < UserDiv user={this.props.currentUser}/>
        <div className="grid-container">
          < SidePanelContainer />
        {
          this.props.activeMenu === 'explore' ?
          < FriendsMapContainer />
        :
          < MapContainer />
        }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    spots: state.places.spots,
    activeMenu: state.places.activeMenu
  }
}

export default connect(mapStateToProps, { fetchSpots })(withAuth(LandingContainer));
