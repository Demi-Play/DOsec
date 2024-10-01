import React from 'react';

function Mixer({ tracks }) {
  return (
    <div className="mixer">
      <h2>Mixer</h2>
      {tracks.map((track) => (
        <div key={track.id} className="mixer-track">
          <h3>{track.name}</h3>
          <label>
            Volume:
            <input type="range" min="-60" max="0" defaultValue="0" onChange={(e) => {
              const volume = parseFloat(e.target.value);
              // Здесь можно добавить логику для изменения громкости с помощью Tone.js
            }} />
          </label>
          <label>
            Pan:
            <input type="range" min="-1" max="1" step="0.1" defaultValue="0" onChange={(e) => {
              const pan = parseFloat(e.target.value);
              // Здесь можно добавить логику для изменения панорамы с помощью Tone.js
            }} />
          </label>
        </div>
      ))}
    </div>
  );
}

export default Mixer;
