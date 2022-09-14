import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Righside } from './Rightside.js'
import { Main } from './Main.js'
import Footer from './Footer.js'



export default function Signin() {

function onsubmit(e){

console.log(`test`)

e.preventDefault();
}




  return (<>

<div className="row">

<Sidebar/>

<Header/>




<Main>


<div className="col-12 Ahdr22">
  Sign in
  </div>
 
 <div className="col-12" style={{background:'#fff'}}> 
  <div className="cfrm">
  <form onSubmit={onsubmit}>
  

  <div className="cdiv">
    <label> Username or Email Address </label>
  <input type="text" maxLength={128} className="csinpt" placeholder="Email or Nickname"/>
  
   </div>
   
   <div className="cdiv">
    <label> Password </label>
  <input type="text" maxLength={128} className="csinpt" placeholder="Password"/>
    
    </div>
    

  
  <button style={{marginLeft:'7px'}}> Login </button>
  
  </form>
   </div>
   
   
  </div>
 
 
 
 
   

</Main>
 



<Righside/>



</div>



<Footer/>

 </>);
}

