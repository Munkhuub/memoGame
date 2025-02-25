"use client";

import styles from "./Weather.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState("Ulaanbaatar");
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://api.weatherapi.com/v1/forecast.json?key=399cb6193e6743db8a673748252502&q${city}",
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setData(data);
    };
    getData();
  }, [city]);
  console.log(data);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/images/light.png"></img>
          <div className={styles.search}>
            <img src="/images/search.png"></img>
            <input type="search" />
          </div>
          <div className={styles.cardLeft}>
            <img src="/images/sun.png"></img>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/images/dark.png"></img>
          <div className={styles.cardRight}>
            <img src="/images/moon.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
