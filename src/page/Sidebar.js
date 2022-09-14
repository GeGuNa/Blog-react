import React from 'react'
import { Link } from 'react-router-dom'
import { Randomposts } from '../api/Functions.js'
import moment from 'moment'


export function Sidebar(){

const [DataOfRandomPosts, SetDataOfRandomPosts] = React.useState({status:'failed'})


React.useEffect(()=> {


async function Data(){

const Qzd124 = await Randomposts()

SetDataOfRandomPosts(Qzd124)
}

Data()

},[SetDataOfRandomPosts])



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
  <Link to="/users"> <div className="aw2z12zq3">Users</div> </Link>  
    <Link to="/login"> <div className="aw2z12zq3">Login</div> </Link>  
   <a href="#"><div className="aw2z12zq3">Categories</div> </a> 
   <a href="#"><div className="aw2z12zq3">Popular posts</div> </a> 



  <div className="aside22" style={{marginTop: '20px'}}>
      <h2>Random post</h2>  
    </div>
  
{DataOfRandomPosts.status !== 'failed' && DataOfRandomPosts.map((val,index)=>
  <div className="aside123" key={index}>
    
     <span>
    <img src={`/img/${val.id}.jpg`} style={{width: '50px'}} width="50"/>
    </span>
    

    <span>
   <Link className="qwzqdq22" to={`/post/${val.id}`}>{val.title}</Link><br/>
    {moment(parseInt(val.when_posted)).format('ll')}
    </span>
    </div>

)}
  

   
  
  
  </div> 
  
</div>

</>)

}
