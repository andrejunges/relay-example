import React from 'react';

export default (props) => {
  const rootStyle = {
    position: 'absolute',
    top: '5px',
    right: '10px',
    color: props.color || '#000',
    fontSize: '18px'
  }

  return (
    <div style={rootStyle}>{props.text}</div>
  )
}