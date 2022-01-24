import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

const Card = () => {
  const params = useParams();
  const navigate = useNavigate();
  const code = params.id.toLowerCase();
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const regex = /\B(?=(\d{3})+(?!\d))/g;

  React.useEffect(() => {
    async function fetchCode() {
      setLoading(true);
      const response = await fetch(
        `https://restcountries.com/v2/alpha/${code}`
      );
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchCode();
  }, [code]);

  function goBack() {
    navigate("/");
  }

  if (loading) return <div className="loading"></div>;
  return (
    <>
      {data && (
        <div className={`${styles.container} animeScale`}>
          <button onClick={goBack} className={styles.btnBack}>
            Back
          </button>
          <div className={styles.containerCard}>
            <div className={styles.boxImg}>
              <img src={data.flags.svg} alt="" />
            </div>
            <div>
              <h1 className={styles.title}>{data.name}</h1>
              <ul className={styles.ul}>
                <li>
                  <span style={{ fontWeight: "600" }}>Native Name: </span>
                  {data.nativeName}
                </li>
                <li>
                  <span style={{ fontWeight: "600" }}>Population: </span>
                  {data.population.toString().replace(regex, ".")}
                </li>
                <li>
                  <span style={{ fontWeight: "600" }}>Region: </span>
                  {data.region}
                </li>
                <li>
                  <span style={{ fontWeight: "600" }}>Sub Region: </span>
                  {data.subregion}
                </li>
                <li>
                  <span style={{ fontWeight: "600" }}>Capital: </span>
                  {data.capital ? data.capital : "N/A"}
                </li>
                <li>
                  <span style={{ fontWeight: "600" }}>Top Level Domain: </span>
                  {data.topLevelDomain}
                </li>
                <li>
                  <span style={{ fontWeight: "600" }}>Currencies: </span>
                  {data.currencies ? data.currencies[0].name : "N/A"}
                </li>
                {
                  <li>
                    <span style={{ fontWeight: "600" }}>Languages: </span>
                    {data.languages.map((lang) => lang.name + ", ")}{" "}
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
