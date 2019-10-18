import React from 'react';
import './searchResults.css';

export default function Planets(props) {
  return props.data.map(planet => {
    return (
      <li className="outerLi">
        <ul className="innerList">
          <li>
            <span className="property">Name:</span>
            {planet.name}
          </li>
          <li>
            <span className="property">Climate:</span>
            {planet.climate}
          </li>
        </ul>
      </li>
    );
  });
}
