import React, { useRef } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const DarkMode = useRef();

  function onDarkMode() {
    document.documentElement.classList.toggle("dark");
  }
  
  return (
    <header className={styles.header}>
      <div className={`${styles.content} container`}>
        <h1 className={styles.title}>Where in the World?</h1>
        <div onClick={onDarkMode} ref={DarkMode} className={styles.boxDarkMode}>
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
