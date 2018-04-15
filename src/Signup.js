import React from 'react'
import { signUp } from './actions/auth'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import NavBar from './components/NavBar'

class Signup extends React.Component {

  state = {
    name: '',
    username: '',
    password: '',
    passwordConfirmation: '',
    email: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.password !== this.state.passwordConfirmation){
      alert(`Passwords don't match, try again`)
    } else{
      this.props.signUp(this.state.username, this.state.password, this.props.history)
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <div className="sign-up-form">
          <h1>Sign Up</h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <input type="text" onChange={this.handleChange} value={this.state.name} placeholder="Name" name="name"/>
            </Form.Field>
            <Form.Field>
              <input type="text" onChange={this.handleChange} value={this.state.username} placeholder="Username" name="username"/>
            </Form.Field>
            <Form.Field>
              <input type="text" onChange={this.handleChange} value={this.state.email} placeholder="Email" name="email"/>
            </Form.Field>
            <Form.Field>
              <input type="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" name="password"/>
            </Form.Field>
            <Form.Field>
              <input type="password" onChange={this.handleChange} value={this.state.passwordConfirmation} placeholder="Confirm password" name="passwordConfirmation"/>
            </Form.Field>
            <Button style={{width: "100%"}} type='submit'>Sign Up</Button>
          </Form>
          <NavLink to="/login">Already have an account? Login here</NavLink>
        </div>
      </div>
    )
  }
}

export default connect(null, { signUp })(Signup)
