import { useEffect, useState } from 'react';

const Quote = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const URL = 'https://api.api-ninjas.com/v1/quotes';

  useEffect(() => {
    let cancel = false;
    const fetchData = async () => {
      try {
        const response = await fetch(URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'G084uIbzqRyasTOdVIIBeQ==pfkNn38txwlFSDX0',
          },
        });

        const json = await response.json();
        if (!cancel) {
          setData(json);
          setLoading(false);
        }
      } catch (error) {
        setError(true);
        throw new Error(`Error trying to fetch the URL: ${error}`);
      }
    };
    fetchData();
    return () => {
      cancel = true;
    };
  }, []);
  if (error) {
    return (
      <div>
        <h3>Random Quote</h3>
        <p>* Sorry, we have an error loading the quote, please reload the page to try again *</p>
      </div>
    );
  }
  if (loading) {
    return (
      <div>
        <h2> Quote</h2>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Quote:</h2>
      <p>
        &quot;
        {data[0].quote}
        &quot;
      </p>
      <p>
        <big>Author: </big>
        {data[0].author}
      </p>
    </div>
  );
};

export default Quote;
