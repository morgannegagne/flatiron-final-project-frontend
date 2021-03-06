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

export const fetchAPIkey = () => {
  return (dispatch) => {
    adapter.auth.fetchAPIkey()
    .then(res => {
      dispatch({type: 'SET_API_KEY', payload: res.key})
    })
  }
}

export function getUser(jwt, history){
  return function(dispatch){
    adapter.auth.getCurrentUser()
    .then(res => {
      dispatch({type: 'GET_USER', payload: res})
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
        history.push('/')
        dispatch({ type: "GET_USER", payload: res.user})
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
