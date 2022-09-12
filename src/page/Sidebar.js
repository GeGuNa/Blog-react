import React from 'react'
import { Link } from 'react-router-dom'


export function Sidebar(){

return (<>


<div className="col-2" style={{padding: '0px'}}>
<div className="head_left">
  <h1><Link to="/" style={{color:'#fff'}}>Home</Link></h1>
  </div>
  
   <div className="menu" style={{padding: '0px'}} id="menu">
   
<div className="aside22">
	<h2>Site menu</h2>  
</div>
   
   <Link to="/"><div className="aw2z12zq3">Home</div> </Link> 
   <Link to="/About"><div className="aw2z12zq3">About us</div> </Link> 
   <Link to="/contact"><div className="aw2z12zq3">Contact page</div> </Link> 
   <a href="#"><div className="aw2z12zq3">Users</div> </a> 
   <a href="#"><div className="aw2z12zq3">Categories</div> </a> 
   <a href="#"><div className="aw2z12zq3">Popular posts</div> </a> 

  
  <div className="aside22" style={{marginTop: '20px'}}>
      <h2>Random post</h2>  
    </div>
  
  <div className="aside123">
    
     <span>
    <img src="/img/news-110x110-1.jpg" style={{width: '50px'}} width="50"/>
    </span>
    

    <span>
    qweqweqwe<br/>
    qweqweqwe
    </span>
    </div>
    
    <div className="aside123">
    
     <span>
    <img src="/img/news-110x110-1.jpg" style={{width: '50px'}} width="50"/>
    </span>
    

    <span>
    qweqweqwe<br/>
    qweqweqwe
    </span>
    </div>
    
    <div className="aside123">
    
     <span>
    <img src="/img/news-110x110-1.jpg" style={{width: '50px'}} width="50"/>
    </span>
    

    <span>
    qweqweqwe<br/>
    qweqweqwe
    </span>
    </div>
    
    <div className="aside123">
    
     <span>
    <img src="/img/news-110x110-1.jpg" style={{width: '50px'}} width="50"/>
    </span>
    

    <span>
    qweqweqwe<br/>
    qweqweqwe
    </span>
    </div>
    
    
    <div className="aside123">
    
     <span>
    <img src="/img/news-110x110-1.jpg" style={{width: '50px'}} width="50"/>
    </span>
    

    <span>
    qweqweqwe<br/>
    qweqweqwe
    </span>
    </div>
    
    <div className="aside123">
    
     <span>
    <img src="/img/news-110x110-1.jpg" style={{width: '50px'}} width="50"/>
    </span>
    

    <span>
    qweqweqwe<br/>
    qweqweqwe
    </span>
    </div>
  
  
  </div> 
  
</div>

</>)

}
