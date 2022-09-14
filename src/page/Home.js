import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Righside } from './Rightside.js'
import { Main } from './Main.js'
import Footer from './Footer.js'
import { Mainlist } from '../api/Functions.js'
import moment from 'moment'


export default function Home() {
	
const [Pdata, setPdata] = React.useState({status:'failed'});	
	
React.useEffect(() => {
	
	
async function qdata() {
	
const qd1 = await Mainlist();	
	setPdata(qd1)
}	
	
qdata();
	
}, [setPdata]);	

	
  return (<>

<div className="row">

<Sidebar/>

<Header/>




<Main>


<div className="col-12 aa22">
  New posts
  </div>
 
 {Pdata.status != 'failed' && Pdata.map((val,index)=> 
	 
   <div className="pstq" key={index}>
   
   <div className="psztq22"> Travel </div>
   <img src={`/img/${val.id}.jpg`}/>
   
   <div className="pstq_d cqwzzz"> {val.title} </div>
   <div className="pstq_d crw111"> {moment(parseInt(val.when_posted)).format('ll')} </div>
   <div className="pstq_de"><Link to={`/post/${val.id}`}>Detailed ....</Link> </div>
      
   </div>	 
)}   


    

</Main>
 



<Righside/>



</div>




<Footer/>


 </>);
}

