import React from 'react';

import seacrh from '../../assets/img/search.svg';
import closeSearch from '../../assets/img/closeSearch.svg';

import styles from './Search.module.scss';

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <div className={styles.root}>
      <input
        placeholder="Search for pizza"
        type="text"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <img src={seacrh} alt="search" className={styles.searchIcon} />
      {searchInput && (
        <img
          src={closeSearch}
          alt="close"
          onClick={() => setSearchInput('')}
          className={styles.closeIcon}
        />
      )}
    </div>
  );
};

export default Search;
