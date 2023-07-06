import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
          />
          <textarea
            className={styles.textArea}
            placeholder="Text Message..."
            cols="30"
            rows="10"
          ></textarea>
          <button className={styles.btn} type="button">
            Send
          </button>
        </form>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Page;
