export default function authReducer(
  state = {
    currentUser: null,
    allUsers: []
  },
  action
){
  switch (action.type) {
    case 'GET_USER':
      return {...state, currentUser: action.payload}
    case 'LOGOUT':
      return {...state, currentUser: null}
    default:
      return state
  }
}
