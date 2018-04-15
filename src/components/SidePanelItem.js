import React from 'react';
import { connect } from 'react-redux'
import PlacesContainer from '../containers/PlacesContainer'
import SearchContainer from '../containers/SearchContainer'
import ExploreContainer from '../containers/ExploreContainer'
import ListsContainer from '../containers/ListsContainer'
import FriendSpotPage from './FriendSpotPage'


class SidePanelItem extends React.Component {

  findMenuItem = () =>{
    switch (this.props.activeItem) {
      case 'spots':
        return < PlacesContainer />
      case 'add':
        return < SearchContainer />
      case 'explore':
        return < ExploreContainer />
      case 'lists':
        return < ListsContainer />
      case 'friendSpot':
        return < FriendSpotPage {...this.props.activeSpot}/>
      default:
        return null
    }
  }

  render(){
    const item = this.findMenuItem()
    return (
      <div>
        {item}
      </div>
    )
  }
};

const mapStateToProps = state => ({
  activeItem: state.places.activeMenu,
  activeSpot: state.places.activeFriendSpot
})

export default connect(mapStateToProps)(SidePanelItem);
