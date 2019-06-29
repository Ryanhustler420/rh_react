/**
*
* Navigation
*
*/

import React from 'react';

import styles from './styles.css';

function Navigation ({links, avatar}) {

  const renderLinks = () => {
    return links.map((link, index) => (
      <li key={index}><a href={`${link.url}`}>{link.name}</a></li>
    ));
  }

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
          {renderLinks()}     
        </ul>
        {/* <img className={styles.image} src="https://avatars2.githubusercontent.com/u/25275856?s=460&v=4" /> */}
        <img className={styles.image} src={`${avatar}`} />
      </div>
    </div>
  );
}

Navigation.propTypes = {
  links: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      url: React.PropTypes.string.isRequired,
    })
  ).isRequired,
  avatar: React.PropTypes.string.isRequired,
}

export default Navigation;
