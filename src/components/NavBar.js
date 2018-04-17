import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown, Popup } from 'semantic-ui-react'
import { logout } from '../actions/auth'
import NotificationCard from './NotificationCard'

class NavBar extends React.Component {

  handleClick = () => {
    this.props.logout(this.props.history);
  }

  render(){
    const notifications = this.props.notifications.map(n => <NotificationCard key={`notification-${n.id}`} notification={n} />)
    return(
      <Menu attached="top">
        <Menu.Item>
          cool website
        </Menu.Item>
        {
          this.props.currentUser ?
          <Menu.Menu position="right">
            <Menu.Item>
              <Popup
                trigger={<div>{this.props.notifications.length}</div>}
                content={notifications}
                on="click"
                position="bottom right"
                />
            </Menu.Item>
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
  currentUser: state.auth.currentUser,
  notifications: state.notifications.notifications
})

export default withRouter(connect(mapStateToProps, { logout })(NavBar));
