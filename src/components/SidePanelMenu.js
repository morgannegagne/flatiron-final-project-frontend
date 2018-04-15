import React from 'react';
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'
import { changeActiveMenu } from '../actions/map'

class SidePanelMenu extends React.Component {

  handleClick = (e, {name}) => {
    this.props.changeActiveMenu(name)
  }

  render(){
    const { activeItem } = this.props
    return(
      <div>
        <Menu pointing secondary>
          <Menu.Item active={activeItem === 'add'} name="add" onClick={this.handleClick}>
            Save
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
      </div>

    )
  }
};

const mapStateToProps = state => ({
  activeItem: state.places.activeMenu
})

export default connect(mapStateToProps, { changeActiveMenu })(SidePanelMenu);
