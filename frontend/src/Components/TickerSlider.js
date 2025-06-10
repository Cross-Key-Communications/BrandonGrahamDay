import React from 'react';
import TickerBox from './TickerBox'; // Make sure TickerBox.jsx exists
import './TickerSlider.css';

const symbols = [
  { symbol: 'AAPL', label: 'Apple' },
  { symbol: 'JPM', label: 'JPMorgan Chase' },
  { symbol: 'JNJ', label: 'Johnson & Johnson' },
  { symbol: 'XOM', label: 'ExxonMobil' },
  { symbol: 'NKE', label: 'Nike' },
  { symbol: 'BA', label: 'Boeing' }
];

// Helper to divide symbols into groups of 2
const groupSymbols = (symbols, groupSize) => {
  const result = [];
  for (let i = 0; i < symbols.length; i += groupSize) {
    result.push(symbols.slice(i, i + groupSize));
  }
  return result;
};

const TickerSlider = () => {
const groupedSymbols = groupSymbols(symbols, 2).slice(0, 3);

  return (
    <div className="ticker-slider-grid">
      {groupedSymbols.map((pair, index) => (
        <TickerBox key={index} symbols={pair} delayStart={index * 1500} />
      ))}
    </div>
  );
};

export default TickerSlider;
