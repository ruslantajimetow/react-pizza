import React from 'react';
import { useContext } from 'react';
import debounce from 'lodash.debounce';

import { SearchContext } from '../../App';

import seacrh from '../../assets/img/search.svg';
import closeSearch from '../../assets/img/closeSearch.svg';

import styles from './Search.module.scss';

const Search = () => {
  const [value, setValue] = React.useState('');
  const context = useContext(SearchContext);
  const inputRef = React.useRef();
  const searchDebounce = React.useCallback(
    debounce((value) => {
      context.setSearchInput(value);
    }, 300),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    searchDebounce(event.target.value);
  };
  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        placeholder="Search for pizza"
        type="text"
        value={value}
        onChange={onChangeInput}
      />
      <img src={seacrh} alt="search" className={styles.searchIcon} />
      {value && (
        <img
          src={closeSearch}
          alt="close"
          onClick={() => {
            context.setSearchInput('');
            setValue('');
            inputRef.current.focus();
          }}
          className={styles.closeIcon}
        />
      )}
    </div>
  );
};

export default Search;
