"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import styles from "./DarkMode.module.css";

const DarkMode = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkMode;
