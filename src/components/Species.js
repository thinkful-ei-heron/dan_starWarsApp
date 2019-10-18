import React from 'react';
import './searchResults.css';

export default function Species(props) {
  return props.data.map(species => {
    return (
      <li className="outerLi">
        <ul className="innerList">
          <li>
            <span className="property">Name:</span>
            {species.name}
          </li>
          <li>
            <span className="property">Classification:</span>
            {species.classification}
          </li>
        </ul>
      </li>
    );
  });
}
