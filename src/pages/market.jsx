import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Market = () => {
    const navigate = useNavigate();
    const [trades, setTrades] = useState([]);
    const [error, setError] = useState(null);


  useEffect (() => {
   
     const fetchCoins = async () => {
      const url = 'https://coinranking1.p.rapidapi.com/coins/trending?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&limit=50&offset=0';

      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
          'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
      };

      try{
        const coinsApi = await fetch(url, options )
        if(!coinsApi.ok) {
            console.log('failed to fetch coin datas')
        }
        const coins = await coinsApi.json()
        console.log('successfully fetched data', coins)

        setTrades(coins.data.coins);
      } catch (err){
        setError(err.message)
      }

    }

    fetchCoins()
  },[])

    if (trades.length === 0) {
    return (
      <div className="loading">
        <h2>Loading Market Data...</h2>
      </div>
    );
  }

  

    return(
      <div className='market-page'>

       <div className='market-header'><h2>Market Overview</h2></div>

          
        <div className='coins-card'>
        {trades.map((coins) => (

          <div className='coin-card'  key= {coins.uuid}>
            <div className='image'>
              <img src= {coins.iconUrl} alt= {coins.name} />
            </div>
            
            <h2> {coins.name} </h2>
            {/* <h4>  ${Number(coins.price).toLocaleString()} </h4> */}
            <div className='read'>
            {/* <h3> {coins.symbol} </h3> */}
              <button 
              className="read-more-btn"
              onClick={() => navigate(`/coin/${coins.uuid}`)}
            >
              Read More → 
            </button>

            </div>
           
          </div>

          ))}
        </div>
        
        
      </div>

      
    )
};


export default Market;