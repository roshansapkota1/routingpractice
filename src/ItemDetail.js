import React, { useEffect, useState } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Item() {




useEffect(()=>{getRecipes()}, []);

const [item, setItem] = useState({});

const getRecipes = async () => {
    
}

  return (
    <div>
        <h1>Item</h1>
    </div>
  );
}

export default Item;