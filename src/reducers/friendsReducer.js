export default function friendsReducer(
  state = {
    unfriended: [],
    pendingFriends: [],
    requestedFriends: [],
    acceptedFriends: []
  },
  action
){
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        unfriended: action.payload.unfriended,
        pendingFriends: action.payload.pendingFriends,
        requestedFriends: action.payload.requestedFriends,
        acceptedFriends: action.payload.acceptedFriends
      }
    case 'ADD_FRIEND_REQUEST':
      return {
        ...state,
        requestedFriends: [...state.requestedFriends, action.payload],
        unfriended: [...state.unfriended].filter(friend => friend.id !== action.payload.id)
      }
    case 'CANCEL_FRIEND_REQUEST':
      return {
        ...state,
        requestedFriends: [...state.requestedFriends].filter(friend => friend.id !== action.payload.id),
        unfriended: [...state.unfriended, action.payload ]
      }
    case 'ACCEPT_FRIEND_REQUEST':
      return {
        ...state,
        acceptedFriends: [...state.acceptedFriends, action.payload],
        pendingFriends: [...state.pendingFriends].filter(friend => friend.id !== action.payload.id)
      }
    case 'DECLINE_FRIEND_REQUEST':
      return {
        ...state,
        pendingFriends: [...state.pendingFriends].filter(friend => friend.id !== action.payload.id),
        unfriended: [...state.unfriended, action.payload ]
      }
    default:
      return state
  }
}
