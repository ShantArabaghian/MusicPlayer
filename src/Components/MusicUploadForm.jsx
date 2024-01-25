 import React, { useState } from 'react';

const MusicUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress === 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 10;
        });
      }, 500); 
    }
  };

  return (
    <div>
      <label htmlFor=""></label>
      <input type="file" accept=".mp3, .wav" onChange={handleFileChange} />
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
      {uploadProgress > 0 && (
        <div>
          <p>Uploading: {uploadProgress}%</p>
        </div>
      )}
    </div>
  );
};

export default MusicUploadForm;
