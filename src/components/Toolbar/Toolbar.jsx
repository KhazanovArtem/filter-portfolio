import React from 'react'

export const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <div className='filters'>
      {filters.map(el => (
        selected === el ? (
          <button className='filter-button selected' key={el} onClick={() => onSelectFilter(el)}>{el}</button>
         ) : (
          <button className='filter-button' key={el} onClick={() => onSelectFilter(el)}>{el}</button>
      )
      ))}
    </div>
  )
}
