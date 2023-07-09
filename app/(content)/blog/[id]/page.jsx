import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import styles from "./page.module.css";

async function getData(postId) {
  const response = await fetch(`http://127.0.0.1:3000/api/posts/${postId}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    return notFound();
  }
  const data = await response.json();
  return data;
}

const Page = async ({ params }) => {
  const post = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.desc}>{post.desc}</p>
          <div className={styles.author}>
            <Image
              src={post.img}
              alt=""
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
};

export default Page;
