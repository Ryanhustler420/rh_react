/**
*
* Grid
*
*/

import React from 'react';

import styles from './styles.css';

function Grid({children, gutter, rows, columns, padding}) {
  const calculate = array =>
    array.map (e => e).toString ().split (',').join (' ');

  return (
    <div
      className={styles.grid}
      style={{
        display: 'grid',
        gridGap: calculate(gutter),
        gridColumnGap: gutter,
        padding: padding,
        gridTemplateColumns: calculate (columns),
        gridTemplateRows: calculate (rows),
      }}
    >
      {children}
    </div>
  );
}

Grid.PropTypes = {
  gutter: React.PropTypes.number.isRequired,
  rows: React.PropTypes.array.isRequired,
  columns: React.PropTypes.array.isRequired,
  padding: React.PropTypes.string,
};

Grid.defaultProps = {
  padding: '10px',
};

export default Grid;
