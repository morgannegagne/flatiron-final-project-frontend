import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown } from 'semantic-ui-react'
import { logout } from '../actions/auth'

class NavBar extends React.Component {

  handleClick = () => {
    this.props.logout(this.props.history);
  }

  render(){
    return(
      <Menu attached="top">
        <Menu.Item>
          cool website
        </Menu.Item>
        {
          this.props.currentUser ?
          <Menu.Menu position="right">
            <Menu.Item>
              <Dropdown icon='large user circle' simple>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <NavLink to='/'>Map</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="/friends">Friends</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <NavLink to="#" onClick={this.handleClick}>Logout</NavLink>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu.Menu>
          :
          null
        }
      </Menu>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
})

export default withRouter(connect(mapStateToProps, { logout })(NavBar));
