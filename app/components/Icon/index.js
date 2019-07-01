/**
*
* Icon
*
*/

import React from 'react';


import styles from './styles.css';

function Icon({ ImageUrl, children }) {
  return (
    <div className={styles.icon}>
      <img src={ImageUrl} />
      {children}
    </div>
  );
}

export default Icon;
