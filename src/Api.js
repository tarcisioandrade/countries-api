import React from "react";

const Api = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const URL = "https://restcountries.com/v2/all";

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(URL);
      const json = await response.json();
      setData(json);
      setLoading(false);
    }
    fetchData();
  }, []);

  return { data, loading };
};

export default Api;
