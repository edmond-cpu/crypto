import React from 'react';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [news, setNews] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
    //     const fetchnews = async () => {
    //         const url = 'https://real-time-finance-data.p.rapidapi.com/stock-news?symbol=AAPL%3ANASDAQ&language=en';
    //             const options = {
    //                 method: 'GET',
    //                 headers: {
    //                     'x-rapidapi-key': 'facffaabdfmshb091948b4c9fc3dp12ca16jsn0bb62201164a',
    //                     'x-rapidapi-host': 'real-time-finance-data.p.rapidapi.com'
    //                 }
    //             };

            

    //         try{
    //             const newapi = await fetch(url, options)
    //             if(!newapi.ok){
    //                 throw new Error('couldnt fetch api data')
    //             }
    //             const newsapi = await newapi.json();
    //             console.log('sucessfully fetch data', newsapi)
                
    //             setNews(newsapi.data)
    //         } catch(err){
    //             setError(err.message)
    //         }
    //     }
    //         fetchnews()
    },[])

    
    return(
     <>
         <section id='home-sec'>
             <div id='home-cont'>
                 <div id='home-article' className='glow glow1'>
                 <h2><span className='span-text'>EDCOINS</span> ALLOWS YOU TRACK YOUR TOP CYRPTO-CURRENCIES IN REAL-TIME</h2>
                 <h3>Stay updated with live prices, stats and market trends</h3>
                 <Link to='/market'><button>Explore Market</button></Link>
                 </div>
             </div>
         </section>
    
         {/* <section id='crypto-news' style={{minHeight: '100vh', background: 'white'}}>
                <div id='crpto-news'>
                    {news.map (() => (
                        <h1></h1>
                    ))}
                </div>
         </section>
     */}
     </>
    
    )
}






export default Home;