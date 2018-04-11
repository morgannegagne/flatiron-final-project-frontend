import { adapter } from '../services/index'

export function updatePlaces(places){
  return {
    type: 'UPDATE_GOOGLE_PLACES',
    payload: places
  }
}

export const saveSpot = (place, type) => {
  return (dispatch) => {
    const data = {
      place: {
        google_uid: place.place_id,
        address: place.formatted_address,
        phone_number: place.formatted_phone_number,
        website: place.website,
        name: place.name,
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      },
      type
  }
    adapter.places.saveSpot(data)
    .then(res => {
      dispatch({
        type: 'ADD_SPOT',
        payload: res
      })
    })
  }
}

export const fetchSpots = (id) => {
  return (dispatch) => {
    adapter.places.fetchSpots(id)
    .then(res => {
      dispatch({
        type: 'LOAD_SPOTS',
        payload: res
      })
    })
  }
}

export const removeSpot = (spotId) => {
  return (dispatch) => {
    adapter.places.removeSpot(spotId)
    .then(res => {
      dispatch({
        type: 'DELETE_SPOT',
        payload: spotId
      })
    })
  }
}

export const addComment = (spotId, text) => {
  return (dispatch) => {
    adapter.places.addComment(spotId, text)
    .then(res => {
      dispatch({
        type: 'ADD_COMMENT',
        payload: res
      })
    })
  }
}
export const updateSpotType = (spotId, type) => {
  return (dispatch) => {
    adapter.places.updateSpotType(spotId, type)
    .then(res => {
      dispatch({
        type: 'UPDATE_SPOT_TYPE',
        payload: res
      })
    })
  }
}

export const fetchMapSpots = (user) => {
  return (dispatch) => {
    adapter.friends.fetchMapSpots(user)
    .then( res => {
      dispatch({
        type: 'UPDATE_MAP_SPOTS',
        payload: res
      })
    })
  }
}
