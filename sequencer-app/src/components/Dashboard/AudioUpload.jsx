import React, { useState } from 'react';
import { uploadAudio } from '../api/audio';

function AudioUpload({ token, projectId }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await uploadAudio(token, file, projectId);
      alert('File uploaded successfully');
    } catch (error) {
      alert('File upload failed');
    }
  };

  return (
    <div>
      <h2>Upload Audio</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default AudioUpload;
