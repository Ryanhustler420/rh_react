/**
*
* HandShake
*
*/

import React from 'react';


import styles from './styles.css';

function HandShake({children}) {
  return (
    <div className={styles.handShake}>
      {children}
    </div>
  );
}

export default HandShake;
