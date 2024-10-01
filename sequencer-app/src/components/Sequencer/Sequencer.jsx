import React, { useState } from 'react';
import * as Tone from 'tone';
import Track from './Track';
import Mixer from './Mixer';
import Timeline from './Timeline';

function Sequencer() {
  const [tracks, setTracks] = useState([]);
  const [duration, setDuration] = useState(60); // Время секвенсора в секундах

  const addTrack = () => {
    const newTrack = { id: tracks.length + 1, name: `Track ${tracks.length + 1}`, audioFile: null };
    setTracks([...tracks, newTrack]);
  };

  const updateTrack = (trackId, updatedTrack) => {
    setTracks(tracks.map(track => track.id === trackId ? updatedTrack : track));
  };

  const playAllTracks = async () => {
    await Tone.start(); // Разрешение на воспроизведение звука
    tracks.forEach(track => {
      if (track.audioFile) {
        const player = new Tone.Player(track.audioFile).toDestination();
        player.sync().start(0);
      }
    });
    Tone.getTransport().start();
  };

  return (
    <div className="sequencer">
      <h2>Sequencer</h2>
      <Timeline duration={duration} />
      <button onClick={addTrack}>Add Track</button>
      <button onClick={playAllTracks}>Play All Tracks</button>
      <div className="tracks">
        {tracks.map(track => (
          <Track key={track.id} track={track} updateTrack={updateTrack} />
        ))}
      </div>
      <Mixer tracks={tracks} />
    </div>
  );
}

export default Sequencer;
