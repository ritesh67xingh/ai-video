import React from 'react';

const InputText = ({ text, handleTextChange }) => {
  return (
    <>
      <label htmlFor="text-input">Enter text:</label>
      <br />
      <textarea
        id="text-input"
        rows="4"
        cols="50"
        value={text}
        onChange={handleTextChange}
      ></textarea>
      <br />
    </>
  );
};

export default InputText;
