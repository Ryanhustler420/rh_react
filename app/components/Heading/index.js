/**
*
* Heading
*
*/

import React from 'react';

import styles from './styles.css';

/**
 * 
 * @param {Size} param0 defines the tag size
 * 
 * @param { color } param1 defines the color of text
 * 
 */

function Heading({children, size, color}) {
  const templte = [
    <h1>{children}</h1>,
    <h2>{children}</h2>,
    <h3>{children}</h3>,
    <h4>{children}</h4>,
    <h5>{children}</h5>,
    <h6>{children}</h6>,
  ];
  return (
    <div className={styles.heading} style={{color}}>
      {size <= 6 && size >= 1 ? templte[size - 1] : templte[5]}
    </div>
  );
}

// Props Validation

Heading.propTypes = {
  color: React.PropTypes.string,
  size: React.PropTypes.number,
}

Heading.defaultProps = {
  color: 'black',
  size: 5
}

export default Heading;
