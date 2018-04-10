export default function mapReducer(
  state = {
    activeSpot: null
  },
  action
){
  switch (action.type) {
    case 'CHANGE_ACTIVE_MARKER':
      return {...state, activeSpot: action.payload}
    default:
      return state
  }
}
