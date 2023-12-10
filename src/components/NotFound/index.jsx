import React from 'react';

import styles from './NotFoundInfo.module.scss';

const NotFoundInfo = () => {
  return (
    <div className={styles.root}>
      <span>😒</span>
      <h1>Nothing Found</h1>
      <p>This page doesn't exist in our site</p>
    </div>
  );
};

export default NotFoundInfo;
