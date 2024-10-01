import React, { useState } from 'react';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import ProjectList from './components/Dashboard/ProjectList';
import AudioUpload from './components/Dashboard/AudioUpload.jsx';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      {token ? (
        <div>
          <ProjectList token={token} />
          <AudioUpload token={token} projectId={1} /> {/* Замените на ID проекта */}
        </div>
      ) : (
        <div>
          <Register />
          <Login setToken={setToken} />
        </div>
      )}
    </div>
  );
}

export default App;
