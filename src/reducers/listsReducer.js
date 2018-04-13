export default function listsReducer(
  state = {
    lists: [],
    activeList: null,
    activeListSpots: []
  },
  action
){
  switch (action.type) {
    case 'LOAD_LISTS':
      return {...state, lists: action.payload}
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, action.payload]}
    case 'TOGGLE_ACTIVE_LIST':
      return {...state, activeList: action.payload}
    case 'SHOW_ALL_LISTS':
      return {...state, activeList: null }
    case 'UPDATE_LIST':
      return {
        ...state,
        activeList: action.payload,
        lists: [...state.lists].map(list => {
          return list.id === action.payload.id ? action.payload : list
        })
      }
    default:
      return state
  }
}
