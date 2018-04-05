import React from 'react'
import { signUp } from './actions/auth'
import { connect } from 'react-redux'

class Signup extends React.Component {

  state = {
    username: '',
    password: '',
    passwordConfirmation: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.password !== this.state.passwordConfirmation){
      alert(`password don't match, try again`)
    } else{
      this.props.signUp(this.state.username, this.state.password, this.props.history)
    }
  }

  render(){
    return(
      <div>
        <h1>SIGN UP</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.username} placeholder="username" name="username"/>
          <input type="password" onChange={this.handleChange} value={this.state.password} placeholder="password" name="password"/>
          <input type="password" onChange={this.handleChange} value={this.state.passwordConfirmation} placeholder="type password again..." name="passwordConfirmation"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { signUp })(Signup)
