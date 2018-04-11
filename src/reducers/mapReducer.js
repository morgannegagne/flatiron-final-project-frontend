export default function mapReducer(
  state = {
    activeSpot: null,
    activeMenu: null,
    sidePanelActive: false
  },
  action
){
  switch (action.type) {
    case 'CHANGE_ACTIVE_MARKER':
      return {...state, activeSpot: action.payload, activeMenu: 'spots', sidePanelActive: true}
    case 'CHANGE_ACTIVE_MENU':
      return {...state, activeMenu: action.payload }
    case 'TOGGLE_SIDE_PANEL':
      return {...state, sidePanelActive: !state.sidePanelActive}
    default:
      return state
  }
}
