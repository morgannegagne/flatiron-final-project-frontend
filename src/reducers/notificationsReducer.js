export default function notificationsReducer(
  state = {
    notifications: []
  },
  action
){
  switch (action.type) {
    case 'LOAD_NOTIFICATIONS':
      return {...state, notifications: action.payload}
    case 'UPDATE_NOTIFICATIONS':
      return {
        ...state,
        notifications:
          [...state.notifications].filter(n => n.id !== action.payload.id)
      }
    default:
      return state
  }
}
