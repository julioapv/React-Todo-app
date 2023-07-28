import React, { useState } from 'react';
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {

  return (
    <input 
    className='input'
    placeholder='Learn PHP'
    value={searchValue}
    onChange={(e) => {
      setSearchValue(e.target.value);
    }}
    />
  )
}

export { TodoSearch };