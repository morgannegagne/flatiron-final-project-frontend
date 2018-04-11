import React from 'react';
import { connect } from 'react-redux'
import PlacesContainer from '../containers/PlacesContainer'
import SearchContainer from '../containers/SearchContainer'

class SidePanelItem extends React.Component {

  findMenuItem = () =>{
    switch (this.props.activeItem) {
      case 'spots':
        return < PlacesContainer />
      case 'add':
        return < SearchContainer />
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
  activeItem: state.map.activeMenu
})

export default connect(mapStateToProps)(SidePanelItem);
