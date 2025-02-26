import { useEffect, useState } from 'react'
import { BrowserRouter as Router,Route,Routes,Link, BrowserRouter } from 'react-router-dom';
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
      <Route path='/usestatehook' element={<UseStateHook />} />
      <Route path='/useeffecthook' element={<UseEffectHook />} />
      <Route path='/usecontexthook' element={<UseContextHook />} />
      <Route path='/usereducerhook' element={<UseReducerHook />} />
      <Route path='/userefhook' element={<UseRefHook />} />
    </Routes>
    </div>
    </>
  );
}
export default App;