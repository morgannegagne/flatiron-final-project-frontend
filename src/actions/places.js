import { adapter } from '../services/index'

export function updatePlaces(places){
  return {
    type: 'UPDATE_GOOGLE_PLACES',
    payload: places
  }
}

export const savePlace = (place) => {
  return (dispatch) => {
    const data = { place: {
      google_uid: place.place_id,
      address: place.formatted_address,
      phone_number: place.formatted_phone_number,
      name: place.name,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    }}
    adapter.places.savePlace(data)
    .then(res => {
      dispatch({
        type: 'ADD_SPOT',
        payload: res
      })
    })
  }
}
