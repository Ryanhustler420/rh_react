/**
*
* Profile
*
*/

import React from 'react';

import styles from './styles.css';
import Grid from '../ReusableGrid/Grid';

function Profile () {
  return (
    <div className={styles.profile}>
      <Grid gutter={15} 
        rows={['100vh']} 
        columns={['250px', '750px']}
      >
        <div className={styles.card}>Avatar</div>
        <div className={styles.card}>Content</div>
      </Grid>
    </div>
  );
}

export default Profile;
