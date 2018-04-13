import { adapter } from '../services/index'

export const createList = (name) => {
  return (dispatch) => {
    adapter.lists.createList(name)
    .then(res => {
      dispatch({
        type: 'ADD_LIST',
        payload: res
      })
    })
  }
}

export const fetchLists = () => {
  return (dispatch) => {
    adapter.lists.fetchLists()
    .then(res => {
      dispatch({
        type: 'LOAD_LISTS',
        payload: res
      })
    })
  }
}

export const toggleActiveList = (list) => {
  return {
    type: 'TOGGLE_ACTIVE_LIST',
    payload: list
  }
}

export const saveToList = (spot, list) => {
  return (dispatch) => {
    adapter.lists.updateList(spot, list)
    .then(res => {
      dispatch({
        type: 'UPDATE_LIST',
        payload: res
      })
    })
  }
}

export const removeFromList = (spot, list) => {
  return (dispatch) => {
    adapter.lists.updateList(spot, list)
    .then(res => {
      dispatch({
        type: 'UPDATE_LIST',
        payload: res
      })
    })
  }
}

export const showAllLists = () => {
  return {
    type: 'SHOW_ALL_LISTS'
  }
}
