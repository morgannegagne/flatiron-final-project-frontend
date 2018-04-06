import { adapter } from '../services/index'

export const signUp = (username, password, history) => {
  return (dispatch) => {
    const data = { user: {username, password} }
    adapter.auth.signup(data)
    .then(res => {
      localStorage.setItem('token', res.token)
      dispatch({ type: 'GET_USER', payload: res.user})
    })
    .then(() => {history.push('/')})
  }
}

export function getUser(jwt, history){
  return function(dispatch){
    adapter.auth.getCurrentUser()
    .then(res => {
      dispatch({type: 'GET_USER', payload: res})
      history.push('/')
    })
  }
}

export function logIn(username, password, history){
  return function(dispatch){
    const data = {username, password}
    adapter.auth.login(data)
    .then(res => {
      if (res.error){
        console.log(res.error)
      } else {
        localStorage.setItem("token", res.token)
        dispatch({ type: "GET_USER", payload: res.user})
        history.push('/')
      }
    })
  }
}

export function logout(history){
  localStorage.removeItem('token')
  history.push('/login')
  return {
    type: 'LOGOUT'
  }
}
