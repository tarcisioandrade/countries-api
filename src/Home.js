import React from "react";
import { Link } from "react-router-dom";
import Api from "./Api";
import styles from "./Home.module.css";

const Home = () => {
  const { data, loading } = Api();
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  const [searchValue, setSearchValue] = React.useState("");

  if (loading) return <div className="loading"></div>;
  return (
    <>
      <div className={styles.headerHome}>
        <input
          type="text"
          id="serach"
          name="search"
          placeholder="Search for a country..."
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <select
          name="filter"
          id="filter"
          onChange={(e) => setSearchValue(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      <div className={`${styles.boxCards} animeScale`}>
        {data &&
          data
            .filter(({ name, region }) => {
              if (searchValue === "") {
                return name;
              } else if (
                name
                  .toLocaleLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              ) {
                return name;
              } else if (
                region
                  .toLocaleLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              ) {
                return region;
              } else {
                return null;
              }
            })
            .map(({ name, population, region, capital, flags, alpha2Code }) => (
              <Link to={`card/${alpha2Code}`} key={name}>
                <div className={styles.card}>
                  <div className={styles.boxImg}>
                    <img src={flags.svg} alt="" />
                  </div>
                  <div className={styles.boxInfo}>
                    <p className={styles.cardName}>{name}</p>
                    <ul className={styles.info}>
                      <li>
                        <span style={{ fontWeight: "600" }}>Population:</span>{" "}
                        {population.toString().replace(regex, ".")}
                      </li>
                      <li>
                        <span style={{ fontWeight: "600" }}>Region:</span>{" "}
                        {region}
                      </li>
                      <li>
                        <span style={{ fontWeight: "600" }}>Capital:</span>{" "}
                        {capital ? capital : "N/A"}
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </>
  );
};

export default Home;
