import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Righside } from './Rightside.js'
import { Main } from './Main.js'
import Footer from './Footer.js'



export default function Users() {
  return (<>

<div className="row">

<Sidebar/>

<Header/>




<Main>


<div className="col-12 Ahdr22">
  List of all users
  </div>
 
 <div className="col-12" style={{background:'#fff'}}> 
  
  
  <div className="uslistM">
  
  <div className="uslists">
  	<img src="/user/avatardefault_92824.webp" width={50}/>
  </div>
  
 <div className="uslists">
 	<div className="uslistM11"><Link className="NickNmClor" to="/">Necro</Link></div>
 	<div className="uslistM11">Posts: 1526</div>
 </div> 
  
 </div>
    
    
  
    
  <div className="uslistM">
  
  <div className="uslists">
  	<img src="/user/avatardefault_92824.webp" width={50}/>
  </div>
  
 <div className="uslists">
 	<div className="uslistM11"><Link className="NickNmClor" to="/">Necro</Link></div>
 	<div className="uslistM11">Posts: 1526</div>
 </div> 
  
 </div>
 
 
 
 
   
  <div className="uslistM">
  
  <div className="uslists">
  	<img src="/user/avatardefault_92824.webp" width={50}/>
  </div>
  
 <div className="uslists">
 	<div className="uslistM11"><Link className="NickNmClor" to="/">Necro</Link></div>
 	<div className="uslistM11">Posts: 1526</div>
 </div> 
  
 </div>
 
 
   
  <div className="uslistM">
  
  <div className="uslists">
  	<img src="/user/avatardefault_92824.webp" width={50}/>
  </div>
  
 <div className="uslists">
 	<div className="uslistM11"><Link className="NickNmClor" to="/">Necro</Link></div>
 	<div className="uslistM11">Posts: 1526</div>
 </div> 
  
 </div>  
    
    
  
  
 <div className="pagination">
  <a href="#">&laquo;</a>
  <a href="#" className="active">1</a>
  <a href="#">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div> 
  
  
  
  </div>
 
 
 
 
   

</Main>
 



<Righside/>



</div>



<Footer/>

 </>);
}

