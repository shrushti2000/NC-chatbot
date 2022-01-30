import React ,{useState} from 'react';
import {auth} from '../../firebase'
import { BrowserRouter,Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'
import './Navbar.css'
const Navbar=({user})=>{
  const history=useHistory()
    return(
        <nav style={{backgroundColor:"#875a53",height:"auto",padding:"5px"}}>
        <div class="nav-wrapper">
          <Link to="/chatbot"  >NaariCare</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
           {
             user?
             <> 
              <li style={{fontSize:"20px"}}><Link to="/dieasePrediction" >Disease Prediction</Link></li>
             <li><button className='btn logoutBtn' onClick={()=>{
              auth.signOut()
              history.push('/login')
            }}>logout</button></li>
           </>
            :
             <>
              <li style={{fontSize:"20px"}}><Link to="/login" >Login</Link></li>
             <li style={{fontSize:"20px"}}><Link to="/signup">Signup</Link></li>
           </>
            
           }
          </ul>
        </div>
      </nav>
    )
}
export default Navbar;