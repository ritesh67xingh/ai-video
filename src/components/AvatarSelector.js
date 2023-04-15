import React from 'react';

const AvatarSelector = ({ avatar, handleAvatarChange }) => {
  return (
    <>
      <label htmlFor="avatar-select">Choose an avatar:</label>
      <select id="avatar-select" value={avatar} onChange={handleAvatarChange}>
        <option value="man">Man</option>
        <option value="woman">Woman</option>
        <option value="robot">Robot</option>
      </select>
      <br />
    </>
  );
};

export default AvatarSelector;
