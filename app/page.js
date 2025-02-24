"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [match, setMatch] = useState();
  const [cardValue, setCardValue] = useState([
    { value: 1, isShow: false },
    { value: 2, isShow: false },
    { value: 3, isShow: false },
    { value: 4, isShow: false },
    { value: 5, isShow: false },
    { value: 6, isShow: false },
    { value: 7, isShow: false },
    { value: 8, isShow: false },
    { value: 9, isShow: false },
    { value: 10, isShow: false },
    { value: 11, isShow: false },
    { value: 12, isShow: false },
  ]);
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.board}>
          {cardValue.map((item, i) => {
            return (
              <div className={styles.cards} key={i}>
                {item.isShow == true ? item.value : ""}
              </div>
            );
          })}
        </div>
        <div className={styles.spec}>
          <div className={styles.mistakes}></div>
          <div className={styles.moves}></div>
          <div className={styles.time}></div>
        </div>
      </div>
    </div>
  );
}

// ergedeg togloom
// darahad ungu ni uurchlugduud gardag bh
