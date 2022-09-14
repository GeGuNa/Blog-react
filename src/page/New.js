import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Righside } from './Rightside.js'
import { Main } from './Main.js'
import Footer from './Footer.js'



export default function Newpost() {

function onsubmit(e) {

console.log(`Adding of a new post`)

e.preventDefault();

}




  return (<>

<div className="row">

<Sidebar/>

<Header/>




<Main>


<div className="col-12 Ahdr22">
  Adding new post
  </div>
 
 <div className="col-12" style={{background:'#fff'}}> 
  <div className="cfrm">
  <form onSubmit={onsubmit}>
  

  <div className="cdiv">
    <label> Title </label>
  <input type="text" maxLength={128} className="csinpt" placeholder="Name of a blog"/>
  
   </div>
   
   <div className="cdiv">
    <label> Photo </label>
  <input type="file" className="csinpt"/>
  
   </div>  
   
   
   <div className="cdiv">
    <label> Message </label><br/>
  <textarea className="csinpt" maxLength={50000} placeholder="Put here whatever you wish" >
  </textarea>
    
    </div>
    

  
  <button style={{marginLeft:'7px'}}> Add </button>
  
  </form>
   </div>
   
   
  </div>
 
 
 
 
   

</Main>
 



<Righside/>



</div>



<Footer/>

 </>);
}

