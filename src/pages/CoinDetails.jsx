import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
  const { uuid } = useParams();
  const [coin, setCoin] = useState(null);

  useEffect(() => {
    const fetchCoinDetails = async () => {
      const url = `https://coinranking1.p.rapidapi.com/coin/${uuid}`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        },
      };

      const res = await fetch(url, options);
      const comingdata = await res.json();
      setCoin(comingdata.data.coin);
    };

    fetchCoinDetails();
  }, [uuid]);

  if (!coin) return <h2 className='loading'>Loading...</h2>;

  return (
  <div className="coin-details-container">

    {/* HEADER */}
    <div className="coin-header">
      <img src={coin.iconUrl} alt={coin.name} className="coin-icon" />
      <div>
        <h1>{coin.name}</h1>
        <p className="symbol">{coin.symbol}</p>
      </div>
    </div>

    {/* PRICE CARD */}
    <div className="price-card">
      <h2>${Number(coin.price).toLocaleString()}</h2>
      <p>Rank: #{coin.rank}</p>
    </div>

    {/* DESCRIPTION */}
    <div className="coin-desc">
      <h3>About {coin.name}</h3>
      <p dangerouslySetInnerHTML={{ __html: coin.description }} />
    </div>

  </div>
);

};

export default CoinDetails;
