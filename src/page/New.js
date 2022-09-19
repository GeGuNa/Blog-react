import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Righside } from './Rightside.js'
import { Main } from './Main.js'
import Footer from './Footer.js'
import { ajax } from '../api/axios.js'
import { Catlist } from '../api/Functions.js'


export default function Newpost() {
	
	
const [Title, setTitle] = React.useState("")	
const [Message, setMessage] = React.useState("")	
const [FileU, setFileU] = React.useState("")	
const [Statusof, setStatusof] = React.useState("")	
const [CatId2, SetCatId2] = React.useState("")	
		
		
		
const ChooseCat = (e) => SetCatId2(e.target.value)
const tsettitle = (e) => setTitle(e.target.value)
const tmessage1 = (e) => setMessage(e.target.value)		
const tsetFile = (e) => setFileU(e.target.files[0])

const [CatListd, SetCatList] = React.useState({status:'failed'})


React.useEffect(() => {

async function Data(){

const Qzd1244 = await Catlist()
SetCatList(Qzd1244)

}

Data()

},[SetCatList])





function onsubmit(e) {

console.log(`Adding of a new post`)

console.log(FileU)

if (Title.length == 0)setStatusof('Title cannot be empty')
else if (Message.length == 0)setStatusof('Description cannot be empty')
else if (FileU.length == 0)setStatusof('File must be picked up')
else if (CatId2.length == 0)setStatusof(`Choose category`)


else {
	
setStatusof('Its processing, please wait')	
	
const Fdata = new FormData();
Fdata.append('foto', FileU, FileU.name);
Fdata.append('title', Title);
Fdata.append('desc', Message);	
Fdata.append('catid', CatId2);	




ajax({
method: 'post',
url: '/add_blog',
data: Fdata
}).then(response => {

if (response.status==200){

console.log(response.data)
setStatusof('Its done')

} else {

setStatusof('An error occured sadly, try again')

}


}).catch(err => {
setStatusof(err)
});


}


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
 
 <div>{Statusof}</div>
 
 
 <div className="col-12" style={{background:'#fff'}}> 
  <div className="cfrm">
  <form onSubmit={onsubmit}>
  

  <div className="cdiv">
    <label> Title </label>
  <input type="text" maxLength={128} onInput={tsettitle} className="csinpt" placeholder="Name of a blog"/>
  
   </div>
   
   
   
	<div className="cdiv">
    <label className="csqqwe"> Category </label>
    <select className="csinpt mw1150" onChange={ChooseCat} defaultValue={""}>
    <option value="">Select category</option>
   {CatListd.status !== 'failed' && CatListd.map((val,index) =>
 	<option value={val.id} key={index}>{val.name}</option>
   )}
   </select>
      </div>
   
   <div className="cdiv">
    <label> Photo </label>
  <input type="file" className="csinpt" onChange={tsetFile} />
  
   </div>  
   
   
   <div className="cdiv">
    <label> Message </label><br/>
  <textarea className="csinpt" maxLength={50000} onInput={tmessage1} placeholder="Put here whatever you wish" >
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

