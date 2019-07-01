/**
*
* Legend
*
*/

import React from 'react';

import styles from './styles.css';

function Legend({list, label, type = 'normal'}) {
  // Pass One Dimension Array.
  const renderList = () => list.map ((item, i) => <li key={i}>{item}</li>);

  // Make Sure You Pass Array Of Arrays If Type id Work
  const renderWorkList = () =>
    list.map ((item, i) => (
      <div key={i} className={styles.Padded}>
        <div className={styles.WORK}>
          <h2> {item[0]} </h2>
          <span> - {item[1]} </span>
          <h4>&#10687; {item[2]} </h4>
          <blockquote> {item[3]} </blockquote>
        </div>
      </div>
    ));

  return (
    <div className={styles.legend}>
      {type === 'work'
        ? <div className={styles.Padded}>
            <fieldset className={styles.Fieldset}>
              <legend className={styles.legend}> &nbsp; Work &nbsp; </legend>
              {renderWorkList ()}
            </fieldset>
          </div>
        : <div className={styles.Padded}>
            <fieldset className={styles.Fieldset}>
              <legend className={styles.legend}> &nbsp; {label} &nbsp; </legend>
              <div className={styles.Padded}>
                {renderList ()}
              </div>
            </fieldset>
          </div>}
    </div>
  );
}

// Legend.PropTypes = {
//   list: React.PropTypes.array().isRequired,
//   label: React.PropTypes.string.isRequired,
// }

export default Legend;
