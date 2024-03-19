import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from '../components/NavaBar'
import CryptoCards from '../components/CryptoCards'

import './main.css'




function mainPage() {
  const [coinData, setCoinData] = useState(null)

  useEffect(()=>{

    fetchCoins()

  },[])

  const fetchCoins  = async ()=>{
    try {
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        setCoinData(res.data)
        //console.log(res.data)
    } catch (error) {
      console.error(error)
    }
    
    // console.log(res.data)
// const apiKey = '76387EF5-D925-43D3-B1EC-1CFBF8DAF591'; 
// const baseUrl = 'https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest';

// const twoWeeksAgo = new Date();
// twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
// const startTime = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

// const endTime = new Date().toISOString();

// const config = {
//   headers: {
//     'X-CoinAPI-Key': apiKey
//   },
//   params: {
//     period_id: '1HRS',
//     time_start: startTime,
//     time_end: endTime
//   }
// };

// try {const response = await axios.get(baseUrl, config)
//   console.log(response)
// } catch (error) {
//   console.error('Error fetching data:', error);
// }
}

return (
    <>
    <Navbar />
     <div className="container mx-auto px-4 py-8 max-w-8xl"> 
        <header className="mb-12 mt-12"> 
          <h1 className='text-center text-[#f1f5f9] text-4xl'>DASHBOARD</h1>
        </header>
      <main className="mb-8 mt-12  grid grid-cols-4 gap-4"> 
      {coinData ? coinData.map((data) => (
        <CryptoCards key={data.name} data={data} />
      )) : <p>LOADING...</p>}
      </main>
      
    </div>
    
    </>
    
  )
}

export default mainPage