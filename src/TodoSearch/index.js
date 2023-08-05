import React, { useState } from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext);

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