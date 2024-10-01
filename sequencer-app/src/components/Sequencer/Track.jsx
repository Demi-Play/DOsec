import React, { useRef, useState } from 'react';
import * as Tone from 'tone';
import './track.css';

function Track({ track, updateTrack }) {
  const audioRef = useRef();
  const [clipPosition, setClipPosition] = useState(0);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      updateTrack(track.id, { ...track, audioFile: url });
    }
  };

  const playTrack = () => {
    if (track.audioFile) {
      const player = new Tone.Player(track.audioFile).toDestination();
      player.start();
    }
  };

  const handleDrag = (e) => {
    setClipPosition(clipPosition + e.movementX);
  };

  return (
    <div className="track">
      <h3>{track.name}</h3>
      <input type="file" onChange={handleFileChange} />
      <button onClick={playTrack}>Play</button>
      <div 
        className="audio-clip" 
        draggable 
        style={{ left: `${clipPosition}px` }} 
        onDrag={handleDrag}
      >
        Audio Clip
      </div>
    </div>
  );
}

export default Track;
