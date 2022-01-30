import React, { useState } from 'react'
import Button from './Button'
import Chat from './Chat'


const Chatt = () => {
    const [show, setShow] = useState(false)

    const showBtn = () => {
      setShow(!show)
    }
  
    return (
      <>
        <Button show={show} showBtn={showBtn} />
        {show && <Chat />}
      </>
    )
}

export default Chatt
