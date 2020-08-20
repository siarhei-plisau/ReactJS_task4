import React from 'react';
import styles from './Main.module.scss';
import CardContainer from '../Cards/CardsContainer'

function Main() {
    return (
      <main className={styles.main}>
        <CardContainer />
      </main>
  );
}

export default Main;
