import React from 'react';
import './searchResults.css';

export default function People(props) {
  return props.data.map(person => {
    return (
      <li className="outerLi">
        <ul className="innerList">
          <li>
            <span className="property">Name:</span>
            {person.name}
          </li>
          <li>
            <span className="property">Gender:</span>
            {person.gender}
          </li>
        </ul>
      </li>
    );
  });
}
