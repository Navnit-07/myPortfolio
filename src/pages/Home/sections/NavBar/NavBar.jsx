import React, { useEffect, useState } from 'react'
import styles from "./NavBar.module.css"
function NavBar() {

  const [isAffixed, setIsAffixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsAffixed(true);
      } else {
        setIsAffixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles["nav-container"]} ${isAffixed ? styles["affix"] : ""}`}>
      <div className= {styles["container"]}>
        <a href="#" className={styles["logo"]}>Portfolio</a>
        {/* hamburger */}
        
      </div>
    </div>
  )
}

export default NavBar