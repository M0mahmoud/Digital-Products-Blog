import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

async function getPostBlog(postId) {
  const res = await fetch(`http://127.0.0.1:3000/api/posts/${postId}`);
  return res.json();
}

export default async function PageBlog({ params: { id } }) {
  const post = await getPostBlog(id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}</p>
          <div className={styles.author}>
            <Image
              src={post.userImage}
              alt="User Image"
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{post.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={post.img}
            alt="BLOG IMAGE"
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{post.content}</p>
      </div>
    </div>
  );
}
