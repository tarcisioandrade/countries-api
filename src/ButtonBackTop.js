import React, { useState } from 'react';
import styles from "./ButtonBackTop.module.css"

const ButtonBackTop = () => {
  const [scrollValue, setScrollValue] = useState(0);

  function positionScroll() {
    setScrollValue(window.scrollY)
  }
  window.addEventListener("scroll", positionScroll)

  if(scrollValue < 500) return null
  return <button onClick={() => window.scrollTo(0, 0)} className={styles.btn}></button>;
};

export default ButtonBackTop;
