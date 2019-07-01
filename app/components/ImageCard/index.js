/**
*
* ImageCard
*
*/

import React from 'react';


import styles from './styles.css';

function ImageCard({AvatarUrl}) {
  return (
    <div className={styles.imageCard}>
      <img src={AvatarUrl} alt="Avatar" />
    </div>
  );
}

ImageCard.propTypes = {
  AvatarUrl: React.PropTypes.string.isRequired,
}

export default ImageCard;
