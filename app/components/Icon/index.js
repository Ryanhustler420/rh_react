/**
*
* Icon
*
*/

import React from 'react';


import styles from './styles.css';

function Icon({ ImageUrl, children, size }) {
  return (
    <div className={styles.icon}>
      <img src={ImageUrl} style={{
          width: size,
          height: size,
      }}/>
      {children}
    </div>
  );
}

Icon.propTypes = {
  ImageUrl: React.PropTypes.string.isRequired,
  size: React.PropTypes.string.isRequired
}

Icon.defaultProps = {
  size: '2rem',
}

export default Icon;
