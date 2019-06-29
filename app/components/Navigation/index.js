/**
*
* Navigation
*
*/

import React from 'react';

import styles from './styles.css';

function Navigation () {
  return (
    <div className={`${styles.navigation} ${styles.shadow}`}>
    <div className={styles.navigation}>
      <img className={`${styles.image} ${styles.shakehand}`} src="https://res.cloudinary.com/dcalvdelc/image/upload/v1561832703/hand2.png"/>
      <h3 className={styles.brand}>
        {/* Brand Name Falls Here */}
        Raisehand
        <small className={styles.punch}>
          &nbsp; &quot;meant for humans&quot;
        </small>
      </h3>
    </div>
      <div className={styles.navigation}>
        <ul>
          <li><a href="#findProduct">Find Products</a></li>
          <li><a href="#findJobs">Find Jobs</a></li>
          <li><a href="#findContacts">Find Peoples</a></li>
          <li><a href="#myContacts">My Contacts</a></li>      
        </ul>
        <img className={styles.image} src="https://avatars2.githubusercontent.com/u/25275856?s=460&v=4" />
      </div>
    </div>
  );
}

export default Navigation;
