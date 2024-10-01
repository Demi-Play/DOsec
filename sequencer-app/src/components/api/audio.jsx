import axios from 'axios';

export const uploadAudio = async (token, file, projectId) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('project_id', projectId);

  const response = await axios.post('http://localhost:5000/audio/upload', formData, {
    headers: { 
      Authorization: token,
      'Content-Type': 'multipart/form-data'
    }
  });

  return response.data;
};
