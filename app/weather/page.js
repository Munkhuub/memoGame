"use client";

import styles from "./Weather.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [city, setCity] = useState("Ulaanbaatar");
  const [data, setData] = useState(null);
  const [cities, setCities] = useState(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=399cb6193e6743db8a673748252502&q=${city}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      setData(data);
    };
    getData();
  }, [city]);

  useEffect(() => {
    const getDataCountry = async () => {
      const response = await fetch(
        `https://countriesnow.space/api/v0.1/countries`,
        {
          method: "GET",
        }
      );
      const dataCountry = await response.json();
      setCities(dataCountry);

      // let cities = [];
      // for (let i = 0; i < dataCountry?.data.length; i++) {
      //   for (let j = 0; j < dataCountry?.data[i].cities.length; j++) {
      //     cities.push(dataCountry?.data[i].cities[j]);
      //   }
      // }
      // return setCities(cities);
    };
    getDataCountry();
  }, []);
  console.log(cities);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const filteredCities = cities?.data.filter((item) =>
    item.country.includes(input)
  );
  console.log(filteredCities);

  const handleSelectedCity = (selectedCity, selectedCountry) => {
    setCity(`${selectedCity}, ${selectedCountry}`);
    setInput("");
  };
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img src="/images/light.png"></img>
          <div className={styles.search}>
            <img src="/images/search.png"></img>

            <input
              type="search"
              value={input}
              onChange={handleInputChange}
              placeholder="Search"
            />
          </div>
          <div className={styles.resultContainer}>
            {filteredCities?.length > 0 &&
              filteredCities?.map((item, index) => (
                <div key={index} className={styles.searchResult}>
                  {item.cities.map((itm, idx) => (
                    <div
                      key={idx}
                      className={styles.filteredcity}
                      onClick={data}
                    >
                      {itm}, {item.country}
                    </div>
                  ))}
                </div>
              ))}
          </div>
          <div className={styles.cardLeft}>
            <div className={styles.city}>{data?.location.name}</div>
            <img src="/images/sun.png"></img>
            <div className={styles.temperature}>{data?.current.temp_c}</div>
            <div className={styles.condition}>
              {data?.current.condition.text}
            </div>
            <div className={styles.icons}>
              <img src="/images/home.png"></img>
              <img src="/images/location.png"></img>
              <img src="/images/heart.png"></img>
              <img src="/images/user.png"></img>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="/images/dark.png"></img>
          <div className={styles.cardRight}>
            <img src="/images/moon.png"></img>
            <div className={styles.city}></div>
            <div className={styles.temperature}></div>
            <div className={styles.condition}></div>
            <div className={styles.icons}>
              <img src="/images/home.png"></img>
              <img src="/images/location.png"></img>
              <img src="/images/heart.png"></img>
              <img src="/images/user.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
