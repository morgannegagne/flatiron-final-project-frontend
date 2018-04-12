const BASE_URL = `http://localhost:3000`;
const API_ROOT = `${BASE_URL}/api/v1`

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const fetchAPIkey = () => {
  return fetch(`${BASE_URL}/api_keys`).then(res => res.json())
}

const getWithToken = url => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json())
};

const getCurrentUser = () => {
  return getWithToken(`${BASE_URL}/current_user`)
};

const login = data => {
  return fetch(`${BASE_URL}/login/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const signup = data => {
  return fetch(`${API_ROOT}/users`,{
    headers,
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

const saveSpot = data => {
  return fetch(`${API_ROOT}/spots`, {
    headers: {
      ...headers,
      Authorization: localStorage.getItem('token')
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

const updateSpotType = (spotId, type) => {
  return fetch(`${API_ROOT}/spots/${spotId}`, {
    headers: headers,
    method: 'PATCH',
    body: JSON.stringify({spot_type: type})
  })
  .then(res => res.json())
}

const removeSpot = id => {
  return fetch(`${API_ROOT}/spots/${id}`, {
    headers: headers,
    method: 'DELETE'
  })
  .then(res => res.json())
}

const fetchSpots = (id) => {
  return fetch(`${API_ROOT}/spots`, {
    headers: {Authorization: id},
  })
  .then(res => res.json())
}

const fetchUsers = () => {
  return fetch(`${API_ROOT}/users`, {
    headers: {...headers,
      Authorization: localStorage.getItem('token')
    }
  }).then(res => res.json())
}

const createFriendRequest = (friend) => {
  return fetch(`${API_ROOT}/friendships`, {
    method: 'POST',
    headers: {...headers,
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify({friend_id: friend})
  }).then(res => res.json())
}

const cancelFriendRequest = (friend) => {
  return fetch(`${API_ROOT}/friendships/delete`, {
    method: 'POST',
    headers: {...headers,
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify({friend_id: friend})
  }).then(res => res.json())
}

const acceptFriendRequest = (friend) => {
  return fetch(`${API_ROOT}/friendships/update`, {
    method: 'POST',
    headers: {...headers,
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify({friend_id: friend.id, accepted: true})
  }).then(res => res.json())
}

const declineFriendRequest = (friend) => {
  return fetch(`${API_ROOT}/friendships/update`, {
    method: 'POST',
    headers: {...headers,
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify({friend_id: friend.id, accepted: false})
  }).then(res => res.json())
}

const addComment = (spot_id, text) => {
  return fetch(`${API_ROOT}/comments`, {
    method:'POST',
    headers: {...headers,
      Authorization: localStorage.getItem('token')
    },
    body: JSON.stringify({comment: {spot_id, text}})
  })
  .then(res => res.json())
}

const fetchMapSpots = (userId) => {
  return fetch(`${API_ROOT}/spots`, {
    headers: {
      Authorization: userId
    }
  })
  .then(res => res.json())
}

const addImage = (id, image)=> {
  return fetch(`${API_ROOT}/images`,{
    headers: headers,
    method: 'POST',
    body: JSON.stringify({ image, id })
  })
  .then(res => res.json()).then(console.log)
}

export const adapter = {
  auth: {
    login,
    getCurrentUser,
    signup,
    fetchAPIkey
  },
  places: {
    saveSpot,
    removeSpot,
    fetchSpots,
    addComment,
    updateSpotType,
    addImage
  },
  friends: {
    fetchUsers,
    createFriendRequest,
    cancelFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
    fetchMapSpots
  }
};
