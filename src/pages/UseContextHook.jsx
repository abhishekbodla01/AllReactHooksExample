import { createContext, useContext, useState } from "react"

const GlobalStateContext=createContext();
export default function UseContextHook() {
  const [toggle, setToggle] = useState(false);
  return (
    <GlobalStateContext.Provider value={{toggle,setToggle}}>
    <div>
      <h1>UseContextHook</h1>
      <ChildToggleButton />
      <ChildDisplay/>
    </div>
    </GlobalStateContext.Provider>
  )
}
function ChildToggleButton(){
  const {setToggle}=useContext(GlobalStateContext);
  function randomFunc(){
    setToggle((prev)=>!prev)
  }
  return(
    <button onClick={randomFunc}>
      Toggle
      </button>
  ) 
};
function ChildDisplay(){
  const {toggle}=useContext(GlobalStateContext);
  return (
    <div>
      <h2>The Switch is: {toggle.toString()}</h2>
    </div>
  )
}
