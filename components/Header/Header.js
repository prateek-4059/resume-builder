import React from "react";

import resumeSvg from "../../assets/1.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>It's free</span>
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className={styles.pt}>
          <h2 >A Free, Quick and Easy Way to create your professional resume</h2>
        </div>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
      
    </div>
  );
}

export default Header;
