export const updateActiveMarker = (spot) => {
  return {
    type: 'CHANGE_ACTIVE_MARKER',
    payload: spot
  }
}

export const changeActiveMenu = (menu) => {
  return {
    type: 'CHANGE_ACTIVE_MENU',
    payload: menu
  }
}

export const toggleSidePanel = () => {
  return {
    type: 'TOGGLE_SIDE_PANEL'
  }
}
