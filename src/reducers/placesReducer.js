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
      for (let spot of state.userSpots){
        if (spot.place.google_uid === action.payload.place.google_uid){
          return state
        }
      }
      return {...state, userSpots: [...state.userSpots, action.payload]}
    case 'DELETE_SPOT':
      return {...state, userSpots: [...state.userSpots].filter(spot => spot.id !== action.payload)}
    case 'LOAD_SPOTS':
      return {...state, userSpots: action.payload}
    case 'ADD_COMMENT':
      return {...state, userSpots: [...state.userSpots].map(spot =>{
        if (spot.id == action.payload.spot_id){
          return {...spot, comments: [...spot.comments, action.payload]}
        } else {
          return spot
        }
      })}
    default:
      return state
  }
}
