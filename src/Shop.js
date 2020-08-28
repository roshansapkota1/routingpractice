import React, { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {




useEffect(()=>{getRecipes()}, []);

const [items, setItems] = useState([]);

const getRecipes = async () => {
    const response = await fetch('https://api.edamam.com/search?q=barbeque&app_id=fee68eda&app_key=e5ac670d6c9cc04118e7efda54428159')
    const data = await response.json();
    setItems(data.hits);
}
console.log(items);

  return (
    <div className="App">
    {items.map(any => ( <div key={items.indexOf(any)}><Link to={`/shop/${items.indexOf(any)}`}>{any.recipe.label}</Link></div>
    ))}
    </div>
  );
}

export default Shop;