export default function authReducer(
  state = {
    currentUser: null
  },
  action
){
  switch (action.type) {
    case 'GET_USER':
      return {...state, currentUser: action.payload}
    case 'LOGOUT':
      console.log('logout')
      return {...state, currentUser: null}
    default:
      return state
  }
}
