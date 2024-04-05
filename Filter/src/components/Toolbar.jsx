import React from 'react';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  const listItems = filters.map(filter =>
    <button
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