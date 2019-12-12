import React from 'react';

export default function Buttons({ handleDelete }) {
  const buttonStyle = {
    background: 'red',
    color: 'white',
    fontSize: '2rem'
  };

  return (
    <button type="button" style={buttonStyle} onClick={handleDelete}>
      Delete Me
    </button>
  );
}
