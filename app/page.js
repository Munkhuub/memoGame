"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [match, setMatch] = useState();
  const [cardValue, setCardValue] = useState([
    { value: 1, isShown: false },
    { value: 2, isShown: false },
    { value: 3, isShown: false },
    { value: 4, isShown: false },
    { value: 5, isShown: false },
    { value: 6, isShown: false },
    { value: 7, isShown: false },
    { value: 8, isShown: false },
    { value: 9, isShown: false },
    { value: 10, isShown: false },
    { value: 11, isShown: false },
    { value: 12, isShown: false },
  ]);

  const handleClicked = (index) => {
    const newCardValue = [...cardValue];
    if (newCardValue.length < 2) return;
    newCardValue[index].isShown = true;
    setCardValue(newCardValue);
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.board}>
          {cardValue.map((item, index) => {
            return (
              <div
                className={styles.cards}
                key={index}
                onClick={() => handleClicked(index)}
              >
                {item.isShown == true ? item.value : ""}
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

// memo game
// 4x4 nudend hos toonuud baina
// ehendee haragdahgui
// negen zereg 2 card haragdah, hugatsaa 1 sec
// taarwal neg array ruu pushleh
// darahad ungu ni uurchlugduud gardag bh
