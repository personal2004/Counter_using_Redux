import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchProducts } from './actions/fetchapiaction';
const App=()=>{
  const products= useSelector((state) => state.user.items);
  const error = useSelector(state => state.user.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
     <h1>Hi</h1>
  
    <div className="product-list">
    { products !== undefined && products.map((product,index) => (
      <div key={index}>
            <h2>{product.name}</h2>
              <div>
                <p>Color: {product.data?.color || 'N/A'}</p>
                <p>Capacity: {product.data?.capacity || 'N/A'}</p>
              </div>
       </div>
    ))
    
    }

    </div>

    </div>
  );
}

export default App;
