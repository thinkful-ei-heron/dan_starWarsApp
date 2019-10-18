import React from 'react';
import './searchResults.css';

export default function Vehicles(props) {
  return props.data.map(vehicle => {
    return (
      <li className="outerLi">
        <ul className="innerList">
          <li>
            <span className="property">Name:</span>
            {vehicle.name}
          </li>
          <li>
            <span className="property">Model:</span>
            {vehicle.model}
          </li>
        </ul>
      </li>
    );
  });
}
