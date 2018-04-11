import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import { logout } from '../actions/auth'

class NavBar extends React.Component {

  handleClick = () => {
    this.props.logout(this.props.history);
  }

  render(){
    return(
      <div>
        <Menu>
          <Menu.Item link onClick={this.handleClick}>
            Logout
          </Menu.Item>
          <Menu.Item>
            <NavLink to='/'>Home</NavLink> <br></br>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/friends">Friends</NavLink>
          </Menu.Item>
        </Menu>

      </div>
    )
  }
}


export default withRouter(connect(null, { logout })(NavBar));
