export default function placesReducer(
  state = {
    googlePlaces: [],
    userSpots: [], //need to remove ultimately
    mapSpots: [], //need to remove ultimately
    spots: []
  },
  action
){
  switch (action.type) {
    case 'UPDATE_GOOGLE_PLACES':
      return {...state, googlePlaces: action.payload}
    case 'ADD_SPOT':
      for (let spot of state.spots){
        if (spot.place.google_uid === action.payload.place.google_uid){
          return state
        }
      }
      return {
        ...state,
        spots: [...state.spots, action.payload],
      }
    case 'DELETE_SPOT':
      return {...state, spots: [...state.userSpots].filter(spot => spot.id !== action.payload)}
    case 'LOAD_SPOTS':
      return {...state, spots: action.payload}
    case 'ADD_COMMENT':
      return {...state, spots: [...state.userSpots].map(spot =>{
        if (spot.id == action.payload.spot_id){
          return {...spot, comments: [...spot.comments, action.payload]}
        } else {
          return spot
        }
      })}
    case 'UPDATE_MAP_SPOTS':
      return {
        ...state,
        spots: action.payload
      }
    default:
      return state
  }
}
