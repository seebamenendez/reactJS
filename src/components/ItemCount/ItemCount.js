import React, { useState } from 'react';
import './counter.css';

const ItemCount = ({min, max}) => {



const [counter, setCounter] = useState(min);

const handleIncrement = () => {
    counter < max ? setCounter(prev => prev + 1) : alert('Stock máximo del producto.')
    
}

const handleDecrement = () => {
    counter > min ? setCounter(prev => prev - 1) : alert('Minimo de compra.')

    
}

const reset = () => {
    setCounter(min);
}


    return (
      <div className='counter'>
          <h1>{counter}</h1>
  
          <button onClick={handleIncrement}>+</button>
          <button onClick={reset}>Reset</button>
          <button onClick={handleDecrement}>-</button>
  
      </div>
    )
  }
  
  export default ItemCount;