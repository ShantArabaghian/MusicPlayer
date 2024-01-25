import React from 'react';

const SongRow = ({ song, isPlaying, onPlayPause }) => {
  return (
    <tr className='songlist'>
      <td className='first'>
        <button onClick={() => onPlayPause(song)}>
          {isPlaying ? '◼' : '▶'}
        </button>
      </td>
      <td>{song.songName}</td>
      <td>{song.artistName}</td>
      <td>{song.trackNumber}</td>
    </tr>
  );
};


export default SongRow;
