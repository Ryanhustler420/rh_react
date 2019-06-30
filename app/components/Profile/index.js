/**
*
* Profile
*
*/

import React from 'react';

import styles from './styles.css';
import ImageCard from './../ImageCard/index';

function Profile () {
  return (
    <div className={styles.profile}>
      <h3 className={styles.heading}>Profile</h3>
      <div className={styles.gridContainer}>
        <div className={styles.item2}>
          <ImageCard 
              AvatarUrl="https://avatars2.githubusercontent.com/u/25275856?s=460&v=4"      
          />
        </div>
        <div className={styles.item1}>

        </div>
        <div className={styles.item3}>

        </div>
      </div>
    </div>
  );
}

export default Profile;
