import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Righside } from './Rightside.js'
import { Main } from './Main.js'
import Footer from './Footer.js'
import { Is_Num, CatlistPdt2 } from '../api/Functions.js'
import { Api_url } from '../api/env.js'
import moment from 'moment'

export default function Categories() {

const pgprm = useParams();

const id = pgprm.cid

if (Is_Num(id) === false) {

return <div> uups something went wrong </div>

} else {

return <Category id={id}/>

}


}




function Category(props) {

const id = props.id



const [PstData, SetPstData] = React.useState({status:'failed'})


useEffect(() => {

async function Data(){

const QpData = await CatlistPdt2(id)
SetPstData(QpData)

}

Data()

},[SetPstData, id])




  return (<>

<div className="row">

<Sidebar/>

<Header/>




<Main>


<div className="col-12 Ahdr22">
  Posts by category
  </div>
 
 <div className="col-12" style={{background:'#fff'}}> 
  
 
 
   
 {PstData.status != 'failed' && PstData.map((val,index)=> 
	 
   <div className="cspstbrd pstq" key={index}>
   
   <div className="psztq22"> Travel </div>
   <img src={`${Api_url}/${val.fileaddr}`}/>
   
   <div className="pstq_d cqwzzz"> {val.title} </div>
   <div className="pstq_d crw111"> {moment(parseInt(val.when_posted)).format('ll')} </div>
   <div className="pstq_de"><Link to={`/post/${val.id}`}>Detailed ....</Link> </div>
      
   </div>	 
)}   
   
 
  
<div className="csqqwe22"> 
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
  
  
  </div>
 
 
 
 
   

</Main>
 



<Righside/>



</div>



<Footer/>

 </>);
}

