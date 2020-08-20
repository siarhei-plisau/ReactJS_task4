import React from 'react';
import styles from './Card.module.scss';

function Card( {price, title, imageUrl,about} ) {
    return (
      <div className={styles.card}>
        <p>{title}</p>
        <img src={imageUrl} alt='pic' />
        <p>{about}</p>
        <p>{price}</p>
      </div>
    );
}

export default Card;