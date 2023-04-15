import React from 'react';

const VoiceSelector = ({ voice, handleVoiceChange }) => {
  return (
    <>
      <label htmlFor="voice-select">Choose a voice:</label>
      <select id="voice-select" value={voice} onChange={handleVoiceChange}>
        <option value="Matthew">Matthew</option>
        <option value="Joanna">Joanna</option>
        <option value="Brian">Brian</option>
      </select>
      <br />
    </>
  );
};

export default VoiceSelector;
