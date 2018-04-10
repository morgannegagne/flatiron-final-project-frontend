import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from "react-redux"
import Signup from './Signup'
import Login from './Login'
import { getUser } from './actions/auth'
import { fetchSpots } from './actions/places'
import { fetchUsers } from './actions/friends'
import LandingContainer from './containers/LandingContainer'
import FriendsContainer from './containers/FriendsContainer'
import ProfilePageContainer from './containers/ProfilePageContainer'

class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token && !this.props.currentUser){
      this.props.getUser(token, this.props.history)
    }
    this.props.fetchUsers()
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(routerProps) =>  < LandingContainer history={routerProps.history} />} />
          <Route path="/signup" render={(routerProps) => < Signup history={routerProps.history}/>} />
          <Route path="/login" render={(routerProps) => < Login history={routerProps.history}/> } />
          <Route path="/friends" render={(routerProps) => < FriendsContainer history={routerProps.history}/> } />
          <Route path="/profiles/:username" render={(routerProps) => {
              const user = this.props.allUsers.find(u => u.username === routerProps.match.params.username)
              return < ProfilePageContainer user={user} />
            }} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.auth.currentUser,
    allUsers: state.friends.allUsers
  }
}

export default withRouter(connect(mapStateToProps, {getUser, fetchSpots, fetchUsers })(App));
