import React from 'react';
import styles from './App.module.scss';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';


function App ({ userData = {} }) {
  return (
    <div className={styles.container}>
      <Header userData={userData} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
