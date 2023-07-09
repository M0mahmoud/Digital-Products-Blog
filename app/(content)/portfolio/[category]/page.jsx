import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { items } from "./data";
import styles from "./page.module.css";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <button className={styles.btn} type="button">
              See More
            </button>
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill
              src={item.image}
              alt="BLOG IMAGE"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
