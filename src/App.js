// App.js
import React, { useState } from 'react';
import './App.css';
import AddAllButton from './Components/AddAllButton';
import PlayAllButton from './Components/PlayAllButton';
import Songs from './data.js';
import SongList from './Components/SongList.jsx';
import MusicUploadForm from './Components/MusicUploadForm.jsx';

function App() {
  const [queue, setQueue] = useState([]);

  const addAllToQueue = () => {
    setQueue([...Songs]);
  };

  return (
    <div className="App">

      <div className="buttons-play">
        <PlayAllButton songs={Songs} />
        <AddAllButton onAddAll={addAllToQueue} />
      </div>

      <SongList queue={queue} />
      <div>
      <div className='footer'>  
        <MusicUploadForm />
        <h3>Queue:</h3>
        {queue.map((song, index) => (
          <div key={index}>{song.songName} by {song.artistName}</div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
