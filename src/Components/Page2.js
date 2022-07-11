import React, { useContext } from 'react'
import msgContext from './context/msgContext';

const Page2 = () => {

    const [msg,setMsg]=useContext(msgContext);
  return (
    <>
    <div>{msg}</div>
    <p></p>
    </>

  )
}

export default Page2