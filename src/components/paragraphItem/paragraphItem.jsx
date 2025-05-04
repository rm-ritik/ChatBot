import * as React from 'react';
import PropTypes from 'prop-types';
import './paragraphItem.css';

function highlightText(text, query) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: 'yellow'}}>{part}</span>
    ) : (
      part
    )
  );
}

export default function ParagraphItem(props) {
  return (
    <div className="paragraph-item-container">
      {highlightText(props.content, props.searchQuery)}
    </div>
  );
}

ParagraphItem.PropTypes = {
    content: PropTypes.string,
    searchQuery: PropTypes.string
}
