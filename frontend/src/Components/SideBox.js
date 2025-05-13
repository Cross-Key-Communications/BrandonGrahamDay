//import React, { useEffect, useState } from 'react';
//import './SideBox.css';
//
//function SideBox({ title }) {
//  const [items, setItems] = useState([]);
//
//  useEffect(() => {
//    const fetchData = async () => {
//      if (title.includes('Stock')) {
//        const symbols = ['AAPL', 'GOOGL', 'MSFT'];
//        const token = 'd0ho26pr01ql9qu5umh0d0ho26pr01ql9qu5umhg';
//        const requests = symbols.map(symbol => {
//          return fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${token}`)
//            .then(res => res.json())
//            .then(data => ({ symbol, price: data.c }));
//        });
//        const results = await Promise.all(requests);
//        setItems(results);
//      } else if (title.includes('NFL')) {
//        const res = await fetch('https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4391');
//        const json = await res.json();
//        setItems(json.events ? json.events.slice(0, 5) : []);
//      }
//    };
//
//    fetchData();
//  }, [title]);
//
//  return (
//    <div className="side-box">
//      <h3>{title}</h3>
//      <ul>
//        {items.map((item, index) => (
//          title.includes('Stock') ? (
//            <li key={index}>{item.symbol}: ${item.price}</li>
//          ) : (
//            <li key={index}>
//              {item.strHomeTeam} {item.intHomeScore} - {item.intAwayScore} {item.strAwayTeam}
//            </li>
//          )
//        ))}
//      </ul>
//    </div>
//  );
//}
//
//export default SideBox;
