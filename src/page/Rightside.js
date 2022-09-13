import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Mostviewed } from '../api/Functions.js'

export function Righside(){

const [MostviewedPosts, setMostviewedPosts] = React.useState({status:'failed'})


React.useEffect(()=> {


async function Data2(){

const Qzd124 = await Mostviewed()

setMostviewedPosts(Qzd124)
}

Data2()

},[setMostviewedPosts])


return (<>


  <div className="col-2 right">
    <div className="aside22">
      <h2>TRANDING NEWS</h2>  
    </div>
    
{MostviewedPosts.status!=='failed' && MostviewedPosts.map((val,index)=>
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
  
    
	<div className="aside22 asidbt">
      <h2>TAGS</h2>  
    </div>
    
       
  <div className="aside124">
    
     <span>Politic</span>     
     <span>Programming</span>
        <span>business</span>
        <span>sport</span>
        <span>football</span>
        <span>box</span>
         <span>science</span>
                 
   
    </div>   
    
    
  </div>

</>)

}
