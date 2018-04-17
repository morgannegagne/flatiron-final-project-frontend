import { adapter } from '../services/index'

export const signUp = (username, password, history) => {
  return (dispatch) => {
    const data = { user: {username, password} }
    adapter.auth.signup(data)
    .then(res => {
      if (res.error){
        dispatch({type: 'UPDATE_SIGNUP_ERRORS', payload: res.error})
      } else {
        localStorage.setItem('token', res.token)
        dispatch({ type: 'GET_USER', payload: res.user})
        history.push('/')
      }
    })
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

export function uploadProfilePhoto(image, userId){
  return function(dispatch){
    adapter.user.addProfilePhoto(image, userId)
    .then(res => {
      dispatch({
        type: 'UPDATE_CURRENT_USER_PHOTO',
        payload: res
      })
    })
  }
}
