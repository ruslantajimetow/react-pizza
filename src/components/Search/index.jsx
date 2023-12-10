import React from 'react';
import { useContext } from 'react';

import { SearchContext } from '../../App';

import seacrh from '../../assets/img/search.svg';
import closeSearch from '../../assets/img/closeSearch.svg';

import styles from './Search.module.scss';

const Search = () => {
  const context = useContext(SearchContext);
  return (
    <div className={styles.root}>
      <input
        placeholder="Search for pizza"
        type="text"
        value={context.searchInput}
        onChange={(event) => context.setSearchInput(event.target.value)}
      />
      <img src={seacrh} alt="search" className={styles.searchIcon} />
      {context.searchInput && (
        <img
          src={closeSearch}
          alt="close"
          onClick={() => context.setSearchInput('')}
          className={styles.closeIcon}
        />
      )}
    </div>
  );
};

export default Search;
