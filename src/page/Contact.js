import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Righside } from './Rightside.js'
import { Main } from './Main.js'



export default function Home() {
  return (<>

<div className="row">

<Sidebar/>

<Header/>




<Main>


<div className="col-12 Ahdr22">
  Contact to us
  </div>
 
 <div className="col-12" style={{background:'#fff'}}> 
  <form>
  

  <div className="cdiv">
    <label> Name </label>
  <input type="text" maxLength={128} className="csinpt" placeholder="put here your name"/>
  
   </div>
   
   <div className="cdiv">
    <label> Email </label>
  <input type="text" maxLength={128} className="csinpt" placeholder="put here your Email"/>
    
    </div>
    
    <div className="cdiv">
    <label> Text </label>
    
 
  <input type="text" maxLength={5000} className="csinpt" placeholder="put here your text"/>
   </div>
    <br/>
  
  <button> Send </button>
  
  </form>
  </div>
 
 
 
 
   

</Main>
 



<Righside/>



</div>




<div className="footer">
  <p>By  xuxrimuxri :D </p>
</div>


 </>);
}

