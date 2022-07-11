// import React, { useState } from 'react'

import { useContext } from "react"
import msgContext from "./context/msgContext"

const Page1 = () => {
    const [msg,setMsg]=useContext(msgContext);

  return (
    <>
    <input className='form-control' value={msg} onChange={(e)=>setMsg(e.target.value)}  type='text'/>
    <hr/>
    <h1>{msg}</h1>
    
    </>
  )
}

export default Page1