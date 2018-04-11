import React from 'react';
import { connect } from 'react-redux'
import PlacesContainer from '../containers/PlacesContainer'
import SearchContainer from '../containers/SearchContainer'
import FriendSearchBar from '../components/FriendSearchBar'


class SidePanelItem extends React.Component {

  findMenuItem = () =>{
    switch (this.props.activeItem) {
      case 'spots':
        return < PlacesContainer />
      case 'add':
        return < SearchContainer />
      case 'explore':
        return < FriendSearchBar />
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
  activeItem: state.places.activeMenu
})

export default connect(mapStateToProps)(SidePanelItem);
