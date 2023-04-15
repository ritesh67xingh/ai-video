import React from 'react';

const Video = ({ url }) => {
  return (
    <>
      {url ? (
        <video src={url} width="640" height="360" controls></video>
      ) : (
        <p>No video generated yet</p>
      )}
    </>
  );
};

export default Video;
