import React from 'react';
import './searchResults.css';

export default function Films(props) {
  return props.data.map(film => {
    return (
      <li className="outerLi">
        <ul className="innerList">
          <li>
            <span className="property">Title:</span>
            {film.title}
          </li>
          <li>
            <span className="property">Director:</span>
            {film.director}
          </li>
        </ul>
      </li>
    );
  });
}
