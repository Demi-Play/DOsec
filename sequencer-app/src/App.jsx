import React, { useState } from 'react';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Sequencer from './components/Sequencer/Sequencer';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div>
      {token ? (
        <div>
          <Sequencer />
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
