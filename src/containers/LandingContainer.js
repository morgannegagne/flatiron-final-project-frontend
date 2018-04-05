import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'

class LandingContainer extends React.Component{

  componentDidMount(){
    if (!localStorage.getItem('token')){
      this.props.history.push('/login')
    }
  }

  handleClick = () => {
    localStorage.removeItem('token')
    this.props.logout(this.props.history)
  }

  render(){
    return(
      <div>
        <h1>HOME PAGE</h1>
        <button onClick={this.handleClick}>Logout</button>
      </div>
    )
  }
}

export default connect(null, { logout })(LandingContainer)
