import React from 'react'
import { signUp } from './actions/auth'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Form, Button, Grid } from 'semantic-ui-react'
import NavBar from './components/NavBar'
import Sheep from './images/sheep-logo.png'

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
      this.props.signUp(this.state.name, this.state.username, this.state.email, this.state.password, this.props.history)
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.errors){
      let message = ''
      for (let key in nextProps.errors){
        message = message + `${key[0].toUpperCase() + key.slice(1)} ${nextProps.errors[key]} \n`
      }
      alert(message)
    }
  }

  render(){
    return(
      <div>
        <NavBar />
        <Grid centered>
          <Grid.Row>
            <Grid.Column width={4} textAlign="right" verticalAlign="bottom">
              <img src={Sheep} style={{paddingBottom: 25}}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="sign-up-form">
                <h1>Have you Herd? Sign up Now!</h1>
                <Form onSubmit={this.handleSubmit} style={{marginBottom: 10}}>
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
                <NavLink className="navlink" to="/login">Already have an account? Login here</NavLink>
              </div>

            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  errors: state.auth.signUpErrors
})

export default connect(mapStateToProps, { signUp })(Signup)
