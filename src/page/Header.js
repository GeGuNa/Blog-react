import React from 'react'
import { Link } from 'react-router-dom'


export function Header(){

return (<>


<div className="col-10" style={{padding: '0px'}}>

  <div className="head_frright">
  
  <div className="left hrdh brdr">
 <img src="https://img.icons8.com/color/96/search--v1.png" width="20"/>
  </div>
  
    <div className="left pcrcr1">
    <input type="text" className="mw1150" name="srch" placeholder="What do you seek"/>
    </div>

  <div className="right hrdh brdl">
 <Link to="/login"> <img src="https://img.icons8.com/color/96/test-account.png" width="20"/></Link>
  </div>
  
  </div>
    <span className="pcrr121"></span>
   <div className="head_right">
 
 <div className="brdr">Science</div>
  <div className="brdr">Wordly things</div>
  <div className="brdr">Programming</div>
  <div className="brdr">Nonsense</div>
  <div>About god</div>
 
 
  </div> 
  
  
</div>

</>)

}
