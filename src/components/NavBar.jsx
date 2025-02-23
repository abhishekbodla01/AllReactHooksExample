import React from 'react'
import { Link, Links } from 'react-router-dom'
export default function navbar() {
  return (
    <div className="navbar">
      <img src="src/assets/ReactHooksLogo.png" alt="navbar" className="logo"/>
      <ul>
        <Link path="/usestate"><li>UseStateHook</li></Link>
        <Link path="/userefhook"><li>UseRefHook</li></Link>
        <Link path="/useeffecthook"><li>UseEffectHook</li></Link>
        <Link path="/usecontext"><li>UseContextHook</li></Link>
        <Link path="/usereducer"><li>UseReducerHook</li></Link>
      </ul>
      <button>Get Started</button>
    </div>
  )
}
