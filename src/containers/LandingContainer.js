import React from 'react'
import { connect } from 'react-redux'
import { fetchSpots, voidActiveMenu } from '../actions/places'
import { fetchLists } from '../actions/lists'
import MapContainer from './MapContainer'
import FriendsMapContainer from './FriendsMapContainer'
import SidePanelContainer from './SidePanelContainer'
import SidePanelItem from '../components/SidePanelItem'
import NavBar from '../components/NavBar'
import UserDiv from '../components/UserDiv'
import withAuth from '../components/withAuth'
import '../App.css'

class LandingContainer extends React.Component{

  componentDidMount(){
    this.props.fetchSpots(this.props.currentUser.id);
    this.props.fetchLists()
    this.props.voidActiveMenu()
  }

  render(){
    return(
      <div>
        < NavBar />
        < UserDiv user={this.props.currentUser}/>
        < SidePanelContainer />
        <div className="grid-container">
          < SidePanelItem />
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

export default connect(mapStateToProps, { fetchSpots, voidActiveMenu, fetchLists })(withAuth(LandingContainer));
