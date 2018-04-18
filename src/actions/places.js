import { adapter } from '../services/index'

export function updatePlaces(places){
  return {
    type: 'UPDATE_GOOGLE_PLACES',
    payload: places
  }
}

export const saveFriendSpot = (place, spot_type, source) => {
  return (dispatch) => {
    const data = {
      place: {
        google_uid: place.google_uid,
        address: place.address,
        phone_number: place.phone_number,
        website: place.website,
        name: place.name,
        lat: place.lat,
        lng: place.lng
      },
      spot_type,
      source
    }
    adapter.places.saveSpot(data)
    .then(res => {
      dispatch({
        type: 'UPDATE_CURRENT_USER_SPOTS',
        payload: res
      })
    })
  }
}

export const saveSpot = (place, spot_type) => {
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
      spot_type,
      photo: place.photos[0].getUrl({maxWidth: 300, maxHeight: 300})
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

export const addImage = (spotId, images) => {
  return(dispatch) => {
    adapter.places.addImage(spotId, images)
    .then(res => {
      dispatch({
        type: 'ADD_PHOTO',
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

export const addCommentToFriendSpot = (spotId, text) => {
  return (dispatch) => {
    adapter.places.addComment(spotId, text)
    .then(res => {
      dispatch({
        type: 'ADD_COMMENT_TO_FRIEND_SPOT',
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

export const showFriendSpot = (spot) => {
  return {
    type: 'UPDATE_ACTIVE_FRIEND_SPOT',
    payload: spot
  }
}

export const showExploreSpot = (spot) => {
  return {
    type: 'UPDATE_ACTIVE_EXPLORE_SPOT',
    payload: spot
  }
}

export const voidActiveMenu = () => {
  return {
    type: 'VOID_ACTIVE_MENU'
  }
}

export const voidActiveSpot = () => {
  return {
    type: 'VOID_ACTIVE_SPOT'
  }
}

export const voidActiveFriendSpot = () => {
  return {
    type: 'VOID_ACTIVE_FRIEND_SPOT'
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
