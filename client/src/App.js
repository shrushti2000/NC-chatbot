import React, { useState ,useEffect} from 'react'

import Chat from './Components/Chat'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Chatt from './Components/Chatt'
import { auth } from './firebase'
import DiseasePrediction from './Components/DiseasePrediction/DiseasePrediction'
const App = () => {
  const [show, setShow] = useState(false)
const [user,setUser]=useState(null)
  const showBtn = () => {
    setShow(!show)
  }
useEffect(()=>{
  auth.onAuthStateChanged(user=>{
    if(user){
setUser(user)
    }else{
setUser(null)
    }
  })
},[])
  return (
    <>
    <BrowserRouter>
   <Navbar user={user}/>
   <Switch>
   <Route exact path="/login"><Login/></Route>
  <Route exact path="/homePage"> <Chatt user={user}/></Route>
 
  <Route path="/signup"><Signup/></Route>
  <Route path="/dieasePrediction" > <DiseasePrediction user={user}/></Route>
     </Switch>

    
    </BrowserRouter>
   
    </>
  )
}

export default App
