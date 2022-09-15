import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Righside } from './Rightside.js'
import { Main } from './Main.js'
import Footer from './Footer.js'
import { Is_Num } from '../api/Functions.js'




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
  
 
return (<>


<div className="row">

<Sidebar/>

<Header/>




<Main>



   <div className="post_bl">
   
	<div className="post_bl222">
     	<img src="/img/685cab7a5e6de45a38cad021ec80eb14.jpeg" className="a1a3"/>
   </div>
<div className="pstq_d a1a2"> qweqweqwe </div>
   <div className="pstq_d crw111"> JAN 20, 2022 </div>
   
   <div className="pstq_d">
   
   
   ხარკოვის ოლქში, ოკუპანტებისგან გათავისუფლებულ ქალაქ ბალაკლეიაში უკრაინის დროშა აღმართეს, – ამის შესახებ ხარკოვის საოლქო-სამხედრო ადმინისტრაციის ხელმძღვანელი, ოლეგ სინეგუბოვი „ტელეგრამში“ წერს.

„დღეს, სამხედროებმა, უკრაინის შეიარაღებული ძალების სახმელეთო ჯარების მეთაურის ალექსანდრ სირსკის ხელმძღვანელობით, უკრაინის დროშა აღმართეს“, – წერს სინეგუბოვი.


ხარკოვის ოლქში, ოკუპანტებისგან გათავისუფლებულ ქალაქ ბალაკლეიაში უკრაინის დროშა აღმართეს, – ამის შესახებ ხარკოვის საოლქო-სამხედრო ადმინისტრაციის ხელმძღვანელი, ოლეგ სინეგუბოვი „ტელეგრამში“ წერს.

„დღეს, სამხედროებმა, უკრაინის შეიარაღებული ძალების სახმელეთო ჯარების მეთაურის ალექსანდრ სირსკის ხელმძღვანელობით, უკრაინის დროშა აღმართეს“, – წერს სინეგუბოვი.


ხარკოვის ოლქში, ოკუპანტებისგან გათავისუფლებულ ქალაქ ბალაკლეიაში უკრაინის დროშა აღმართეს, – ამის შესახებ ხარკოვის საოლქო-სამხედრო ადმინისტრაციის ხელმძღვანელი, ოლეგ სინეგუბოვი „ტელეგრამში“ წერს.

„დღეს, სამხედროებმა, უკრაინის შეიარაღებული ძალების სახმელეთო ჯარების მეთაურის ალექსანდრ სირსკის ხელმძღვანელობით, უკრაინის დროშა აღმართეს“, – წერს სინეგუბოვი.


ხარკოვის ოლქში, ოკუპანტებისგან გათავისუფლებულ ქალაქ ბალაკლეიაში უკრაინის დროშა აღმართეს, – ამის შესახებ ხარკოვის საოლქო-სამხედრო ადმინისტრაციის ხელმძღვანელი, ოლეგ სინეგუბოვი „ტელეგრამში“ წერს.

„დღეს, სამხედროებმა, უკრაინის შეიარაღებული ძალების სახმელეთო ჯარების მეთაურის ალექსანდრ სირსკის ხელმძღვანელობით, უკრაინის დროშა აღმართეს“, – წერს სინეგუბოვი.


   
   
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

