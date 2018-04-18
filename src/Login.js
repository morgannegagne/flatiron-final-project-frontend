import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Form, Button, Grid } from 'semantic-ui-react'
import { logIn } from './actions/auth'
import NavBar from './components/NavBar'
import Sheep from './images/sheep-logo.png'

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
          <Grid centered style={{marginTop: 100}}>
          <Grid.Row>
            <Grid.Column width={4} textAlign="right" verticalAlign="bottom">
              <img src={Sheep} style={{paddingBottom: 25}}/>
            </Grid.Column>
            <Grid.Column width={8}>
              <div className="sign-up-form">
                <Form onSubmit={this.handleSubmit} style={{marginBottom: 10}}>
                  <Form.Field>
                    <input type="text" onChange={this.handleChange} value={this.state.username} placeholder="username" name="username"/>
                  </Form.Field>
                  <Form.Field>
                    <input type="password" onChange={this.handleChange} value={this.state.password} placeholder="password" name="password"/>
                  </Form.Field>
                  <Button style={{width: "100%"}} type='submit'>Login</Button>
                </Form>
                <NavLink to="/signup" className="navlink">Don't have an account? Sign up here!</NavLink>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
