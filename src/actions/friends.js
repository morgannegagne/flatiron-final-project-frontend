import { adapter } from '../services/index'

export const fetchUsers = () => {
  return (dispatch) => {
    adapter.friends.fetchUsers()
    .then(res => {
      dispatch({
        type: 'GET_USERS',
        payload: {
          unfriended: res.unfriended,
          pendingFriends: res.pending_friends,
          requestedFriends: res.requested_friends,
          acceptedFriends: res.accepted_friends
        }
      })
    })
  }
}

export const sendFriendRequest = (friend) => {
  return (dispatch) => {
    adapter.friends.createFriendRequest(friend)
    .then(res => {
      dispatch({
        type: 'ADD_FRIEND_REQUEST',
        payload: res
      })
    })
  }
}

export const cancelFriendRequest = (friend) => {
  return (dispatch) => {
    adapter.friends.cancelFriendRequest(friend)
    .then(res => {
      dispatch({
        type: 'CANCEL_FRIEND_REQUEST',
        payload: res
      })
    })
  }
}
export const acceptFriendRequest = (friend) => {
  return (dispatch) => {
    adapter.friends.acceptFriendRequest(friend)
    .then(res => {
      console.log(res)
      dispatch({
        type: 'ACCEPT_FRIEND_REQUEST',
        payload: res
      })
    })
  }
}
export const declineFriendRequest = (friend) => {
  return (dispatch) => {
    adapter.friends.declineFriendRequest(friend)
    .then(res => {
      dispatch({
        type: 'DECLINE_FRIEND_REQUEST',
        payload: res
      })
    })
  }
}
