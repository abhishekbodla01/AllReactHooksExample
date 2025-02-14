import { useState } from 'react'

import './App.css'

function App() {
  const [car, setColor] = useState({
    color: 'red',
    model: '2021',
    price: '$200000',
    brand: 'BMW',
  })
  function changeColor(){
    setColor((prev) => {
      return {...prev, color: 'blue', model: '2022', price: '$250000', brand: 'Tesla'}
    });
  }
  return (
    <>
     <h1>My Car Brand:{car.brand}, model: {car.model}</h1>
      <h2>Price: {car.price}, color:{car.color}</h2>
     <button onClick={changeColor}>Blue</button>
    </>
  )
}

export default App
