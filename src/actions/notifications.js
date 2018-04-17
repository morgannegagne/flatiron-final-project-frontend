import { adapter } from '../services/index'

export const fetchNotifications = () => {
  return (dispatch) => {
    adapter.notifications.fetchNotifications()
    .then(res => {
      dispatch({
        type: 'LOAD_NOTIFICATIONS',
        payload: res
      })
    })
  }
}

export const markAsRead = (id) => {
  return (dispatch) => {
    adapter.notifications.updateNotification(id)
    .then(res => {
      dispatch({
        type: 'UPDATE_NOTIFICATIONS',
        payload: res
      })
    })
  }
}
