import React from 'react'
import { connect } from 'react-redux'
import { logIn } from './actions/auth'

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  componentDidMount(){
    if (this.props.currentUser){
      this.props.history.push('/');
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username && this.state.password){
      this.props.logIn(this.state.username, this.state.password, this.props.history)
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.username} placeholder="username" name="username"/>
        <input type="password" onChange={this.handleChange} value={this.state.password} placeholder="password" name="password"/>
        <input type="submit"/>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { logIn })(Login)
