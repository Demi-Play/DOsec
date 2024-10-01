import axios from 'axios';

export const registerUser = async (username, email, password) => {
  const response = await axios.post('http://localhost:5000/users/register', {
    username,
    email,
    password
  });
  return response.data;
};

export const loginUser = async (username, password) => {
  const response = await axios.post('http://localhost:5000/users/login', {
    username,
    password
  });
  return response.data;
};

export const getUserProfile = async (token) => {
  const response = await axios.get('http://localhost:5000/users/profile', {
    headers: { Authorization: token }
  });
  return response.data;
};
