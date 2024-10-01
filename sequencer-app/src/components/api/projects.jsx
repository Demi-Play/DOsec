import axios from 'axios';

export const getProjects = async (token) => {
  const response = await axios.get('http://localhost:5000/projects/', {
    headers: { Authorization: token }
  });
  return response.data;
};

export const createProject = async (token, projectName) => {
  const response = await axios.post('http://localhost:5000/projects/', { name: projectName }, {
    headers: { Authorization: token }
  });
  return response.data;
};
