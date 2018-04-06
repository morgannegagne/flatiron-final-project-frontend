import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/auth'
import withAuth from '../components/withAuth'

class LandingContainer extends React.Component{

  componentDidMount(){
    if (!localStorage.getItem('token')){
      this.props.history.push('/login')
    }
  }

  handleClick = () => {
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

export default connect(null, { logout })(withAuth(LandingContainer))
