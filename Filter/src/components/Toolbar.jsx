import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  const listItems = filters.map(filter =>
    <button
      key={uuidv4()}
      autoFocus={filter === selected}
      className={filter}
      onClick={() => onSelectFilter(filter)}
    >
      {filter}
    </button>
  );
  return (
    <div
      className={"toolbar"}>
      {listItems}
    </div>
  )
}