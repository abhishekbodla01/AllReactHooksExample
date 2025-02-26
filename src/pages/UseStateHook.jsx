import { useState } from 'react';

function UseStateHook() {
  const initialState = {
    color: 'Red',
    model: '2018',
    price: '$85,000',
    brand: 'Tesla'
  };
  const [car, setColor] = useState(initialState);

  function changeColor() {
    setColor((prev) => {
      if(prev.color==='Red')
        return { ...prev, color: 'blue', model: '2022', price: '$100,000', brand: 'Rivian' };
      else
        return initialState;
    });
  }

  return (
    <>
      <h1>My Car Brand: {car.brand}, model: {car.model}</h1>
      <h2>Price: {car.price}, color: {car.color}</h2>
      <button onClick={changeColor}>Blue</button>
    </>
  );
}

export default UseStateHook;