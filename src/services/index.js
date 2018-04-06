const BASE_URL = `http://localhost:3000`;
const API_ROOT = `${BASE_URL}/api/v1`

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const headersWithAuth = {
  ...headers,
  Authorization: localStorage.getItem('token')
}

const getWithToken = url => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return getWithToken(`${BASE_URL}/current_user`);
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
    headers: headers,
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

const savePlace = data => {
  return fetch(`${API_ROOT}/spots`, {
    headers: headersWithAuth,
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
}

export const adapter = {
  auth: {
    login,
    getCurrentUser,
    signup
  },
  places: {
    savePlace
  }
};
