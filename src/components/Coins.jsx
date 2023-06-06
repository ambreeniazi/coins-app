import React from "react"


export function Coins({name, icon,symbol,price}) {

 
  return (
    <div className=' coin'>
      <img src={icon} alt='icons'/>
      <h1>Name:{name}</h1>
      <h3>Symbol:{symbol}</h3>
      <h3>Price:{price}</h3>
      </div>
  )
}

export default Coins
