/**
*
* Profile
*
*/

import React from 'react';

import styles from './styles.css';

function Profile () {
  return (
    <div className={styles.profile}>
      <h3 className={styles.heading}>Profile</h3>
      <div className={styles.gridContainer}>
        <div className={styles.item2}>Avatar</div>
        <div className={styles.item1}>Contents</div>
        <div className={styles.item3}>Footer</div>
      </div>
    </div>
  );
}

export default Profile;
