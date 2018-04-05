import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom'
import { connect } from "react-redux"
import Signup from './Signup'
import Login from './Login'
import { getUser } from './actions/auth'
import LandingContainer from './containers/LandingContainer'
import AuthContainer from './containers/AuthContainer'
import withAuth from './components/withAuth'

class App extends Component {

  componentDidMount(){
    const token = localStorage.getItem('token')
    if (token && !this.props.currentUser){
      this.props.getUser(token, this.props.history)
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(routerProps) =>  < LandingContainer history={routerProps.history} />} />
          <Route path="/signup" render={(routerProps) => < Signup history={routerProps.history}/>} />
          <Route path="/login" render={(routerProps) => < Login history={routerProps.history}/> } />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    currentUser: state.auth.currentUser
  }
}

export default withRouter(connect(mapStateToProps, {getUser})(App));
