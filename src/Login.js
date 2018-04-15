import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import { logIn } from './actions/auth'
import NavBar from './components/NavBar'

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

      <div>
        <NavBar />
        <div className="sign-up-form">
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <input type="text" onChange={this.handleChange} value={this.state.username} placeholder="username" name="username"/>
            </Form.Field>
            <Form.Field>
              <input type="password" onChange={this.handleChange} value={this.state.password} placeholder="password" name="password"/>
            </Form.Field>
            <Button style={{width: "100%"}} type='submit'>Login</Button>
          </Form>
          <NavLink to="/signup">Don't have an account? Sign up here!</NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { logIn })(Login)
