import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from '../components/NavaBar'
import './main.css'
import Avax from '../assets/images/avax@2x.png'
import Binance from '../assets/images/bnb@2x.png'
import Bitcoin from '../assets/images/btc@2x.png'
import Doge from "../assets/images/doge@2x.png"
import Shiba from '../assets/images/sbd@2x.png'
import XRP from '../assets/images/xrp@2x.png'
import USDC from '../assets/images/usdc@2x.png'
import FDUSD from '../assets/images/fldc@2x.png'
import Solana from '../assets/images/sol@2x.png'
import Etherium from '../assets/images/eth@2x.png'
import Generic from '../assets/images/generic@2x.png'


function mainPaig() {
  const [coin, setCoin] = useState(null)

  useEffect(()=>{

    fetchCoins()

  },[])

  const fetchCoins  = async ()=>{
    // const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    // console.log(res.data)
    const apiKey = '76387EF5-D925-43D3-B1EC-1CFBF8DAF591'; // Replace with your CoinAPI API key
const baseUrl = 'https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/latest';

const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
const startTime = twoWeeksAgo.toISOString();

const endTime = new Date().toISOString();

const config = {
  headers: {
    'X-CoinAPI-Key': apiKey
  },
  params: {
    period_id: '1DAY',
    time_start: startTime,
    time_end: endTime
  }
};

try {const response = await axios.get(baseUrl, config)
  console.log(response)
} catch (error) {
  console.error('Error fetching data:', error);
}
}

return (
    <>
    <Navbar />
     <div className="container mx-auto px-4 py-8 max-w-8xl"> 
        <header className="mb-12 mt-12"> 
          <h1 className='text-center text-[#f1f5f9] text-4xl'>DASHBOARD</h1>
        </header>
      <main className="mb-8 mt-12  grid grid-cols-4 gap-4"> 
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#F59319]">
        <div class="px-6 py-4">
        <div className="mb-2 flex items-center justify-between">
            <p className="font-bold text-2xl">The Coldest Sunset</p>
            <img
              className="h-8 w-8" // Set the height and width of the image
              src={Etherium}
              alt="Logo"
            />
        </div>
          {/* <div class=" mb-2">
            <p className='inline-block font-bold text-xl'>The Coldest Sunset</p>
            <img className="inline-block justify-self-end"src={Etherium} alt="Logo"/>
          
          </div> */}
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#423A6F]">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#335280]">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#3A3263]">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#423A6F]">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        </div>
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-sky-50">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
        </div>
      </main>
      
    </div>
    
    </>
    
  )
}

export default mainPaig