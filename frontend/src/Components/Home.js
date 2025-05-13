import React from 'react';
import ImageSlider from './ImageSlider';
import NewsGrid from './NewsGrid';
import SideBox from './SideBox';

const FINNHUB_TOKEN = 'YOUR_API_KEY_HERE'; // Replace with real token

// Stock data fetch function (calls Finnhub)
const fetchStockData = async () => {
  const res = await fetch('https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${d0ho26pr01ql9qu5umh0d0ho26pr01ql9qu5umhg}');
  const json = await res.json();
  return json.slice(0, 10); // display first 10 symbols
};

// Sports score fetch function (calls TheSportsDB)
const fetchSportsData = async () => {
  const res = await fetch('https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4391');
  const json = await res.json();
  return json.events.slice(0, 5); // last 5 games
};

const Home = () => {
  return (
  <div className="home-layout" style={{ display: 'flex', gap: '20px' }}>
        {/* Left box: Stocks */}
        <SideBox
          title="📈 Stock Symbols"
          fetchData={fetchStockData}
          renderItem={(item, index) => (
            <li key={index}>{item.displaySymbol} - {item.description}</li>
          )}
        />
    {/* Center content */}
    <div>
      <ImageSlider />
      <NewsGrid />
    </div>
  );
};

export default Home;
