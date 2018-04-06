export default function placesReducer(
  state = {
    googlePlaces: [],
    userSpots: []
  },
  action
){
  switch (action.type) {
    case 'UPDATE_GOOGLE_PLACES':
      return {...state, googlePlaces: action.payload}
    case 'ADD_SPOT':
      return {...state, userSpots: [...state.userSpots, action.payload]}
    default:
      return state
  }
}
