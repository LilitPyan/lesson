import React from 'react';
import css from './SearchBar.module.css'

const SearchBar = ({videos}) => {
  const {videos}=this.props;
  videos = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});

    for(let i in videos.items) {
      let item = videos.items[i];
      Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    }


  return (
      <div className={css.search_item}>
        <form >
          <input placeholder='Search video' type='text'/>
        </form>
      </div>
    )
};

export default SearchBar;
