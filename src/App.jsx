import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import UseEffectHook from './pages/UseEffectHook';
import UseStateHook from './pages/UseStateHook';
import UseContextHook from './pages/UseContextHook';
import UseReducerHook from './pages/UseReducerHook';
import UseRefHook from './pages/UseRefHook';
import './App.css';
import NavBar from './components/navbar';

function App() {
  
  return(
    <>
    <NavBar />
    <div className="Container"> 
    <Routes>
      <Route path="/usestate" element={<UseStateHook />} />
      <Route path="/useeffect" element={<UseEffectHook />} />
      <Route path="/usecontext" element={<UseContextHook />} />
      <Route path="/usereducer" element={<UseReducerHook />} />
      <Route path="/useref" element={<UseRefHook />} />
    </Routes>
    </div>
    </>
  );
}
export default App;