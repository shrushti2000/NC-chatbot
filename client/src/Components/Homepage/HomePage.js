import React, { useState } from 'react'


const HomePage = () => {
  const [show, setShow] = useState(false)

  const showBtn = () => {
    setShow(!show)
  }

  return (
    <>
   <h5>Hello Hompage</h5>
  
    </>
  )
}

export default HomePage