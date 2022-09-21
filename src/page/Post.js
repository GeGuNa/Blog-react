import React, { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Righside } from './Rightside.js'
import { Main } from './Main.js'
import Footer from './Footer.js'
import { Is_Num, Post_details } from '../api/Functions.js'
import moment from 'moment'
import { Api_url } from '../api/env.js'

export default function Post() {

const pgprm = useParams();

const id = pgprm.id

if (Is_Num(id) === false) {

return <div> uups something went wrong </div>

} else {

return <Post_view id={id}/>

}


}


function Post_view(props) {

const id = props.id;
var imglnk = '';
const [dataf, setdataf] = React.useState({status:'unknown'}) 


const Qloc = useNavigate() 
 
 
useEffect(() => {


async function fetchdata(){

const qdata = await Post_details(id)

setdataf(qdata)
}

fetchdata()

}, [id, setdataf])  
 

if (dataf.status!=='failed' && dataf.status === 'error_post'){
return Qloc('/')
} 


if (dataf.status!=='unknown') {
imglnk = `${Api_url}/${dataf[0].fileaddr}`
} else {
imglnk = ''
}


return (<>


<div className="row">

<Sidebar/>

<Header/>




<Main>



   <div className="post_bl">
   
	<div className="post_bl222">
	
	
	 <img src={dataf.status!=='unknown' && imglnk } className="a1a3"/>
	
	 
  
   </div>
<div className="pstq_d a1a2">  {dataf.status!=='unknown' && (<span>{dataf[0].title}</span>)}
 </div>
   <div className="pstq_d crw111"> {dataf.status!=='unknown' && moment(parseInt(dataf[0].when_posted)).format('ll')} </div>
   
   <div className="pstq_d">
   
   
  {dataf.status!=='unknown' && (<span>{dataf[0].message}</span>)}

   
   
   </div>
   
   

   </div>

    
<div className="a1a4">



<div className="bottom_post2">

<div className="flex">


<div className="qw1zzqq">
<img src="/img/news-110x110-1.jpg"/>
</div>

<div className="cqwe1231z">
<div> <span className="qwe1z231z">BUSINESS</span> | <span className="clrqw2z">Jan 01, 2045</span></div>
<div className="pd2">LOREM IPSUM DOLOR SIT AMET ELIT...</div>

</div>

</div>


</div>

<div className="bottom_post2">

<div className="flex">


<div className="qw1zzqq">
<img src="/img/news-110x110-1.jpg"/>
</div>

<div className="cqwe1231z">
<div> <span className="qwe1z231z">BUSINESS</span> | <span className="clrqw2z">Jan 01, 2045</span></div>
<div className="pd2">LOREM IPSUM DOLOR SIT AMET ELIT...</div>

</div>

</div>


</div>

<div className="bottom_post2">

<div className="flex">


<div className="qw1zzqq">
<img src="/img/news-110x110-1.jpg"/>
</div>

<div className="cqwe1231z">
<div> <span className="qwe1z231z">BUSINESS</span> | <span className="clrqw2z">Jan 01, 2045</span></div>
<div className="pd2">LOREM IPSUM DOLOR SIT AMET ELIT...</div>

</div>

</div>


</div>









</div>

</Main>






<Righside/>



</div>




<Footer/>



 </>);
}

