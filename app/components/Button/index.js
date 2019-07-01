/**
*
* Button
*
*/

import React from 'react';


import styles from './styles.css';

function Button({children, type, clickable}) {

  let button = <button className={`${styles.Button} ${clickable ? styles.pointer : ''}`}>{children}</button>;

  if(type === 'right'){
    button = <button className={`${styles.Button} ${styles.ButtonRight} ${clickable ? styles.pointer : ''}`}>{children}</button>;
  }else if(type === 'left') {
    button = <button className={`${styles.Button} ${styles.ButtonLeft} ${clickable ? styles.pointer : ''}`}>{children}</button>;
  }
  return (
    <div>
      {button}
    </div>
  );
}

export default Button;
