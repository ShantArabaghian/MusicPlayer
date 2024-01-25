import React, { Component } from 'react';
import Songs from '../data.js'; 
import SongRow from './SongRow.jsx';

export class SongList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentAudio: null,
      playingSong: null
        };
  }
  componentDidMount() {
    window.addEventListener('playAllActivated', this.handlePlayAll);
  }

  componentWillUnmount() {
    window.removeEventListener('playAllActivated', this.handlePlayAll);
  }

  handlePlayAll = () => {
    const { currentAudio } = this.state;
    if (currentAudio) {
      currentAudio.pause();
    }
  };
  togglePlayPause = (song) => {
    let { currentAudio, playingSong } = this.state;
  
    if (playingSong === song.songName) {
      if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        this.setState({ playingSong: null });
      } else {
        currentAudio.play();
        this.setState({ playingSong: song.songName });
      }
    } else {
      if (currentAudio) {
        currentAudio.pause();
      }
      const newAudio = new Audio(song.file);
      newAudio.play();
      this.setState({
        currentAudio: newAudio,
        playingSong: song.songName
      });
    }
  };
  

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr className='tableheader'>
              <th></th>
              <th>Song Name</th>
              <th>Artist Name</th>
              <th>Track</th>
            </tr>
          </thead>
          <tbody>
            {Songs.map(song => (
              <SongRow
                key={song.trackNumber}
                song={song}
                isPlaying={this.state.playingSong === song.songName}
                onPlayPause={this.togglePlayPause}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
}console.log(SongRow);

export default SongList;
