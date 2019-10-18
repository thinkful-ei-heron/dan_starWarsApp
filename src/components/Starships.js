import React from 'react';
import './searchResults.css';

export default function Starships(props) {
  return props.data.map(starship => {
    return (
      <li className="outerLi">
        <ul className="innerList">
          <li>
            <span className="property">Name:</span>
            {starship.name}
          </li>
          <li>
            <span className="property">Manufacturer:</span>
            {starship.manufacturer}
          </li>
        </ul>
      </li>
    );
  });
}
