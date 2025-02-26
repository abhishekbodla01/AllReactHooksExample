import React from 'react'
import { Link } from 'react-router-dom'
export default function navbar() {
  return (
    <div className="navbar">
      <img src="src/assets/ReactHooksLogo.png" alt="navbar" className="logo"/>
      <ul>
        <Link to='/usestatehook'><li>UseStateHook</li></Link>
        <Link to='/userefhook'><li>UseRefHook</li></Link>
        <Link to='/useeffecthook'><li>UseEffectHook</li></Link>
        <Link to='/usecontexthook'><li>UseContextHook</li></Link>
        <Link to='/usereducerhook'><li>UseReducerHook</li></Link>
      </ul>
      <button>Get Started</button>
    </div>
  )
}
