import React from 'react';
import css from './SearchBar.module.css'

const SearchBar = (videos) => {

  function handleChange(videos){

  }

  function handleSubmit(e){
    e.preventDefault();
  }

    return (
      <div className={css.search_item}>
        <form onSubmit={handleSubmit}>
          <input
            placeholder='Search video'
            type='text'
            name='search'
            onChange={handleChange}
          />
        </form>
      </div>
    )
}

export default SearchBar;
