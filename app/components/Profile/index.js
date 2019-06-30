/**
*
* Profile
*
*/

import React from 'react';

import styles from './styles.css';
import Grid from '../ReusableGrid/Grid';
import ImageCard from './../ImageCard/index';

function Profile () {
  return (
    <div className={styles.profile}>
      <Grid gutter={25} rows={['100vh']} columns={['300px', '600px', '230px']}>
        <div className={styles.card}>
          <ImageCard AvatarUrl={"https://avatars2.githubusercontent.com/u/25275856?s=460&v=4"} />
          <div className={styles.About}>
            <fieldset className={styles.Fieldset}>
              <legend className={styles.Legend}> &nbsp; Sneak peek &nbsp; </legend>
              <span>Name: Gaurav Gupta</span><br />
              <span>Email: gouravgupta420@gmail.com</span><br />
              <span>Gender: Male</span><br />
              <span>Hobbie(s): [ programming, shopping, foodie ] </span><br />
              <span>Date of birth: 21st July 1997</span>
            </fieldset>
          </div>
        </div>
        <div className={styles.card}>
          Content
        </div>
        <div className={styles.card}>
          Notifications
        </div>
      </Grid>
    </div>
  );
}

export default Profile;
