export default function authReducer(
  state = {
    currentUser: null,
    allUsers: [],
    apiKey: null
  },
  action
){
  switch (action.type) {
    case 'GET_USER':
      return {...state, currentUser: action.payload}
    case 'LOGOUT':
      return {...state, currentUser: null}
    case 'SET_API_KEY':
      return {...state, apiKey: action.payload}
    default:
      return state
  }
}
