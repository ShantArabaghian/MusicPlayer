import React, { useState } from 'react';

const PlayAllButton = ({ songs }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [audio, setAudio] = useState(null);

  const playSong = (index) => {
    if (index < songs.length) {
      const song = songs[index];
      const newAudio = new Audio(song.file);
      setAudio(newAudio);
      setCurrentSongIndex(index);
      newAudio.play();

      newAudio.onended = () => {
        playSong(index + 1);
      };
    } else {
      if (audio) {
        audio.pause();
      }
      setCurrentSongIndex(null);
      setAudio(null);
    }
  };

  const playAllSongs = () => {
    window.dispatchEvent(new CustomEvent('playAllActivated'));

    if (currentSongIndex === null) {
      playSong(0);
    } else {
      if (audio) {
        audio.pause();
      }
      setCurrentSongIndex(null);
      setAudio(null);
    }
  };

  return (
    <button onClick={playAllSongs}>
      {currentSongIndex === null ? '▶ Play All' : '◼ Stop'}
    </button>
  );
};

export default PlayAllButton;
