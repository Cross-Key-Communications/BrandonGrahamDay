import React, { useEffect, useState } from 'react';
import './CategoryNavBar';

const CategoryNavBar = ({ onCategorySelect }) => {
const [categories, setCategories] = useState([]);
const [activeCategory, setActiveCategory] = useState(null);

useEffect(() => {
fetch('http://localhost:8081/categories')
.then((res) => res.json())
.then((data) => setCategories(data));
}, []);

const handleClick = (category) => {
console.log('Clicked category:', category);
setActiveCategory(category.name);
onCategorySelect(category.name);
};

return (
 <nav className="category-navbar">
{categories.map((cat) => (
<button
key={cat.id}
className={`category-tab ${activeCategory === cat.name ? 'active' : ''}`}
onClick={() => handleClick(cat)}
>
 {cat.name}
</button>
 ))}
 </nav>
);
};
export default CategoryNavBar;

