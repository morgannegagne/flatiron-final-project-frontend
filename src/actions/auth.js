export const signUp = (username, password, history) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accepts: 'application/json',
      },
      body: JSON.stringify({ user: {username, password} })
    })
    .then(res => res.json())
    .then(res => {
      localStorage.setItem('token', res.token)
      dispatch(({
        type: 'GET_USER',
        payload: res.user
      }))
    }
    )
    .then(() => {history.push('/')})
  }
}

export function getUser(jwt, history){
  return function(dispatch){
    fetch('http://localhost:3000/current_user', {
      headers: {
        'Authorization': jwt
      }
    })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: 'GET_USER',
        payload: res
      })
    })
    .then(()=> {
      history.push('/')
    })
  }
}

export function logIn(username, password, history){
  return function(dispatch){
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({username, password})
    })
    .then(res => res.json())
    .then(response => {
      if (response.error){
        console.log(response.error)
      } else {
        localStorage.setItem("token", response.token)
        dispatch({
          type: "GET_USER",
          payload: response.user
        })
      }
    })
    .then(()=> {
      history.push('/')
    })
  }
}

export function logout(history){
  history.push('/login')
  return {
    type: 'LOGOUT'
  }
}
