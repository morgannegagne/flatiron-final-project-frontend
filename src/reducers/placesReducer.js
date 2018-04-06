export default function placesReducer(
  state = {
    googlePlaces: [],
  },
  action
){
  switch (action.type) {
    case 'UPDATE_GOOGLE_PLACES':
      return {...state, googlePlaces: action.payload}
    default:
      return state
  }
}
