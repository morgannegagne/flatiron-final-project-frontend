export const updateActiveMarker = (spot) => {
  return {
    type: 'CHANGE_ACTIVE_MARKER',
    payload: spot
  }
}
