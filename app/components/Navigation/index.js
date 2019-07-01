/**
*
* Navigation
*
*/

import React from 'react';

import styles from './styles.css';
import Icon from './../Icon/index';
import HandShake from './../HandShake/index';

function Navigation ({links, avatar}) {

  const renderLinks = () => {
    return links.map((link, index) => (
      <li key={index}><a href={`${link.url}`}>{link.name}</a></li>
    ));
  }

  return (
    <div className={`${styles.navigation}`}>

      <div className={styles.navigation}>
        <div className={`${styles.image}`}>
          <HandShake>
            <Icon size="2.5rem" ImageUrl="https://res.cloudinary.com/dcalvdelc/image/upload/v1561832703/hand2.png" className={styles.shakehand}></Icon>
          </HandShake>
        </div>
        <h3 className={styles.brand}>
          Raisehand
          <small className={styles.punch}>
            &nbsp; Meant for <span className={styles.change}></span>
          </small>
        </h3>
      </div>

      <div className={styles.navigation}>
        <ul> {renderLinks()} </ul>
        <div className={`${styles.image}`}>
          <Icon rounded size="2.5rem" ImageUrl={avatar} className={styles.shakehand}></Icon>
        </div>
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
