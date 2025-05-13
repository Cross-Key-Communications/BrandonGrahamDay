import React, { useEffect, useState } from 'react';

function SidebarFeed({ title, fetchData, renderItem }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData()
      .then(setItems)
      .catch((err) => console.error(`${title} fetch error:`, err));
  }, [fetchData, title]);

  return (
    <div className="sidebar-feed">
      <h3>{title}</h3>
      <ul>{items.map(renderItem)}</ul>
    </div>
  );
}

export default SidebarFeed;
