
import React ,{useState} from 'react'
import {auth} from '../../firebase'
import {useHistory} from 'react-router-dom'
import '../Login/Login.css'
export default function Signup(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const history=useHistory()
    const handleSubmit=async (e)=>{
        e.preventDefault();
        console.log(email,password);
        try{
          const result=await auth.createUserWithEmailAndPassword(email,password)
         // window.M.toast({html:`welcome${result.user.email}`,classes:"green"})
       history.push('/login')
        }catch(err){
        //  window.M.toast({html:err.message,classes:"green"})
      console.log("error") 
      }
      
    }
    return(
      <div className="center container" style={{maxWidth:"500px"}}>
            <h3 className='heading'>SignUp</h3>
            <form onSubmit={(e)=>handleSubmit(e)}>

            <div className="input-field col s12">
          <input id="email" type="email" onChange={(e)=>setEmail(e.target.value)}/>
          <label for="email">Email</label>
        </div>
           
        <div className="input-field">
          <input id="password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
          <label for="password">Password</label>
        </div>
      <button type="submit" className="btn loginSubmitBtn">Signup</button>
   
     
      
            </form>
        </div>
    )
}