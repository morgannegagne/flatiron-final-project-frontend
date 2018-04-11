import React from 'react';
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { changeActiveMenu } from '../actions/map'
import SidePanelItem from './SidePanelItem'

class SidePanelMenu extends React.Component {

  state ={
    activeItem: null
  }

  handleClick = (e, {name}) => {
    this.props.changeActiveMenu(name)
  }

  render(){
    const { activeItem } = this.props
    return(
      <div>
        <Menu vertical>
          <Menu.Item active={activeItem === 'add'} name="add" onClick={this.handleClick}>
            Add
          </Menu.Item>
          <Menu.Item active={activeItem === 'spots'} name="spots" onClick={this.handleClick}>
            Spots
          </Menu.Item>
          <Menu.Item active={activeItem === 'lists'} name="lists" onClick={this.handleClick}>
            Lists
          </Menu.Item>
          <Menu.Item active={activeItem === 'explore'} name="explore" onClick={this.handleClick}>
            Explore
          </Menu.Item>
        </Menu>
        < SidePanelItem />
      </div>

    )
  }
};

const mapStateToProps = state => ({
  activeItem: state.places.activeMenu
})

export default connect(mapStateToProps, { changeActiveMenu })(SidePanelMenu);
