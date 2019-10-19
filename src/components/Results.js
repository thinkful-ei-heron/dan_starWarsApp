import React from 'react';
import './searchResults.css';

export default function Films(props) {
  let keys = Object.keys(props);
  console.log(props);

  return keys.map(key => {
    return (
      <li>
        <span className="property">{key}:</span>
        {props[key]}
      </li>
    );
  });
}
