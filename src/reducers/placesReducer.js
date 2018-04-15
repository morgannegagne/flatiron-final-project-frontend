export default function placesReducer(
  state = {
    googlePlaces: [],
    spots: [],
    activeSpot: null,
    activeMenu: null,
    sidePanelActive: false,
    activeFriendSpot: null
  },
  action
){
  switch (action.type) {
    case 'UPDATE_GOOGLE_PLACES':
      return {...state, googlePlaces: action.payload}
    case 'ADD_SPOT':
      return {
        ...state,
        spots: [...state.spots, action.payload],
        activeSpot: action.payload,
        activeMenu: 'spots',
        sidePanelActive: true,
        googlePlaces: []
      }
    case 'SAVE_SPOT':
      return {...state, googlePlaces: []}
    case 'DELETE_SPOT':
      return {...state, spots: [...state.spots].filter(spot => spot.id !== action.payload)}
    case 'LOAD_SPOTS':
      return {...state, spots: action.payload}
    case 'ADD_COMMENT':
      return {...state, spots: [...state.spots].map(spot =>{
        if (spot.id == action.payload.spot_id){
          return {...spot, comments: [...spot.comments, action.payload]}
        } else {
          return spot
        }
      }),
      activeSpot: {...state.activeSpot, comments: [...state.activeSpot.comments, action.payload]}
    }
    case 'ADD_COMMENT_TO_FRIEND_SPOT':
      return {
        ...state,
        activeFriendSpot: {...state.activeFriendSpot, comments: [...state.activeFriendSpot.comments, action.payload]}
    }
    case 'UPDATE_MAP_SPOTS':
      return {
        ...state,
        spots: action.payload
      }
    case 'UPDATE_SPOT_TYPE':
      return {
        ...state,
        activeSpot: action.payload,
        spots: [...state.spots].map(spot =>{
          if (spot.id == action.payload.id){
            return {...spot, spot_type: action.payload.spot_type}
          } else {
            return spot
          }
        })
      }

    case 'ADD_PHOTO':
      return {
        ...state,
        activeSpot: action.payload
      }
    case 'CHANGE_ACTIVE_MARKER':
      return {...state, activeSpot: action.payload, activeMenu: 'spots', sidePanelActive: true, googlePlaces: []}
    case 'CHANGE_ACTIVE_MENU':
      return {...state, activeMenu: action.payload }
    case 'TOGGLE_SIDE_PANEL':
      return {...state, sidePanelActive: !state.sidePanelActive}
    case 'UPDATE_ACTIVE_FRIEND_SPOT':
      return {...state, activeFriendSpot: action.payload}
    default:
      return state
  }
}
