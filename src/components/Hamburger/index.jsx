import React from 'react';

import styles from './Hamburger.module.scss';

const Hamburger = ({ onOpen }) => {
  return (
    <div onClick={onOpen} className={styles.hamburger}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
