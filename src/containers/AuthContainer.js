import React from 'react'
import { connect } from 'react-redux'
import { signUp, logIn } from '../actions/auth'

class AuthContainer extends React.Component{

  handleClick = () => {
    localStorage.removeItem('token')
    this.props.logout(this.props.history)
  }

  render(){
    return(
      <div>
      auth container here
      </div>
    )
  }
}

export default connect(null, { signUp, logIn })(AuthContainer)
