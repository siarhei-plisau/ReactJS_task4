import React from 'react';
import styles from './MenuList.module.scss';

function MenuList() {
  return (
    <nav className={styles.menu}>
      <ul className={styles.list}>
        <li><a href="index.html">News</a></li>
        <li><a href="index.html">about</a></li>
        <li><a href="index.html">How to buy</a></li>
        <li><a href="index.html">LogIn</a></li>
      </ul>
    </nav>
  );
 }
 
export default MenuList;
