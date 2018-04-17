export default function authReducer(
  state = {
    currentUser: null,
    allUsers: [],
    apiKey: null,
    signUpErrors: null
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
    case 'UPDATE_CURRENT_USER_SPOTS':
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          spots: [...state.currentUser.spots, action.payload]
        }
      }
    case 'UPDATE_CURRENT_USER_PHOTO':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'UPDATE_SIGNUP_ERRORS':
      return {
        ...state,
        signUpErrors: action.payload
      }
    default:
      return state
  }
}
