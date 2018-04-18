import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { Menu, Dropdown, Popup, Icon } from 'semantic-ui-react'
import { logout } from '../actions/auth'
import NotificationCard from './NotificationCard'
import Sheep from '../images/sheep-logo.png'

class NavBar extends React.Component {

  handleClick = () => {
    this.props.logout(this.props.history);
  }

  showFriendsMenu = () => {
    this.props.history.push('/friends');
  }

  showMap = () => {
    this.props.history.push('/');
  }

  render(){
    const notifications = this.props.notifications.map(n => <NotificationCard key={`notification-${n.id}`} notification={n} />)
    return(
      <Menu attached="top" borderless>
        <Menu.Item>
          <img src={Sheep} width={30} style={{marginRight: 10}} />
          <div style={{fontSize: "1.5em"}}>herd.</div>
        </Menu.Item>
        {
          this.props.currentUser ?
          <Menu.Menu position="right">
            <Menu.Item>
              <Icon link name="globe" size="large" onClick={this.showMap}/>
            </Menu.Item>
            <Menu.Item>
              <Icon link onClick={this.showFriendsMenu} size="large" name="users"></Icon>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="#" onClick={this.handleClick}>Logout</NavLink>
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
